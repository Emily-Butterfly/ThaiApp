/* Plattform-Brücke: dieselbe Oberfläche läuft als Web-App (PWA) und als native App (Capacitor).
   In der nativen App übernehmen Plugins das Vorlesen, die Sicherung des Fortschritts,
   die Zurück-Taste, die Farbe der Statusleiste und die Live-Updates der Inhalte. */
(() => {
"use strict";
const Cap = window.Capacitor;
const native = !!(Cap && typeof Cap.isNativePlatform === "function" && Cap.isNativePlatform());
const os = native ? Cap.getPlatform() : "web";
const plugin = (name) => {
  if(!native) return null;
  try{ return Cap.isPluginAvailable(name) ? Cap.registerPlugin(name) : null; }catch(e){ return null; }
};
const Speech = plugin("TextToSpeech");
const Prefs = plugin("Preferences");
const App = plugin("App");
const Bars = native ? ((window.capacitorExports && window.capacitorExports.SystemBars) || plugin("SystemBars")) : null;
const Http = native ? ((window.capacitorExports && window.capacitorExports.CapacitorHttp) || plugin("CapacitorHttp")) : null;
const Updater = plugin("CapacitorUpdater");

/* ---- Speicher ----
   localStorage bleibt die schnelle, synchrone Quelle. In der App wird jede Änderung zusätzlich
   in den Geräte-Einstellungen gesichert, weil das System den WebView-Speicher leeren kann. */
const storage = {
  load(key){ try{ return localStorage.getItem(key); }catch(e){ return null; } },
  save(key, value){
    try{ localStorage.setItem(key, value); }catch(e){}
    if(Prefs) Prefs.set({key, value}).catch(() => {});
  },
  // Liefert die gesicherte Kopie, falls localStorage leer ist (sonst null).
  async restore(key){
    if(!Prefs || storage.load(key)) return null;
    try{
      const r = await Prefs.get({key});
      if(r && r.value){ try{ localStorage.setItem(key, r.value); }catch(e){} return r.value; }
    }catch(e){}
    return null;
  }
};

/* ---- Vorlesen ----
   Web: Web Speech API mit einer Thai-Stimme des Geräts.
   App: natives Text-to-Speech (der Android-WebView kennt keine Web Speech API). */
const LANG = "th-TH";
const tts = {ok:false, canInstall:false, onChange:null};
let webVoice = null;
const setOk = (ok) => {
  const was = tts.ok;
  tts.ok = ok;
  tts.canInstall = !ok && os === "android" && !!Speech;
  if(was !== ok && tts.onChange) tts.onChange(ok);
};
function pickWebVoice(){
  try{
    const vs = window.speechSynthesis.getVoices() || [];
    const th = vs.filter((v) => /^th([-_]|$)/i.test(v.lang || ""));
    webVoice = th.find((v) => v.localService) || th[0] || null;
    setOk(!!webVoice);
  }catch(e){}
}
async function checkNative(){
  // Die Sprach-Engine startet asynchron; direkt nach dem App-Start meldet sie oft noch "nicht unterstützt".
  for(const wait of [0, 400, 1200, 2500]){
    if(wait) await new Promise((r) => setTimeout(r, wait));
    try{
      const r = await Speech.isLanguageSupported({lang:LANG});
      if(r && r.supported){ setOk(true); return; }
    }catch(e){}
  }
  setOk(false);
}
tts.init = (onChange) => {
  tts.onChange = onChange;
  if(Speech){
    tts.canInstall = os === "android";
    checkNative();
    // Nach der Installation einer Thai-Stimme kommt man über "Zurück" in die App – dann neu prüfen.
    if(App) App.addListener("resume", () => { checkNative(); }).catch(() => {});
  } else if(!native && "speechSynthesis" in window){
    pickWebVoice();
    try{ window.speechSynthesis.addEventListener("voiceschanged", pickWebVoice); }catch(e){ window.speechSynthesis.onvoiceschanged = pickWebVoice; }
  }
};
tts.speak = (text, slow) => {
  if(!tts.ok) return;
  const rate = slow ? 0.55 : 0.85;
  if(Speech){
    Speech.speak({text, lang:LANG, rate}).catch(() => {});
    return;
  }
  try{
    const ss = window.speechSynthesis;
    ss.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = webVoice; u.lang = webVoice.lang; u.rate = rate;
    ss.speak(u);
  }catch(e){}
};
tts.install = () => { if(Speech) Speech.openInstall().catch(() => {}); };

/* ---- System ---- */
const system = {
  // Android-Zurück-Taste. handler bekommt {canGoBack}.
  onBack(handler){ if(App) App.addListener("backButton", handler).catch(() => {}); },
  exit(){ if(App) App.exitApp().catch(() => {}); },
  // Helle oder dunkle Symbole in der Statusleiste, passend zur gewählten Darstellung.
  setTheme(theme){
    if(!Bars) return;
    const style = theme === "dark" ? "DARK" : theme === "light" ? "LIGHT" : "DEFAULT";
    try{ Bars.setStyle({style}).catch(() => {}); }catch(e){}
  }
};

/* ---- Installation als Web-App ---- */
const install = {prompt:null, onChange:null};
install.standalone = native || (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
install.ios = !native && (/iP(hone|ad|od)/.test(navigator.userAgent || "") || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
if(!native){
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    install.prompt = e;
    if(install.onChange) install.onChange();
  });
  window.addEventListener("appinstalled", () => {
    install.prompt = null;
    install.standalone = true;
    if(install.onChange) install.onChange();
  });
}
install.run = async () => {
  const p = install.prompt;
  if(!p) return;
  install.prompt = null;
  try{ await p.prompt(); await p.userChoice; }catch(e){}
  if(install.onChange) install.onChange();
};

/* ---- Updates ----
   Jeder Build schreibt www/version.json mit zwei Fingerprints (scripts/version.mjs):
   - web:    Prüfsumme aller Dateien in www/ (Inhalte, Oberfläche, Schriften, Icons)
   - native: Prüfsumme des nativen Teils (Android, iOS, Plugins, App-Konfiguration)
   App: Ist der native Fingerprint gleich, lädt die App neue Inhalte als Paket nach (Live-Update,
   @capgo/capacitor-updater) – ohne Neuinstallation. Nur wenn er sich ändert, braucht es eine neue APK.
   Web: Der Service Worker trägt den Web-Fingerprint im Cache-Namen und lädt so jede neue Fassung. */
const CHECK_EVERY = 30 * 60 * 1000;
const updates = {status:"idle", info:null, latest:null, error:null, onChange:null};
const setStatus = (status, extra) => {
  Object.assign(updates, {error:null}, extra || {}, {status});
  if(updates.onChange) updates.onChange(updates);
};
const infoReady = fetch("version.json", {cache:"no-store"})
  .then((r) => (r.ok ? r.json() : null))
  .catch(() => null)
  .then((info) => { updates.info = info; if(updates.onChange) updates.onChange(updates); return info; });

async function getManifest(url){
  const r = await Http.request({url: url + (url.includes("?") ? "&" : "?") + "t=" + Date.now(), method:"GET", responseType:"text", headers:{"Cache-Control":"no-cache"}});
  if(!r || r.status !== 200) throw new Error("HTTP " + (r && r.status));
  const m = typeof r.data === "string" ? JSON.parse(r.data) : r.data;
  if(!m || !Number.isInteger(m.build) || !/^[0-9a-f]{64}$/.test(m.web || "") || !/^[0-9a-f]{64}$/.test(m.native || "") || !/^[0-9a-f]{64}$/.test(m.sha256 || "") || !/^https:\/\//.test(m.zip || "")) throw new Error("Ungültige update.json");
  return m;
}
const bundleVersion = (m) => `${m.version}-${m.web.slice(0, 12)}`;
// Downloads je Paket. Nach zwei Versuchen (Download abgebrochen, oder das Paket startete nicht und
// das Plugin hat zurückgerollt und es gelöscht) bleibt die App bei ihrer Fassung, bis ein neueres
// Paket erscheint – keine Endlosschleife aus Laden und Zurückrollen.
const ATTEMPTS_KEY = "thai-update-attempts", MAX_ATTEMPTS = 2;
const attemptsOf = (v) => { try{ return (JSON.parse(localStorage.getItem(ATTEMPTS_KEY)) || {})[v] || 0; }catch(e){ return 0; } };
const countAttempt = (v) => { const n = attemptsOf(v) + 1; try{ localStorage.setItem(ATTEMPTS_KEY, JSON.stringify({[v]: n})); }catch(e){} return n; };
// Geladenes, noch nicht aktives Paket. next() des Plugins würde es schon beim nächsten Wechsel in den
// Hintergrund (Bildschirm sperren, App wechseln) einspielen und die Seite neu laden – mitten in einem
// Test. Deshalb merkt sich die App das Paket selbst und aktiviert es nur beim nächsten Start der App
// oder auf Knopfdruck.
const PENDING_KEY = "thai-update-pending";
const readPending = () => { try{ return JSON.parse(localStorage.getItem(PENDING_KEY)); }catch(e){ return null; } };
const writePending = (p) => { try{ if(p) localStorage.setItem(PENDING_KEY, JSON.stringify(p)); else localStorage.removeItem(PENDING_KEY); }catch(e){} };
// set() lädt die Seite mit dem neuen Paket neu; der Merker "applying" verhindert eine Schleife,
// falls das Paket nicht aktiv bleibt (das Plugin rollt nach 10 s ohne notifyAppReady zurück).
function activate(p){
  writePending(Object.assign({}, p, {applying:true}));
  return Updater.set({id:p.id});
}
// Beim Start der App ein vorgemerktes Paket einspielen. true = die Seite wird gleich neu geladen.
const startup = (async () => {
  const p = native && Updater ? readPending() : null;
  if(!p) return false;
  let cur = null;
  try{ cur = await Updater.current(); }catch(e){}
  if(cur && cur.bundle && cur.bundle.id === p.id){ writePending(null); return false; }
  if(p.applying){ writePending(null); return false; }
  try{ await activate(p); return true; }catch(e){ writePending(null); return false; }
})();
let lastCheck = 0, checking = null;
async function checkForUpdate(force){
  const info = await infoReady;
  if(!Updater || !Http || !info || !info.updates || !info.native || !info.build){ setStatus("unsupported"); return; }
  if(await startup) return;
  if(!force && Date.now() - lastCheck < CHECK_EVERY) return;
  lastCheck = Date.now();
  const pending = readPending();
  if(!pending) setStatus("checking");
  let m;
  try{ m = await getManifest(info.updates); }
  catch(e){ setStatus(pending ? "ready" : "offline", {error:String(e && e.message || e)}); return; }
  // Nur ein neuerer Build zählt – ein erneut ausgeführter alter Build stuft nichts zurück.
  const newer = m.build > info.build;
  if(newer && m.native !== info.native){ setStatus("native", {latest:m}); return; }
  if(!newer || m.web === info.web){
    if(pending){ writePending(null); Updater.delete({id:pending.id}).catch(() => {}); }
    setStatus("current", {latest:m});
    return;
  }
  const version = bundleVersion(m);
  if(pending && pending.version === version){ setStatus("ready", {latest:m}); return; }
  try{
    const list = await Updater.list();
    let bundle = ((list && list.bundles) || []).find((b) => b.version === version && (b.status === "success" || b.status === "pending"));
    if(!bundle){
      if(attemptsOf(version) >= MAX_ATTEMPTS){ setStatus("error", {latest:m, error:"Dieses Update ließ sich nicht laden oder starten. Die App bleibt bei ihrer jetzigen Fassung."}); return; }
      countAttempt(version);
      setStatus("downloading", {latest:m});
      bundle = await Updater.download({url:m.zip, version, checksum:m.sha256});
    }
    if(pending && pending.id !== bundle.id) Updater.delete({id:pending.id}).catch(() => {});
    writePending({id:bundle.id, version});
    setStatus("ready", {latest:m});
  }catch(e){
    setStatus("error", {latest:m, error:String(e && e.message || e)});
  }
}
updates.check = (force) => {
  if(!native){
    if(navigator.serviceWorker && navigator.serviceWorker.getRegistration){
      navigator.serviceWorker.getRegistration().then((reg) => reg && reg.update()).catch(() => {});
    }
    return Promise.resolve();
  }
  if(!checking) checking = checkForUpdate(force).finally(() => { checking = null; });
  return checking;
};
// Ein geladenes Update sofort aktivieren (App: Paket wechseln, Web: neu laden).
updates.apply = () => {
  if(!native){ location.reload(); return; }
  const p = readPending();
  if(Updater && p) activate(p).catch((e) => { writePending(null); setStatus("error", {error:String(e && e.message || e)}); });
};
// Von app.js aufzurufen, sobald die Oberfläche steht. Bleibt das aus, setzt das Plugin
// ein frisch eingespieltes Paket nach 10 s automatisch auf die vorherige Fassung zurück.
updates.ready = () => {
  if(!native) return;
  if(Updater) Updater.notifyAppReady().catch(() => {});
  setTimeout(() => { updates.check(false); }, 2000);
  if(App) App.addListener("resume", () => { updates.check(false); }).catch(() => {});
};
// Web-App: Ein neuer Service Worker hat übernommen – die neue Fassung ist nach dem Neuladen aktiv.
if(!native && navigator.serviceWorker){
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => { if(hadController) setStatus("ready"); });
}

window.Platform = {native, os, storage, tts, system, install, updates};
})();
