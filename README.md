# 🤖 AI Website Experiment (ChatGPT + GitHub Copilot)

Dit project is een experiment voor een YouTube video van **NDG-Webdesign**.  
Het doel van dit experiment is om te testen hoe goed **AI-tools samen een complete website kunnen maken**.

In dit experiment worden twee AI-tools gebruikt:

- **ChatGPT** → bedenkt het websiteconcept en schrijft een prompt  
- **GitHub Copilot** → gebruikt die prompt om de website te genereren

Het experiment onderzoekt de vraag:

> Kan AI met minimale menselijke input een volledige website maken?

---

# 🎥 Video

Dit project hoort bij een YouTube video op het kanaal van **NDG-Webdesign**.

- 🌐 Website: https://ndg-webdesign.net/  
- 📺 YouTube: https://www.youtube.com/@NDG-Webdesign  

---

# 🧪 Experiment Opzet

Het experiment bestaat uit drie stappen.

## 1️⃣ ChatGPT kiest een website-onderwerp

In plaats van zelf een idee te bedenken, werd ChatGPT gevraagd om:

- een **websiteconcept**
- een **naam voor de website**
- een **beschrijving van de functionaliteiten**

Hiermee kan worden getest of AI ook het **creatieve proces** van een project kan starten.

Voor dit experiment bedacht ChatGPT het volgende concept:

### Website naam
```
SnackAtlas
```

### Concept
Een website waar gebruikers **snacks uit verschillende landen** kunnen ontdekken.

### Mogelijke functies

- snacks bekijken uit verschillende landen
- snack cards met foto en beschrijving
- filteren op land of continent
- een **Random Snack** knop
- detailpagina met informatie en recept

---

# ✍️ Stap 2 – ChatGPT maakt een Copilot prompt

Na het bedenken van het idee werd ChatGPT gevraagd om een **duidelijke prompt voor GitHub Copilot** te schrijven.

Het doel van deze prompt is om Copilot genoeg informatie te geven om een website te bouwen.

### Copilot Prompt

```text
Create a modern responsive website called "SnackAtlas".

Concept:
SnackAtlas is a website where users can explore popular snacks from different countries around the world.

Requirements:
- Use HTML, CSS and JavaScript
- Clean modern design
- Responsive layout

Pages:
Home page
Explore page
Random snack feature
Snack detail page

Homepage:
Hero section with title "Discover Snacks From Around the World"

Snack cards should include:
- Image
- Snack name
- Country
- Short description
- Button for details

Explore page:
Allow filtering by country or continent.

Random snack feature:
A button that randomly selects a snack.

Snack detail page:
- Large image
- Country of origin
- Short story
- Simple recipe
- Rating system (1–5 stars)

Design:
- Modern card layout
- Smooth hover animations
- Mobile responsive
```

---

# ⚙️ Stap 3 – Copilot genereert de website

De prompt werd vervolgens gebruikt in **GitHub Copilot**.

Copilot gebruikte de beschrijving om automatisch code te genereren voor:

- HTML structuur
- CSS styling
- JavaScript functionaliteit

Dit laat zien hoe AI-tools samen kunnen werken om snel een basis voor een website te bouwen.

---

# 📁 Project Structuur (voorbeeld)

```
project/
│
├── index.html
├── explore.html
├── snack.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

---

# 🧠 Waarom dit experiment?

AI wordt steeds vaker gebruikt in webdevelopment.

Veel tools kunnen tegenwoordig:

- code genereren
- designs voorstellen
- complete pagina's opzetten

Dit experiment test hoe ver AI hierin kan gaan wanneer meerdere AI-tools samenwerken.

---

# 🚀 Conclusie

Dit experiment laat zien dat AI een groot deel van het ontwikkelproces kan ondersteunen:

- 💡 Idee generatie → ChatGPT  
- ✍️ Prompt schrijven → ChatGPT  
- 💻 Code generatie → GitHub Copilot  

AI kan dus een sterke **ontwikkelassistent** zijn.

Maar menselijke controle blijft belangrijk voor:

- design keuzes
- usability
- performance
- security

---

# 📜 License

Dit project is gemaakt voor **educatieve doeleinden** en voor een demonstratie in een YouTube video van **NDG-Webdesign**.
