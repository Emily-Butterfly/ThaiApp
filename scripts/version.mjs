// Fingerprints für Updates ohne Neuinstallation.
//
//   node scripts/version.mjs                    schreibt www/version.json und www/sw-version.js
//   node scripts/version.mjs manifest ZIP OUT   schreibt OUT (update.json) für das Live-Update-Paket ZIP
//
// Zwei Fingerprints (SHA-256):
// - web:    alle Dateien in www/ – Inhalte, Oberfläche, Schriften, Icons. Ändert er sich, gibt es etwas Neues.
// - native: alles, was nur mit einer neuen APK (bzw. iOS-App) aufs Gerät kommt – android/, ios/,
//           resources/ und scripts/assets.mjs (App-Icons, Startbild), capacitor.config.json und die
//           Abhängigkeiten (Plugins) aus package.json.
// Eine installierte App übernimmt ein neues www/ als Live-Update nur, wenn ihr native-Fingerprint
// gleich ist und das Paket aus einem neueren Build stammt. Sonst zeigt sie an, dass eine neue APK
// nötig ist (siehe www/js/platform.js).
// Live-Updates gibt es nur für Release-Builds: GitHub Actions setzt UPDATE_CHANNEL=release auf dem
// Hauptbranch. Lokale Builds und Test-APKs anderer Branches prüfen nicht auf Updates, damit sie
// ihre eigenen Inhalte behalten.
// `npm run assets` ruft das Skript am Ende auf.
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const at = (p) => join(root, p);
const sha256 = (data) => createHash("sha256").update(data).digest("hex");
const pkg = JSON.parse(readFileSync(at("package.json"), "utf8"));

// Dateien, die dieses Skript selbst schreibt, zählen nicht zum Fingerprint.
const GENERATED = new Set(["version.json", "sw-version.js"]);
// Teil der App, der nur mit einer neuen APK aufs Gerät kommt.
const NATIVE_PATHS = ["android", "ios", "resources", "scripts/assets.mjs", "capacitor.config.json"];
const RELEASE_TAG = "android-latest";

function files(dir, base = "") {
  const out = [];
  for (const e of readdirSync(join(dir, base), { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...files(dir, rel));
    else if (e.isFile()) out.push(rel);
  }
  return out;
}

function webFingerprint() {
  const list = files(at("www")).filter((f) => !GENERATED.has(f)).sort();
  return sha256(list.map((f) => `${f}\0${sha256(readFileSync(at(`www/${f}`)))}\n`).join(""));
}

function nativeFingerprint() {
  // Blob-Hashes aus dem Git-Index: genau die eingecheckten Dateien, ohne erzeugte Icons und Build-Ordner.
  const tracked = execFileSync("git", ["-C", root, "ls-files", "-s", "--", ...NATIVE_PATHS], { encoding: "utf8" });
  if (!tracked.trim()) throw new Error("git ls-files hat keine nativen Dateien gefunden");
  const deps = Object.fromEntries(Object.entries({
    ...pkg.dependencies,
    "@capacitor/cli": pkg.devDependencies?.["@capacitor/cli"],
    sharp: pkg.devDependencies?.sharp,
  }).sort(([a], [b]) => a.localeCompare(b)));
  return sha256(`${tracked}\n${JSON.stringify(deps)}\n`);
}

// Basisadresse der Release-Dateien (update.json, Live-Update-Paket, APK).
function releaseBase() {
  if (process.env.UPDATE_BASE_URL) return process.env.UPDATE_BASE_URL.replace(/\/?$/, "/");
  let repo = process.env.GITHUB_REPOSITORY;
  if (!repo) {
    const url = typeof pkg.repository === "string" ? pkg.repository : pkg.repository?.url || "";
    repo = url.match(/github\.com[/:]([^/]+\/[^/.]+)/)?.[1];
  }
  return repo ? `https://github.com/${repo}/releases/download/${RELEASE_TAG}/` : null;
}

function writeVersion() {
  const web = webFingerprint();
  let native = null;
  try {
    native = nativeFingerprint();
  } catch (e) {
    console.warn(`version.mjs: kein native-Fingerprint (${e.message}) – Live-Updates sind in diesem Build aus.`);
  }
  const base = process.env.UPDATE_CHANNEL === "release" ? releaseBase() : null;
  const info = {
    version: pkg.version,
    build: Number(process.env.APP_BUILD) || null,
    web,
    native,
    built: new Date().toISOString(),
    updates: base && native && Number(process.env.APP_BUILD) ? `${base}update.json` : null,
  };
  writeFileSync(at("www/version.json"), JSON.stringify(info, null, 2) + "\n");
  writeFileSync(at("www/sw-version.js"), `self.WEB_FINGERPRINT = "${web}";\n`);
  console.log(`Fingerprint Inhalte (web): ${web}\nFingerprint App (native):  ${native ?? "–"}`);
}

function writeManifest(zip, out) {
  const info = JSON.parse(readFileSync(at("www/version.json"), "utf8"));
  const base = releaseBase();
  if (!base || !info.native) throw new Error("Für update.json fehlen Repository oder native-Fingerprint.");
  const manifest = {
    version: info.version,
    build: info.build,
    web: info.web,
    native: info.native,
    built: info.built,
    zip: `${base}${zip.split("/").pop()}`,
    sha256: sha256(readFileSync(zip)),
    apk: `${base}Thai-lernen.apk`,
  };
  writeFileSync(out, JSON.stringify(manifest, null, 2) + "\n");
  console.log(JSON.stringify(manifest, null, 2));
}

const [mode, ...rest] = process.argv.slice(2);
if (mode === "manifest") writeManifest(...rest);
else writeVersion();
