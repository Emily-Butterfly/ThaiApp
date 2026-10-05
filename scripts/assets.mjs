// Erzeugt alle abgeleiteten Dateien, die nicht im Repository liegen:
// - Capacitor-Laufzeit und Schriften aus node_modules nach www/
// - alle App-Icons und Startbilder (Web, Android, iOS) aus den SVG-Vorlagen in resources/
// Aufruf: npm run assets (läuft auch automatisch in npm run sync und npm run serve)
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const at = (p) => join(root, p);
const ensureDir = (file) => mkdirSync(dirname(file), { recursive: true });

function copy(from, to) {
  ensureDir(at(to));
  copyFileSync(at(from), at(to));
}

// ---- Capacitor-Laufzeit ----
copy("node_modules/@capacitor/core/dist/capacitor.js", "www/vendor/capacitor.js");
copy("node_modules/@capacitor/core/LICENSE", "www/vendor/LICENSE-capacitor.txt");

// ---- Schriften (müssen zu www/css/fonts.css passen) ----
const FONTS = {
  andika: { weights: [400, 700], subsets: ["latin", "latin-ext", "vietnamese"] },
  sarabun: { weights: [400, 500, 600], subsets: ["thai", "latin"] },
};
for (const [family, { weights, subsets }] of Object.entries(FONTS)) {
  for (const w of weights) {
    for (const s of subsets) {
      const name = `${family}-${s}-${w}-normal.woff2`;
      copy(`node_modules/@fontsource/${family}/files/${name}`, `www/fonts/${name}`);
    }
  }
}
copy("node_modules/@fontsource/andika/LICENSE", "www/fonts/LICENSE-Andika.txt");
copy("node_modules/@fontsource/sarabun/LICENSE", "www/fonts/LICENSE-Sarabun.txt");

// ---- Icons ----
const svg = (name) => readFileSync(at(`resources/${name}.svg`), "utf8");
const SOURCES = {
  rounded: svg("icon"),               // abgerundetes Quadrat, transparente Ecken
  full: svg("icon-fullbleed"),        // vollflächig, für iOS und den Store
  round: svg("icon-round"),           // rund, für Android ic_launcher_round und den Startbildschirm
  foreground: svg("icon-foreground"), // Android adaptive icon (Vordergrund mit Safe Zone)
  maskable: svg("icon-maskable"),     // Web-App, Android-Maske
};

// Rendert eine 512er-SVG-Vorlage scharf in der Zielgröße.
function render(source, size) {
  const sized = source.replace('width="512" height="512"', `width="${size}" height="${size}"`);
  return sharp(Buffer.from(sized)).resize(size, size);
}

async function png(source, size, out, { opaque } = {}) {
  ensureDir(at(out));
  let img = render(source, size);
  if (opaque) img = img.flatten({ background: opaque });
  await img.png().toFile(at(out));
}

async function splash(background, size, iconSize, out) {
  ensureDir(at(out));
  const icon = await render(SOURCES.rounded, iconSize).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 3, background } })
    .composite([{ input: icon, gravity: "center" }])
    .png()
    .toFile(at(out));
}

const jobs = [
  // Web-App
  png(SOURCES.rounded, 192, "www/icons/icon-192.png"),
  png(SOURCES.rounded, 512, "www/icons/icon-512.png"),
  png(SOURCES.maskable, 512, "www/icons/maskable-512.png"),
  png(SOURCES.full, 180, "www/icons/apple-touch-icon.png", { opaque: "#2B4889" }),
  // Android
  png(SOURCES.round, 576, "android/app/src/main/res/drawable-nodpi/splash_icon.png"),
  // iOS (App-Store-Icons dürfen keinen Alphakanal haben)
  png(SOURCES.full, 1024, "ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png", { opaque: "#2B4889" }),
  splash("#E6EDE5", 2732, 480, "ios/App/App/Assets.xcassets/Splash.imageset/splash-2732x2732.png"),
  splash("#111B1A", 2732, 480, "ios/App/App/Assets.xcassets/Splash.imageset/splash-2732x2732-dark.png"),
];
const DENSITIES = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };
for (const [q, f] of Object.entries(DENSITIES)) {
  const dir = `android/app/src/main/res/mipmap-${q}`;
  jobs.push(
    png(SOURCES.rounded, 48 * f, `${dir}/ic_launcher.png`),
    png(SOURCES.round, 48 * f, `${dir}/ic_launcher_round.png`),
    png(SOURCES.foreground, 108 * f, `${dir}/ic_launcher_foreground.png`),
  );
}
await Promise.all(jobs);
console.log(`assets: Laufzeit, Schriften und ${jobs.length} Bilder erzeugt`);
