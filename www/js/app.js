/* Oberfläche und Lernlogik: Kurs, Lektionen, Wochentests, Vokabeln, Einstellungen */
(() => {
"use strict";
const COURSE = window.COURSE;
const P = window.Platform;
const W = COURSE.weeks;
const PASS = 60;
const KIND = {
  laute:{label:"Laute & Töne", icon:"wave"},
  schrift:{label:"Schrift", glyph:"ก"},
  gram:{label:"Grammatik", icon:"blocks"},
  gefuehl:{label:"Sprachgefühl", icon:"heart"},
  kontext:{label:"Im Kontext", icon:"chat"},
  lesen:{label:"Lese-Ecke", icon:"book"}
};
const ICONS = {
  wave:'<path d="M3 12h2M7 8v8M11 4v16M15 8v8M19 11v2"/>',
  blocks:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><path d="M17 13.5v7M13.5 17h7"/>',
  heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
  chat:'<path d="M4 5.5h16v10.5H10l-6 4z"/>',
  book:'<path d="M4 5.5c3-1.2 5.8-1 8 .9 2.2-1.9 5-2.1 8-.9v13c-3-1.2-5.8-1-8 .9-2.2-1.9-5-2.1-8-.9z"/><path d="M12 6.4v13"/>',
  quiz:'<circle cx="12" cy="12" r="8.5"/><path d="M8 12.3l2.8 2.8L16.2 9.5"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  back:'<path d="M14.5 5l-7 7 7 7"/>',
  next:'<path d="M9.5 5l7 7-7 7"/>',
  path:'<path d="M5 19c3-1 3-5 7-6s4-5 7-8"/><circle cx="5" cy="19" r="1.8"/><circle cx="19" cy="5" r="1.8"/>',
  vocab:'<path d="M6 4h10.5A2.5 2.5 0 0 1 19 6.5V20H8.5A2.5 2.5 0 0 1 6 17.5z"/><path d="M6 17.5A2.5 2.5 0 0 1 8.5 15H19"/>',
  info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.6v.4"/>',
  speaker:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.8a7.5 7.5 0 0 1 0 10.4"/>'
};
const icon = (n) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[n]}</svg>`;
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const THAI_RUN = /[\u0E00-\u0E7F]+(?:[ \u00A0][\u0E00-\u0E7F]+)*/g;
function fmt(s, say = true){
  const h = esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  return h.replace(THAI_RUN, (m) => say ? `<span class="thi" lang="th" data-say="${m}">${m}</span>` : `<span class="thi" lang="th">${m}</span>`);
}

/* ---- Tonkurven ---- */
const MARKS = {"\u0300":"L","\u0302":"F","\u0301":"H","\u030C":"R"};
const SHAPES = {M:[[0,11],[1,11]], L:[[0,14.5],[1,16.5]], F:[[0,6],[0.3,5],[1,17]], H:[[0,8.5],[0.55,7.5],[1,3.5]], R:[[0,14.5],[0.35,16.5],[1,4.5]]};
function tonesOf(ro){
  const out = [];
  String(ro).normalize("NFD").split(/[^A-Za-z\u00C0-\u024F\u0250-\u02AF\u0300-\u036F]+/).forEach((tok) => {
    if(!/[A-Za-z\u0250-\u02AF]/.test(tok)) return;
    let t = "M";
    for(const ch of tok){ if(MARKS[ch]){ t = MARKS[ch]; break; } }
    out.push(t);
  });
  return out;
}
function melody(ro, o = {}){
  const ts = tonesOf(ro);
  if(!ts.length) return "";
  const sw = 14, gap = 5, H = 20, sc = o.scale || 1;
  const w = ts.length * sw + (ts.length - 1) * gap;
  const paths = ts.map((t, i) => {
    const x0 = i * (sw + gap);
    const d = SHAPES[t].map(([fx, y], k) => (k ? "L" : "M") + (x0 + fx * sw).toFixed(1) + " " + y).join(" ");
    return `<path class="t" d="${d}"${o.anim ? ` style="animation-delay:${(0.25 + i * 0.14).toFixed(2)}s"` : ""}/>`;
  }).join("");
  return `<svg class="melody${o.anim ? " anim" : ""}" width="${Math.round((w + 4) * sc)}" height="${Math.round(H * sc)}" viewBox="-2 0 ${w + 4} ${H}" aria-hidden="true" focusable="false"><line class="g" x1="-2" y1="11" x2="${w + 2}" y2="11"/>${paths}</svg>`;
}
const roLine = (ro) => `<span class="ro">${melody(ro)}<span class="rt">${esc(ro)}</span></span>`;
const sayIc = () => `<span class="say-ic" aria-hidden="true">${icon("speaker")}</span>`;

/* ---- Bausteine ---- */
function exItem(e){ return `<div class="ex"><span class="th" lang="th" data-say="${esc(e[0])}">${esc(e[0])}${sayIc()}</span>${roLine(e[1])}<span class="de">${fmt(e[2])}</span></div>`; }
const BLOCK = {
  p: (b) => `<p>${fmt(b[1])}</p>`,
  h: (b) => `<h3>${fmt(b[1])}</h3>`,
  tip: (b) => `<aside class="tip"><span class="lbl">${esc(b[2] || "Tipp")}</span>${fmt(b[1])}</aside>`,
  pat: (b) => `<div class="pattern">${fmt(b[1])}</div>`,
  ex: (b) => `<div class="exs">${b[1].map(exItem).join("")}</div>`,
  voc: (b) => `<ul class="voc">${b[1].map((v) => `<li data-say="${esc(v[0])}"><span class="th" lang="th">${esc(v[0])}${sayIc()}</span>${roLine(v[1])}<span class="de">${fmt(v[2], false)}</span></li>`).join("")}</ul>`,
  dlg: (b) => {
    const names = [];
    b[1].forEach((l) => { if(!names.includes(l[0])) names.push(l[0]); });
    return `<div class="dlg">${b[1].map((l) => `<div class="line ${names.indexOf(l[0]) % 2 ? "b" : "a"}"><span class="spk">${esc(l[0])}</span><span class="th" lang="th" data-say="${esc(l[1])}">${esc(l[1])}${sayIc()}</span>${roLine(l[2])}<span class="de">${fmt(l[3])}</span></div>`).join("")}</div>`;
  },
  tbl: (b) => `<div class="tablewrap"><table><thead><tr>${b[1].map((c) => `<th scope="col">${fmt(c)}</th>`).join("")}</tr></thead><tbody>${b[2].map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
  let: (b) => `<div class="letters">${b[1].map((l) => `<button type="button" class="letter" data-say="${esc(l[0] + " " + l[1])}"><span class="big" lang="th">${esc(l[0])}</span><span class="kw"><span lang="th">${esc(l[1])}</span> <span class="ro inl">${esc(l[2])}</span></span><span class="de">${esc(l[3])}</span><span class="snd">${esc(l[4])}</span></button>`).join("")}</div>`,
  tones: (b) => `<ul class="tones">${b[1].map((t) => `<li data-say="${esc(t[3])}"><span class="tg">${melody(t[4], {scale:2.4})}</span><span><span class="tn">${esc(t[0])}</span><span class="mk">${esc(t[1])}</span><span class="desc">${esc(t[2])}</span><span class="eg"><span lang="th">${esc(t[3])}</span> ${esc(t[4])}, „${esc(t[5])}“</span></span></li>`).join("")}</ul>`,
  read: (b) => `<ol class="read">${b[1].map((r) => `<li><span class="th" lang="th" data-say="${esc(r[0])}">${esc(r[0])}${sayIc()}</span><button type="button" class="reveal" data-act="reveal">Auflösen</button><span class="ans"><span class="rline">${melody(r[1])}<span>${esc(r[1])}</span></span><span class="de">${fmt(r[2])}</span></span></li>`).join("")}</ol>`
};
const renderBlock = (b) => (BLOCK[b[0]] ? BLOCK[b[0]](b) : "");

/* ---- Speicher ---- */
const KEY = "thai-a1-kurs-v1";
const blank = () => ({v:1, done:{}, quiz:{}, settings:{ro:true, slow:false, theme:"system"}});
function loadState(raw){
  const b = blank();
  try{
    if(!raw) return b;
    const s = JSON.parse(raw);
    if(s && typeof s === "object"){
      if(s.done && typeof s.done === "object") b.done = s.done;
      if(s.quiz && typeof s.quiz === "object") b.quiz = s.quiz;
      if(s.settings && typeof s.settings === "object") b.settings = Object.assign(b.settings, s.settings);
    }
  }catch(e){}
  return b;
}
let state = loadState(P.storage.load(KEY));
function save(){ P.storage.save(KEY, JSON.stringify(state)); }

/* ---- Vorlesen ---- */
const TTS = P.tts;
function onVoice(){
  document.body.classList.toggle("tts", TTS.ok);
  if(current.name === "info") render();
}
function speak(text){
  if(!TTS.ok) return;
  const t = String(text).replace(/[\/…„“"()–—]/g, " ").trim();
  if(t) TTS.speak(t, state.settings.slow);
}

/* ---- Fortschritt ---- */
const lessonKey = (n, i) => n + "-" + i;
function weekStats(w){
  let d = 0;
  w.lessons.forEach((_, i) => { if(state.done[lessonKey(w.n, i)]) d++; });
  const qBest = +state.quiz[w.n] || 0, qp = qBest >= PASS;
  return {done: d + (qp ? 1 : 0), total: w.lessons.length + 1, qBest, qp};
}
function progress(){
  let d = 0, t = 0;
  W.forEach((w) => { const s = weekStats(w); d += s.done; t += s.total; });
  return {done:d, total:t, pct: t ? Math.round(d / t * 100) : 0};
}
function nextStep(){
  for(const w of W){
    for(let i = 0; i < w.lessons.length; i++){
      if(!state.done[lessonKey(w.n, i)]) return {href:`#/w/${w.n}/l/${i}`, n:w.n, label:KIND[w.lessons[i].k].label, title:w.lessons[i].t};
    }
    if((+state.quiz[w.n] || 0) < PASS) return {href:`#/w/${w.n}/q`, n:w.n, label:"Wochentest", title:`${w.quiz.length} Fragen zu „${w.title}“`};
  }
  return null;
}
function nextTarget(n, i){
  const w = W[n - 1];
  return i + 1 < w.lessons.length ? {href:`#/w/${n}/l/${i + 1}`, label:"Nächste Lektion"} : {href:`#/w/${n}/q`, label:"Zum Wochentest"};
}

/* ---- Ansichten ---- */
const app = document.getElementById("app");
const topbar = document.getElementById("topbar");
const tabbar = document.getElementById("tabbar");
let current = {name:"home"};
let heroDone = false;

function badge(k){ const K = KIND[k]; return `<span class="badge" aria-hidden="true">${K.glyph ? `<span class="glyph">${K.glyph}</span>` : icon(K.icon)}</span>`; }

function viewTop(r){
  const p = progress();
  let left;
  if(r.name === "lesson" || r.name === "quiz") left = `<a class="back" href="#/w/${r.n}">${icon("back")}Woche ${r.n}</a>`;
  else if(r.name === "week") left = `<a class="back" href="#/">${icon("back")}Kurs</a>`;
  else left = `<span class="brand"><span class="bt" lang="th">ไทย</span>Thai A0–A1</span>`;
  return `${left}<span class="mini"><span class="pbar" aria-hidden="true"><i style="width:${p.pct}%"></i></span><span>${p.pct} %<span class="sr"> des Kurses erledigt</span></span></span>`;
}
function viewTabs(r){
  const t = (href, on, ic, label) => `<a class="tab" href="${href}"${on ? ' aria-current="page"' : ""}>${icon(ic)}<span>${label}</span></a>`;
  const inCourse = ["home","week","lesson","quiz"].includes(r.name);
  return t("#/", inCourse, "path", "Kurs") + t("#/vokabeln", r.name === "vocab", "vocab", "Vokabeln") + t("#/info", r.name === "info", "info", "Info");
}
function weekRow(w){
  const s = weekStats(w);
  const cls = s.done === s.total ? "complete" : (s.done > 0 ? "started" : "");
  return `<li class="wk ${cls}"><a href="#/w/${w.n}"><span class="num" aria-hidden="true">${w.n}</span><span><span class="kp" lang="th">${esc(w.key[0])}</span><span class="tt">Woche ${w.n}: ${esc(w.title)}</span></span><span class="frac">${s.done}/${s.total}<span class="sr"> erledigt</span></span></a></li>`;
}
function viewHome(){
  const p = progress(), nx = nextStep();
  const heroRo = "rian phaa-sǎa thai";
  const anim = !heroDone; heroDone = true;
  let h = `<section class="hero">
    <p class="th-hero" lang="th" data-say="เรียนภาษาไทย">เรียนภาษาไทย</p>
    <p class="hro">${melody(heroRo, {scale:1.7, anim})}<span>${esc(heroRo)}, „Thai lernen“</span></p>
    <h1>Thai in 16 Wochen</h1>
    <p class="lead">Von den ersten Tönen bis A1 – mit Schwerpunkt auf Grammatik und Sprachgefühl. Die goldenen Linien zeigen dir den Tonverlauf jeder Silbe.<span class="tts-inline"> Tippe auf Thai-Text, um ihn zu hören.</span></p>
    ${nx ? `<a class="continue" href="${nx.href}"><span><small>${p.done ? "Weiterlernen" : "Loslegen"}: Woche ${nx.n}, ${esc(nx.label)}</small><strong>${fmt(nx.title, false)}</strong></span>${icon("next")}</a>` : `<div class="continue"><span><small>Geschafft!</small><strong>Du hast alle 16 Wochen abgeschlossen.</strong></span></div>`}
    <div class="prog"><div class="row"><span>Fortschritt</span><span>${p.done} von ${p.total} Einheiten</span></div><div class="pbar"><i style="width:${p.pct}%"></i></div></div>
  </section>`;
  COURSE.phases.forEach((ph) => {
    h += `<section class="phase"><h2>${esc(ph.title)}</h2><p class="phase-sub">${esc(ph.sub)}</p><ol class="weeks">${ph.weeks.map((n) => weekRow(W[n - 1])).join("")}</ol></section>`;
  });
  return h;
}
function lessonRow(w, l, i){
  const done = !!state.done[lessonKey(w.n, i)];
  return `<li class="${done ? "isdone" : ""}"><a href="#/w/${w.n}/l/${i}">${badge(l.k)}<span><span class="kind">${KIND[l.k].label}</span><span class="lt">${fmt(l.t, false)}</span></span><span class="tick">${icon("check")}<span class="sr">${done ? "erledigt" : "offen"}</span></span></a></li>`;
}
function quizRow(w, s){
  return `<li class="${s.qp ? "isdone" : ""}"><a href="#/w/${w.n}/q"><span class="badge" aria-hidden="true">${icon("quiz")}</span><span><span class="kind">Wochentest, bestanden ab ${PASS} %</span><span class="lt">${w.quiz.length} Fragen</span>${s.qBest ? `<span class="score-note">Bestes Ergebnis: ${s.qBest} %</span>` : ""}</span><span class="tick">${icon("check")}<span class="sr">${s.qp ? "bestanden" : "offen"}</span></span></a></li>`;
}
function viewWeek(n){
  const w = W[n - 1], s = weekStats(w);
  return `<div class="wkhead"><span class="pill">${w.lvl}</span><span>Woche ${n} von ${W.length}</span></div>
  <div class="keytile" data-say="${esc(w.key[0])}"><span class="th" lang="th">${esc(w.key[0])}${sayIc()}</span>${roLine(w.key[1])}<span class="de">${fmt(w.key[2], false)}</span></div>
  <h1>${esc(w.title)}</h1><p class="lead">${fmt(w.sub)}</p>
  <h2 class="h-sm">Am Ende der Woche kannst du …</h2>
  <ul class="goals">${w.goals.map((g) => `<li>${fmt(g)}</li>`).join("")}</ul>
  <h2 class="h-sm">Lektionen</h2>
  <ol class="lessons">${w.lessons.map((l, i) => lessonRow(w, l, i)).join("")}${quizRow(w, s)}</ol>
  <nav class="pager" aria-label="Wochen">${n > 1 ? `<a class="btn ghost" href="#/w/${n - 1}">${icon("back")}Woche ${n - 1}</a>` : "<span></span>"}${n < W.length ? `<a class="btn ghost" href="#/w/${n + 1}">Woche ${n + 1}${icon("next")}</a>` : ""}</nav>`;
}
function viewLesson(n, i){
  const w = W[n - 1], l = w.lessons[i], done = !!state.done[lessonKey(n, i)], nt = nextTarget(n, i);
  return `<p class="crumb">${badge(l.k)}<span>Woche ${n}, ${KIND[l.k].label}</span></p>
  <h1>${fmt(l.t, false)}</h1>
  <article class="lesson">${l.b.map(renderBlock).join("")}</article>
  <div class="lesson-end">${done
    ? `<p class="done-note">${icon("check")}Abgeschlossen</p><div class="btns"><a class="btn" href="${nt.href}">${nt.label}${icon("next")}</a><button type="button" class="btn ghost" data-act="undo" data-n="${n}" data-i="${i}">Als offen markieren</button></div>`
    : `<button type="button" class="btn wide" data-act="complete" data-n="${n}" data-i="${i}">Abschließen und weiter</button>`}</div>`;
}

/* ---- Quiz ---- */
let Q = null;
function shuffle(a){ const b = a.slice(); for(let i = b.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
const seqKey = (words, order) => order.map((k) => words[k][0]).join("|");
function isAccepted(words, alts, order){
  const key = seqKey(words, order);
  if(key === seqKey(words, words.map((_, k) => k))) return true;
  return (alts || []).some((a) => seqKey(words, a) === key);
}
function prep(q){
  if(q[0] === "mc"){
    const idx = shuffle(q[2].map((_, k) => k));
    return {type:"mc", q:q[1], opts: idx.map((k) => q[2][k]), ans: idx.indexOf(q[3]), ex: q[4] || ""};
  }
  const words = q[2];
  let pool = words.map((_, k) => k);
  if(words.length > 1){ let tries = 0; do { pool = shuffle(pool); tries++; } while(tries < 10 && isAccepted(words, q[4], pool)); }
  return {type:"ord", q:q[1], words, pool, ex: q[3] || "", alts: q[4] || []};
}
function startQuiz(n){ Q = {w:n, i:0, score:0, items: W[n - 1].quiz.map(prep), answered:false, sel:-1, picked:[], ok:false, finished:false}; }
function chip(wd, act, k, dis, used){
  return `<button type="button" class="chip${used ? " used" : ""}" data-act="${act}" data-k="${k}"${dis || used ? " disabled" : ""}><span class="th" lang="th">${esc(wd[0])}</span><span class="ro">${esc(wd[1])}</span></button>`;
}
const TD = ["ศูนย์","หนึ่ง","สอง","สาม","สี่","ห้า","หก","เจ็ด","แปด","เก้า"];
const THDIG = "๐๑๒๓๔๕๖๗๘๙";
const thDigits = (n) => String(n).replace(/\d/g, (d) => THDIG[d]);
function thWords(n){
  if(n === 0) return TD[0];
  if(n === 100) return "หนึ่งร้อย";
  const t = Math.floor(n / 10), u = n % 10;
  let s = t === 1 ? "สิบ" : t === 2 ? "ยี่สิบ" : t > 2 ? TD[t] + "สิบ" : "";
  if(u === 1 && t > 0) s += "เอ็ด"; else if(u > 0) s += TD[u];
  return s;
}
function viewQuiz(n){
  const total = Q.items.length;
  const head = `<p class="crumb"><span class="badge" aria-hidden="true">${icon("quiz")}</span><span>Woche ${n}, Wochentest</span></p>`;
  if(Q.finished){
    const pct = Math.round(Q.score / total * 100);
    const words = thWords(pct) + "เปอร์เซ็นต์";
    const msg = pct >= 80 ? "Stark! Du bist bereit für die nächste Woche."
      : pct >= PASS ? "Bestanden. Schau dir die Punkte, bei denen du unsicher warst, noch einmal in den Lektionen an."
      : `Noch nicht bestanden – der Test zählt ab ${PASS} %. Wiederhole die Lektionen und versuch es noch einmal.`;
    return `${head}<h1 class="sr">Ergebnis</h1><p class="bigscore" lang="th" data-say="${esc(words)}">${thDigits(pct)}<span class="pct">%</span></p>
      <p><span class="thi" lang="th">${esc(words)}</span>: ${pct} %, ${Q.score} von ${total} richtig</p>
      <p>${msg}</p>
      <div class="btns"><button type="button" class="btn" data-act="retry">Test wiederholen</button>${n < W.length ? `<a class="btn ghost" href="#/w/${n + 1}">Weiter zu Woche ${n + 1}</a>` : `<a class="btn ghost" href="#/">Zur Kursübersicht</a>`}</div>`;
  }
  const it = Q.items[Q.i];
  let h = `<div class="quiz">${head}<div class="qhead"><span>Frage ${Q.i + 1} von ${total}</span><span>${Q.score} richtig</span></div><div class="pbar"><i style="width:${Math.round(Q.i / total * 100)}%"></i></div>`;
  if(it.type === "mc"){
    h += `<h1 class="q">${fmt(it.q, false)}</h1>` + it.opts.map((o, k) => {
      let c = "opt";
      if(Q.answered){ if(k === it.ans) c += " right"; else if(k === Q.sel) c += " wrong"; }
      return `<button type="button" class="${c}" data-act="opt" data-k="${k}"${Q.answered ? " disabled" : ""}>${fmt(o, false)}</button>`;
    }).join("");
  } else {
    h += `<h1 class="q">Bilde den Satz: ${fmt(it.q, false)}</h1>`;
    h += `<div class="chips answer" aria-live="polite">${Q.picked.length ? Q.picked.map((k, j) => chip(it.words[k], "chip-rem", j, Q.answered)).join("") : `<span class="ph">Tippe die Wörter unten in der richtigen Reihenfolge an.</span>`}</div>`;
    h += `<div class="chips pool">${it.pool.map((k) => chip(it.words[k], "chip-add", k, Q.answered, Q.picked.includes(k))).join("")}</div>`;
    if(!Q.answered) h += `<button type="button" class="btn wide" data-act="check"${Q.picked.length === it.words.length ? "" : " disabled"}>Prüfen</button>`;
  }
  if(Q.answered){
    const sol = it.type === "ord" && !Q.ok ? `<span class="sol"><span lang="th">${esc(it.words.map((x) => x[0]).join(""))}</span> <span class="ro inl">${esc(it.words.map((x) => x[1]).join(" "))}</span></span>` : "";
    h += `<div class="feedback ${Q.ok ? "ok" : "bad"}" role="status"><b>${Q.ok ? "Richtig!" : "Nicht ganz."}</b>${sol}${it.ex ? `<span class="fx">${fmt(it.ex, false)}</span>` : ""}</div><button type="button" class="btn wide" data-act="next-q">${Q.i + 1 < total ? "Nächste Frage" : "Ergebnis ansehen"}</button>`;
  }
  return h + `</div>`;
}

/* ---- Vokabeln ---- */
let VOCAB = null, VQ = "";
function vocabList(){
  if(VOCAB) return VOCAB;
  const out = [], seen = new Set();
  W.forEach((w) => w.lessons.forEach((l) => l.b.forEach((b) => {
    if(b[0] !== "voc") return;
    b[1].forEach((v) => { const k = w.n + "|" + v[0] + "|" + v[2]; if(!seen.has(k)){ seen.add(k); out.push({n:w.n, th:v[0], ro:v[1], de:v[2]}); } });
  })));
  VOCAB = out;
  return out;
}
const norm = (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ɔ/g, "o").replace(/[ɛə]/g, "e").replace(/ʉ/g, "u").toLowerCase();
function vocabResults(){
  const all = vocabList(), q = VQ.trim(), nq = norm(q);
  const items = q ? all.filter((v) => v.th.includes(q) || norm(v.ro).includes(nq) || norm(v.de).includes(nq)) : all;
  if(!items.length) return `<p class="empty">Kein Treffer für „${esc(q)}“. Versuch es mit einem kürzeren Suchbegriff oder ohne Tonzeichen.</p>`;
  let h = "", cur = 0;
  items.forEach((v) => {
    if(v.n !== cur){ if(cur) h += `</ul>`; cur = v.n; h += `<h2 class="vh">Woche ${v.n}: ${esc(W[v.n - 1].title)}</h2><ul class="voc">`; }
    h += `<li data-say="${esc(v.th)}"><span class="th" lang="th">${esc(v.th)}${sayIc()}</span>${roLine(v.ro)}<span class="de">${fmt(v.de, false)}</span></li>`;
  });
  return h + `</ul>`;
}
function viewVocab(){
  return `<h1>Vokabeln</h1><p class="lead">${vocabList().length} Wörter und Wendungen aus allen Wochen.<span class="tts-inline"> Tippe auf einen Eintrag, um ihn zu hören.</span></p>
  <div class="search"><label for="vq" class="sr">Vokabeln durchsuchen</label><input id="vq" type="search" autocomplete="off" placeholder="Thai, Umschrift oder Deutsch" value="${esc(VQ)}"></div>
  <div id="vres">${vocabResults()}</div>`;
}
function bindVocab(){
  const inp = document.getElementById("vq");
  if(!inp) return;
  inp.addEventListener("input", () => { VQ = inp.value; document.getElementById("vres").innerHTML = vocabResults(); });
}

/* ---- Info ---- */
let confirmReset = false;
function voiceInfo(){
  if(TTS.ok) return `<p>Thai-Texte werden mit der Thai-Stimme deines Geräts vorgelesen. Tippe einfach auf Thai-Text.</p>`;
  if(TTS.canInstall) return `<p>Zum Vorlesen braucht dein Gerät eine Thai-Stimme. Öffne die Sprachausgabe, lade dort „Thai“ herunter und kehre dann in die App zurück.</p><div class="btns"><button type="button" class="btn ghost" data-act="tts-install">${icon("speaker")}Thai-Stimme installieren</button></div>`;
  if(P.native) return `<p>Zum Vorlesen braucht dein Gerät eine Thai-Stimme. Installiere sie in den Systemeinstellungen unter Bedienungshilfen → Gesprochene Inhalte → Stimmen und starte die App neu.</p>`;
  return `<p>Zum Vorlesen braucht dein Gerät eine Thai-Stimme. Installiere sie in den Systemeinstellungen unter Sprachausgabe und lade die Seite neu.</p>`;
}
function installInfo(){
  const I = P.install;
  if(I.standalone) return "";
  if(I.prompt) return `<h2 class="h-sm">Als App installieren</h2><p>Leg den Kurs auf deinen Startbildschirm. Er startet dann wie eine App und funktioniert auch offline.</p><div class="btns"><button type="button" class="btn" data-act="install">App installieren</button></div>`;
  if(I.ios) return `<h2 class="h-sm">Als App installieren</h2><p>Tippe in Safari auf <b>Teilen</b> und dann auf <b>Zum Home-Bildschirm</b>. Der Kurs startet dann wie eine App und funktioniert auch offline.</p>`;
  return `<h2 class="h-sm">Als App installieren</h2><p>Öffne das Browser-Menü und wähle <b>App installieren</b> oder <b>Zum Startbildschirm hinzufügen</b>. Der Kurs funktioniert danach auch offline.</p>`;
}
function viewInfo(){
  const s = state.settings;
  const seg = (v, label) => `<button type="button" data-act="theme" data-v="${v}" aria-pressed="${s.theme === v}">${label}</button>`;
  const legend = [["a","Mittelton","khaa"],["à","Tiefton","khàa"],["â","fallender Ton","khâa"],["á","hoher Ton","kháa"],["ǎ","steigender Ton","khǎa"]];
  return `<h1>Info & Einstellungen</h1>
  <h2 class="h-sm">Einstellungen</h2>
  <div class="setting"><label for="s-ro"><span class="sl">Umschrift anzeigen</span><span class="sd">Schalte sie aus, sobald du Thai lesen kannst.</span></label><input id="s-ro" class="switch" type="checkbox" data-act="set-ro"${s.ro ? " checked" : ""}></div>
  <div class="setting"><label for="s-slow"><span class="sl">Langsam vorlesen</span><span class="sd">${TTS.ok ? "Für die Thai-Stimme deines Geräts." : "Auf diesem Gerät wurde keine Thai-Stimme gefunden."}</span></label><input id="s-slow" class="switch" type="checkbox" data-act="set-slow"${s.slow ? " checked" : ""}${TTS.ok ? "" : " disabled"}></div>
  <div class="setting"><span class="sl">Darstellung</span><span class="seg" role="group" aria-label="Darstellung">${seg("system","System")}${seg("light","Hell")}${seg("dark","Dunkel")}</span></div>
  <h2 class="h-sm">So liest du die Umschrift</h2>
  <ul class="legend">${legend.map((l) => `<li><span>${melody(l[2], {scale:2})}</span><span><b>${l[0]}</b> = ${l[1]}, z. B. ${l[2]}</span></li>`).join("")}</ul>
  <p>Doppelte Vokale sind lang: <b>aa</b>, <b>ii</b>, <b>uu</b>. <b>ɛ</b> klingt wie ä, <b>ɔ</b> wie das o in „Sonne“, <b>ə</b> wie ein ö mit ungerundeten Lippen, <b>ʉ</b> wie ein u mit breit gezogenen Lippen.</p>
  <p><b>bp</b>, <b>dt</b> und <b>g</b> sind unbehauchte p-, t- und k-Laute. <b>ph</b>, <b>th</b> und <b>kh</b> sind behaucht – nie wie f oder englisches th. <b>ng</b> klingt wie in „singen“, auch am Wortanfang.</p>
  <h2 class="h-sm">So ist der Kurs aufgebaut</h2>
  <p>16 Wochen mit je vier Lektionen und einem Wochentest. In den Wochen 1–8 lernst du parallel die Schrift, ab Woche 9 übst du in der Lese-Ecke. Plane etwa drei bis fünf Stunden pro Woche ein – am besten täglich eine kurze Einheit.</p>
  <h2 class="h-sm">Vorlesen</h2>
  ${voiceInfo()}
  ${installInfo()}
  <h2 class="h-sm">Fortschritt</h2>
  <p>${P.native ? "Dein Fortschritt wird auf diesem Gerät gespeichert." : "Dein Fortschritt wird in diesem Browser gespeichert."}</p>
  ${confirmReset
    ? `<p>Alle erledigten Lektionen und Testergebnisse werden gelöscht.</p><div class="btns"><button type="button" class="btn danger" data-act="reset-yes">Ja, alles zurücksetzen</button><button type="button" class="btn ghost" data-act="reset-no">Abbrechen</button></div>`
    : `<button type="button" class="btn ghost" data-act="reset">Fortschritt zurücksetzen</button>`}`;
}

/* ---- Routing ---- */
function parse(){
  const p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if(p[0] === "w"){
    const n = parseInt(p[1], 10);
    if(n >= 1 && n <= W.length){
      if(p[2] === "l"){ const i = parseInt(p[3], 10); if(i >= 0 && i < W[n - 1].lessons.length) return {name:"lesson", n, i}; }
      if(p[2] === "q") return {name:"quiz", n};
      return {name:"week", n};
    }
  }
  if(p[0] === "vokabeln") return {name:"vocab"};
  if(p[0] === "info") return {name:"info"};
  return {name:"home"};
}
function render(){
  const r = current;
  let html;
  if(r.name === "week") html = viewWeek(r.n);
  else if(r.name === "lesson") html = viewLesson(r.n, r.i);
  else if(r.name === "quiz") html = viewQuiz(r.n);
  else if(r.name === "vocab") html = viewVocab();
  else if(r.name === "info") html = viewInfo();
  else html = viewHome();
  app.innerHTML = html;
  topbar.innerHTML = viewTop(r);
  tabbar.innerHTML = viewTabs(r);
  if(r.name === "vocab") bindVocab();
}
function onRoute(){
  const prev = current;
  current = parse();
  if(current.name === "quiz" && (!Q || Q.w !== current.n || (Q.finished && prev.name !== "quiz"))) startQuiz(current.n);
  if(current.name !== "info") confirmReset = false;
  render();
  window.scrollTo(0, 0);
  try{ app.focus({preventScroll:true}); }catch(e){}
}
function applySettings(){
  const s = state.settings;
  document.body.classList.toggle("no-ro", !s.ro);
  const root = document.documentElement;
  if(s.theme === "light" || s.theme === "dark") root.setAttribute("data-theme", s.theme);
  else root.removeAttribute("data-theme");
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    const sys = m.getAttribute("data-sys") || m.getAttribute("content");
    m.setAttribute("data-sys", sys);
    m.setAttribute("content", s.theme === "light" ? "#E6EDE5" : s.theme === "dark" ? "#111B1A" : sys);
  });
  P.system.setTheme(s.theme);
}
function focusSel(sel){ const el = app.querySelector(sel); if(el) try{ el.focus(); }catch(e){} }

/* ---- Aktionen ---- */
function handle(a){
  const act = a.getAttribute("data-act");
  const n = +a.getAttribute("data-n"), i = +a.getAttribute("data-i"), k = +a.getAttribute("data-k");
  switch(act){
    case "reveal": { const li = a.closest("li"); if(li) li.classList.add("open"); break; }
    case "complete": { state.done[lessonKey(n, i)] = true; save(); location.hash = nextTarget(n, i).href; break; }
    case "undo": { delete state.done[lessonKey(n, i)]; save(); render(); break; }
    case "opt": {
      if(!Q || Q.answered) return;
      const it = Q.items[Q.i];
      Q.sel = k; Q.answered = true; Q.ok = (k === it.ans); if(Q.ok) Q.score++;
      render(); focusSel('[data-act="next-q"]'); break;
    }
    case "chip-add": { if(!Q || Q.answered) return; if(!Q.picked.includes(k)) Q.picked.push(k); render(); focusSel(Q.picked.length === Q.items[Q.i].words.length ? '[data-act="check"]' : '.pool .chip:not([disabled])'); break; }
    case "chip-rem": { if(!Q || Q.answered) return; Q.picked.splice(k, 1); render(); focusSel('.pool .chip:not([disabled])'); break; }
    case "check": {
      if(!Q || Q.answered) return;
      const it = Q.items[Q.i];
      if(Q.picked.length !== it.words.length) return;
      Q.answered = true; Q.ok = isAccepted(it.words, it.alts, Q.picked); if(Q.ok) Q.score++;
      render(); focusSel('[data-act="next-q"]'); break;
    }
    case "next-q": {
      if(!Q) return;
      Q.i++; Q.answered = false; Q.sel = -1; Q.picked = []; Q.ok = false;
      if(Q.i >= Q.items.length){
        Q.finished = true;
        const pct = Math.round(Q.score / Q.items.length * 100);
        if(pct > (+state.quiz[Q.w] || 0)){ state.quiz[Q.w] = pct; save(); }
      }
      render(); window.scrollTo(0, 0); break;
    }
    case "retry": { startQuiz(Q ? Q.w : current.n); render(); window.scrollTo(0, 0); break; }
    case "set-ro": { state.settings.ro = a.checked; save(); applySettings(); break; }
    case "set-slow": { state.settings.slow = a.checked; save(); break; }
    case "theme": { state.settings.theme = a.getAttribute("data-v"); save(); applySettings(); render(); break; }
    case "reset": { confirmReset = true; render(); break; }
    case "reset-no": { confirmReset = false; render(); break; }
    case "tts-install": { TTS.install(); break; }
    case "install": { P.install.run(); break; }
    case "reset-yes": { const st = state.settings; state = blank(); state.settings = st; confirmReset = false; Q = null; save(); render(); break; }
  }
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-act]");
  if(a){ handle(a); return; }
  const s = e.target.closest("[data-say]");
  if(s){ speak(s.getAttribute("data-say")); if(TTS.ok){ s.classList.remove("saying"); void s.offsetWidth; s.classList.add("saying"); } }
});

/* ---- Zurück-Taste (Android) ---- */
function parentHref(r){
  if(r.name === "lesson" || r.name === "quiz") return `#/w/${r.n}`;
  return "#/";
}
P.system.onBack(({canGoBack}) => {
  if(current.name === "home"){ P.system.exit(); return; }
  if(canGoBack) history.back();
  else location.hash = parentHref(current);
});

applySettings();
TTS.init(onVoice);
P.install.onChange = () => { if(current.name === "info") render(); };
window.addEventListener("hashchange", onRoute);
onRoute();
// In der App: Fortschritt aus der Sicherung holen, falls der WebView-Speicher geleert wurde.
P.storage.restore(KEY).then((raw) => {
  if(!raw) return;
  state = loadState(raw);
  applySettings();
  render();
});
})();
