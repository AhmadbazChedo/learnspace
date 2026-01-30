# LearnSpace 🎓

Interaktive E-Learning-Plattform für Produktionswirtschaft & Logistik

Link: https://learnspace-wi8j.onrender.com

## Überblick

LearnSpace ist eine moderne, dunkle und visuell ansprechende Single Page Application, die komplexe Themen der Produktionswirtschaft und Logistik interaktiv vermittelt.

## Module

### 1. 📊 Lean Management
- 5 Prinzipien des Lean Managements
- Grundpfeiler und Prozesskreislauf
- 5S-System im Detail
- 3 MU Methode (Muda, Mura, Muri)
- Nordwest-Ecken-Methode
- Matrix-Minimum-Methode

### 2. 📈 ABC-XYZ Analyse
- ABC-Klassifizierung nach Wertanteil
- XYZ-Analyse mit Variationskoeffizient
- RSU-Begrifflichkeit (Regelmäßig, Saisonal, Unregelmäßig)
- Kombinierte Matrix-Ansätze
- Steuerungsstrategien

### 3. 🔢 Matrix-Methoden
- Nordwest-Ecken-Methode Schritt-für-Schritt
- Matrix-Minimum-Methode
- Vergleich und Optimierung
- Praktische Beispiele mit Berechnungen

### 4. ⚖️ Zielkonflikte
- Klassische Zielkonflikte in der Logistik
- Magisches Dreieck (Kosten, Zeit, Qualität)
- Fallbeispiele und Lösungsstrategien
- Entscheidungsmatrizen

## Features

✨ **Interaktive Quizze** - Teste dein Wissen nach jedem Modul
🎨 **Modernes Dark Design** - Angenehmes Lernen auch bei längeren Sessions
📱 **Responsive** - Funktioniert auf Desktop, Tablet und Mobile
🚀 **Keine Backend-Abhängigkeit** - Reine Frontend-Lösung
🎯 **Praxisnah** - Basierend auf echten Vorlesungsfolien

## Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build
```

## Technologie-Stack

- **Vue 3** - Progressive JavaScript Framework
- **Vite** - Next Generation Frontend Tooling
- **Pure CSS** - Keine CSS-Frameworks, custom Styling

## Entwicklung

Die Anwendung ist als Single Page Application strukturiert:

- `src/App.vue` - Hauptkomponente mit Navigation und Routing-Logik
- `src/components/HomePage.vue` - Startseite mit Modulübersicht
- `src/components/ModuleView.vue` - Container für Modulinhalte
- `src/components/ContentSlide.vue` - Darstellung von Lerninhalten
- `src/components/QuizComponent.vue` - Interaktive Quiz-Funktionalität
- `src/data/modules.js` - Alle Lerninhalte und Quizfragen

## Fachliche Inhalte

Alle Fachbegriffe und Konzepte stammen aus den Original-Vorlesungsfolien:
- Prof. Fleschutz-Balarezo - Produktionswirtschaft / Logistik
- HTW (Hochschule für Technik und Wirtschaft)
- Quelle: Helmold 2023

## Nutzung

1. Starte auf der Homepage
2. Wähle ein Modul aus
3. Arbeite dich durch die Lerninhalte
4. Beantworte die Quiz-Fragen
5. Wiederhole bei Bedarf

## Lizenz

Bildungsprojekt - HTW 2026

---

Erstellt mit ❤️ für besseres Lernen
