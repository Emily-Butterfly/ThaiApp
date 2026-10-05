/* Plattform-Brücke: dieselbe Oberfläche läuft als Web-App (PWA) und als native App (Capacitor).
   In der nativen App übernehmen Plugins das Vorlesen, die Sicherung des Fortschritts,
   die Zurück-Taste und die Farbe der Statusleiste. */
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

window.Platform = {native, os, storage, tts, system, install};
})();
