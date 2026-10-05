# Thai lernen – Thai in 16 Wochen (A0–A1)

Die Handy-App zum Kurs „Thai in 16 Wochen“: 16 Wochen mit je vier Lektionen und einem Wochentest. Dazu Tonkurven für jede Silbe, Vokabelsuche, Vorlesen mit der Thai-Stimme des Geräts sowie hellen und dunklen Modus. Die App funktioniert komplett offline.

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
  js/course.js           Kursinhalte: Wochen, Lektionen, Vokabeln, Tests
  js/app.js              Oberfläche, Fortschritt, Wochentests, Vokabelsuche
  js/platform.js         Brücke Web ↔ App: Vorlesen, Speicher, Zurück-Taste, Statusleiste
  css/                   Gestaltung und Schrift-Einbindung (Andika, Sarabun)
  sw.js                  Service Worker für den Offline-Betrieb der Web-App
  manifest.webmanifest   Installierbare Web-App
android/                 Android-Projekt (Capacitor)
ios/                     iOS-Projekt (Capacitor, Swift Package Manager)
resources/               SVG-Vorlagen für App-Icons und Startbilder
scripts/assets.mjs       erzeugt Icons, Schriften und Laufzeit (npm run assets)
.github/workflows/       APK-Build und Veröffentlichung auf GitHub Pages
```

### Inhalte ändern

Alle Lerninhalte stehen in `www/js/course.js`. Nach einer Änderung:

- in `www/sw.js` die `VERSION` erhöhen, damit installierte Web-Apps die neue Fassung laden,
- `npm run sync` ausführen, wenn du lokal Android oder iOS baust (GitHub Actions macht das selbst).

### Native Funktionen

- **Vorlesen:** In der App über `@capacitor-community/text-to-speech`, weil der Android-WebView keine Web Speech API hat. Im Browser über die Web Speech API.
- **Fortschritt:** liegt in `localStorage`. In der App wird er zusätzlich mit `@capacitor/preferences` gesichert, weil das System den WebView-Speicher leeren kann.
- **Zurück-Taste (Android):** geht einen Schritt zurück und beendet die App auf der Startseite.
- **Statusleiste:** passt sich an hell/dunkel an, auch wenn die Darstellung in der App von der des Systems abweicht.

### Signatur

Die Debug-APK wird mit `android/app/debug.keystore` signiert. Das ist ein öffentlicher Test-Schlüssel mit dem Standardpasswort `android`, kein Geheimnis. Er sorgt dafür, dass jede neue APK sich über die alte installieren lässt. Für eine Veröffentlichung im Play Store brauchst du einen eigenen, geheimen Release-Schlüssel. Den legst du in Android Studio unter *Build → Generate Signed App Bundle* an. Er gehört nicht ins Repo.

## Lizenzen

- Schriften Andika und Sarabun: SIL Open Font License 1.1 (`www/fonts/LICENSE-*.txt`)
- Capacitor: MIT (`www/vendor/LICENSE-capacitor.txt`)
