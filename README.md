# Thai lernen – Kurse A0–A1 und A2

Die Handy-App mit zwei Thai-Kursen: **A0–A1** in 16 Wochen und darauf aufbauend **A2** in 12 Wochen, jeweils mit vier Lektionen und einem Wochentest pro Woche. Dazu Tonkurven für jede Silbe, Vokabelsuche über beide Kurse, Vorlesen mit der Thai-Stimme des Geräts sowie hellen und dunklen Modus. Oben auf der Kursseite wechselst du zwischen den Kursen. Die App funktioniert komplett offline und holt neue Inhalte selbst (siehe [Updates](#updates-ohne-neuinstallation)).

Dieselbe Oberfläche gibt es auf drei Wegen:

| Weg | Für | Wie |
| --- | --- | --- |
| **Android-App (APK)** | Android-Handys | Wird bei jedem Push automatisch von GitHub Actions gebaut |
| **Web-App (PWA)** | iPhone, Android, Tablet | Über GitHub Pages öffnen und zum Home-Bildschirm hinzufügen |
| **iOS-App** | iPhone über Xcode/App Store | Xcode-Projekt liegt in `ios/`, braucht einen Mac |

## Android: App installieren

1. Auf dem Handy die GitHub-Seite des Repos öffnen → **Releases** → **Thai lernen – Android-App** → `Thai-lernen.apk` herunterladen.
   (Alternativ: **Actions** → letzter Lauf von „Android-App bauen“ → Artefakt `Thai-lernen-APK`. Das Artefakt kommt als ZIP.)
2. Die APK öffnen. Android fragt beim ersten Mal, ob der Browser Apps installieren darf – das einmal erlauben.
3. Neue Versionen einfach drüber installieren. Der Lernfortschritt bleibt erhalten.

Wer noch eine App ohne Live-Updates hat (Build 1 oder 2, nur Kurs A0–A1), installiert die neue APK einmal drüber. Danach kommen neue Inhalte von selbst.

## Updates ohne Neuinstallation

Jeder Build berechnet zwei **Fingerprints** (`scripts/version.mjs`, Ergebnis in `www/version.json`):

| Fingerprint | Umfasst | Ändert sich, wenn … |
| --- | --- | --- |
| **Inhalte** (`web`) | alle Dateien in `www/` | Lektionen, Oberfläche, Schriften oder Icons der Web-App sich ändern |
| **App** (`native`) | `android/`, `ios/`, `resources/`, `capacitor.config.json`, Plugins aus `package.json` | sich am nativen Teil etwas ändert, das nur mit einer neuen APK aufs Handy kommt |

- **Android-App:** Beim Start und beim Zurückkehren in die App lädt sie `update.json` aus dem Release `android-latest`. Ist der App-Fingerprint gleich, aber der Inhalts-Fingerprint neu, lädt sie das Live-Update-Paket (`web-….zip`, geprüft per SHA-256) im Hintergrund. Es wird beim nächsten Start der App aktiv oder sofort über **Jetzt aktualisieren**, nie mitten in einer Lektion oder einem Test. Startet ein Paket nicht innerhalb von 10 Sekunden, kehrt die App automatisch zur vorherigen Fassung zurück. Nach zwei Fehlversuchen bleibt sie dabei, bis ein neueres Paket erscheint. Ändert sich der App-Fingerprint, zeigt die App einen Hinweis mit Link zur neuen APK.
- **Welche Builds sich aktualisieren:** nur die APK aus dem Release, also vom Hauptbranch, und nur auf einen neueren Build (höhere Build-Nummer). Lokale Builds, Test-APKs anderer Branches und die mit Xcode gebaute iOS-App prüfen nicht auf Live-Updates und behalten ihre eigenen Inhalte.
- **Web-App:** Der Service Worker benennt seinen Offline-Speicher nach dem Inhalts-Fingerprint. Jede neue Fassung auf GitHub Pages wird so automatisch geladen. Die App bietet dann **Neu laden** an.
- **Signatur:** Android installiert eine APK nur über die alte, wenn beide mit demselben Schlüssel signiert sind. Der Build prüft deshalb den Signatur-Fingerprint (SHA-256 `1A:4A:FA:9C:44:82:A8:38:F0:67:99:E9:3A:70:D4:EC:AC:7E:AD:87:43:B7:C2:76:E1:0C:8E:62:4B:2C:CD:43`) und bricht ab, falls er sich je ändert.

Unter **Info → Version und Updates** zeigt die App Version, Build und beide Fingerprints. Dort lässt sich auch von Hand nach Updates suchen.

Zum Vorlesen braucht das Handy eine Thai-Stimme. Fehlt sie, zeigt die App unter **Info** den Knopf **Thai-Stimme installieren**. Er öffnet die Sprachausgabe, wo du „Thai“ herunterlädst.

## iPhone: Web-App installieren

1. Einmalig im Repo **Settings → Pages → Source: GitHub Actions** wählen. Danach unter **Actions** den Workflow „Web-App veröffentlichen“ starten. Später läuft er bei jeder Änderung an `www/` von selbst.
2. Die Seite `https://emily-butterfly.github.io/ThaiApp/` in **Safari** öffnen.
3. **Teilen → Zum Home-Bildschirm**. Der Kurs startet dann im Vollbild wie eine App und funktioniert offline.

Das Vorlesen nutzt die Thai-Stimme von iOS: Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Thai.

## iOS-App mit Xcode bauen (optional)

Dafür brauchst du einen Mac mit Xcode und für die Installation auf dem iPhone eine Apple-ID:

```bash
npm install
npm run ios
```

In Xcode unter *Signing & Capabilities* dein Team auswählen, dann das iPhone als Ziel wählen und starten.

## Entwicklung

```bash
npm install
npm run serve          # Web-App lokal unter http://localhost:8080
npm run sync           # Änderungen in www/ in die Android- und iOS-Projekte kopieren
npm run android        # Android Studio öffnen
npm run build:android  # Debug-APK bauen (Android SDK nötig)
```

Schriften, Capacitor-Laufzeit und alle Icons und Startbilder liegen nicht im Repository. `npm run assets` erzeugt sie aus `node_modules` und den SVG-Vorlagen in `resources/`. `serve`, `sync`, `android` und `ios` rufen das automatisch auf. Wer das Android- oder iOS-Projekt direkt in der IDE öffnet, führt vorher einmal `npm run sync` aus.

### Aufbau

```
www/                     Web-App (wird unverändert in Android und iOS eingebettet)
  index.html
  js/course.js           Kurs A0–A1: Wochen, Lektionen, Vokabeln, Tests
  js/course-a2.js        Kurs A2
  js/app.js              Oberfläche, Kurswahl, Fortschritt, Wochentests, Vokabelsuche
  js/platform.js         Brücke Web ↔ App: Vorlesen, Speicher, Zurück-Taste, Statusleiste, Updates
  css/                   Gestaltung und Schrift-Einbindung (Andika, Sarabun)
  sw.js                  Service Worker für den Offline-Betrieb der Web-App
  version.json           (erzeugt) Version, Build und Fingerprints
  manifest.webmanifest   Installierbare Web-App
android/                 Android-Projekt (Capacitor)
ios/                     iOS-Projekt (Capacitor, Swift Package Manager)
resources/               SVG-Vorlagen für App-Icons und Startbilder
scripts/assets.mjs       erzeugt Icons, Schriften und Laufzeit (npm run assets)
scripts/version.mjs      berechnet die Fingerprints und schreibt update.json für Live-Updates
.github/workflows/       APK-Build, Live-Update-Paket und Veröffentlichung auf GitHub Pages
```

### Inhalte ändern

Die Lerninhalte stehen in `www/js/course.js` (A0–A1) und `www/js/course-a2.js` (A2). Nach dem Push baut GitHub Actions eine neue APK und ein Live-Update-Paket. Installierte Apps und die Web-App holen die neuen Inhalte von selbst, eine Versionsnummer muss dafür niemand erhöhen. Lokal reicht `npm run sync`, wenn du Android oder iOS selbst baust.

Der Fortschritt liegt unter einem Schlüssel für beide Kurse. Lektionen von A0–A1 heißen dort `Woche-Lektion` (wie vor dem A2-Kurs), die von A2 `a2-Woche-Lektion`. So bleibt alter Fortschritt gültig.

### Native Funktionen

- **Vorlesen:** In der App über `@capacitor-community/text-to-speech`, weil der Android-WebView keine Web Speech API hat. Im Browser über die Web Speech API.
- **Fortschritt:** liegt in `localStorage`. In der App wird er zusätzlich mit `@capacitor/preferences` gesichert, weil das System den WebView-Speicher leeren kann.
- **Zurück-Taste (Android):** geht einen Schritt zurück und beendet die App auf der Startseite.
- **Statusleiste:** passt sich an hell/dunkel an, auch wenn die Darstellung in der App von der des Systems abweicht.
- **Live-Updates:** `@capgo/capacitor-updater` im manuellen Modus. Die App entscheidet anhand der Fingerprints selbst, ob sie ein Paket lädt. Es gibt keinen Capgo-Server und keine Statistik (`statsUrl`, `updateUrl` und `channelUrl` sind leer).

### Signatur

Die Debug-APK wird mit `android/app/debug.keystore` signiert. Das ist ein öffentlicher Test-Schlüssel mit dem Standardpasswort `android`, kein Geheimnis. Er sorgt dafür, dass jede neue APK sich über die alte installieren lässt. Sein Fingerprint (SHA-256 `1A:4A:FA:9C:…:2C:CD:43`, vollständig oben unter *Updates*) wird bei jedem Build geprüft. Für eine Veröffentlichung im Play Store brauchst du einen eigenen, geheimen Release-Schlüssel. Den legst du in Android Studio unter *Build → Generate Signed App Bundle* an. Er gehört nicht ins Repo.

## Lizenzen

- Schriften Andika und Sarabun: SIL Open Font License 1.1 (`www/fonts/LICENSE-*.txt`)
- Capacitor: MIT (`www/vendor/LICENSE-capacitor.txt`)
- Capacitor Updater (Capgo): Mozilla Public License 2.0
