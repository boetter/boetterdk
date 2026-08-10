# Handoff: Jacob Bøtter — Landingpage (jacob.boetter.dk / boetter.dk)

## Overview
Personlig landingpage for Jacob Bøtter: foredragsholder og rådgiver om AI, forfatter til fem bøger (den sjette, *10x*, udkommer efterår 2026). Én side, fire sektioner: Hero, Foredrag/Rådgivning, Bogreol, Kontakt. Mørk, redaktionel retning ("Mørk & markant").

## Om designfilerne
Filerne i denne pakke er **designreferencer bygget i HTML** — prototyper, der viser tilsigtet udseende og adfærd, ikke produktionskode til direkte kopiering. Opgaven er at **genskabe designet i målkodebasens eksisterende miljø** (React, Vue, Astro, ren HTML/CSS osv.) med dens etablerede mønstre. Findes der endnu intet miljø, vælg det enkleste passende setup — siden er statisk og kan fint bygges som ren HTML/CSS med et minimum af JS (smooth scroll).

`Landingpage 1a Moerk.dc.html` bruger et internt komponentformat: al styling står inline på elementerne og kan aflæses direkte; `style-hover`-attributter beskriver hover-tilstande; `{{ … }}`-huller udfyldes af logikklassen nederst i filen (email/telefon).

## Fidelity
**High-fidelity.** Farver, typografi, spacing og interaktioner er endelige. Genskab pixel-tro.

## Skærme / Sektioner

### 1. Hero (fuld viewport)
- **Layout**: CSS grid, 2 kolonner `repeat(auto-fit, minmax(min(480px, 100%), 1fr))`, `min-height: 100vh`. Venstre: indholdskolonne (flex column) med padding `clamp(24px, 3vw, 44px) clamp(24px, 4vw, 64px) clamp(40px, 6vh, 64px)`. Højre: foto i fuld højde.
- **Topbar** (i venstre kolonne): flex, space-between, baseline. Venstre: eyebrow "Foredrag · Rådgivning · Forfatter" — 12px, uppercase, letter-spacing 0.16em, vægt 600, farve #8A8177. Højre: link "Kontakt" — 14px, vægt 600, #F5EFE6, 1px underkant #4A443B, padding-bottom 2px; klik = smooth scroll til Kontakt-sektionen.
- **H1**: "Jacob<br>*Bøtter*" — Newsreader 400, `clamp(64px, 8.5vw, 132px)`, line-height 0.92, letter-spacing −0.03em, #F5EFE6; "Bøtter" i kursiv, vægt 300. `margin: auto 0 0` (skubbes mod bunden).
- **Manchet**: "Jeg holder foredrag om AI og rådgiver teams i, hvordan kunstig intelligens kan spille en positiv rolle i deres arbejde." — Hanken Grotesk, `clamp(17px, 1.4vw, 20px)`, line-height 1.55, #B8AE9F, max-width 40ch.
- **CTA-række** (gap 24px): Primær knap "Book et foredrag" → `https://highperformance.dk/foredragsholdere/jacob-boetter/` (nyt faneblad): bg #3D5BFF, tekst #FFFFFF 16px/600, padding 15px 28px, border-radius 999px; hover: translateY(−2px), transition transform 0.3s ease. Sekundært link "LinkedIn ↗" → `https://www.linkedin.com/in/boetter/`: 15px/600, underkant 1px #4A443B.
- **Bog-strip** (nederst): margin-top `clamp(36px, 6vh, 52px)`, border-top 1px #322D26, padding-top 16px. Tekst: "Forfatter til fem bøger — den sjette, 10x, udkommer efterår 2026." — Newsreader kursiv 16px #8A8177; "10x" i #F5EFE6.
- **Foto**: `assets/jacob-vindue.jpg`, object-fit cover, object-position 62% 20%, filter saturate(0.85), min-height 420px.

### 2. Foredrag & Rådgivning
- Border-top 1px #322D26. Container max-width 1360px, padding `clamp(48px, 9vh, 96px) clamp(24px, 4vw, 64px)`.
- Grid 2 kolonner `repeat(auto-fit, minmax(min(320px, 100%), 1fr))`, gap `clamp(32px, 4vw, 64px)`.
- Pr. kolonne: label ("01 — Foredrag" / "02 — Rådgivning") — 12px uppercase 0.16em 600 #8A8177; derunder statement i Newsreader `clamp(22px, 2vw, 28px)`, line-height 1.35, #F5EFE6, gap 16px.
- Tekster: "Foredrag om AI — hvad teknologien kan, og hvad den betyder for måden, vi arbejder på." / "Rådgivning af teams, der vil have AI til at spille en positiv rolle i det daglige arbejde."

### 3. Bøger (bogreol)
- Border-top 1px #322D26. Samme container. Header-række: label "03 — Bøger" + højre note "Fem udgivne · én på vej" (13px #8A8177).
- **Reol**: wrapper med `perspective: 1400px`, margin-top `clamp(40px, 6vh, 64px)`.
  - Bogrække: flex, wrap, `align-items: flex-end`, centreret, gap `clamp(12px, 1.8vw, 24px)`, padding-bottom 2px.
  - **Hver bog**: wrapper `position: relative; transform-style: preserve-3d; transition: transform 0.4s ease` med individuel Y-rotation: NQ −10°, Unboss +7°, Fuck It Ship It (se nedenfor), Udefra −6°, No-Code +9°, 10x −8°. Hover: rotateY(0) + translateY(−12px).
  - Omslag: `<img>` højde `clamp(150px, 17vw, 230px)` (alle seks bøger skal stå på én hylde ved ≥1200px viewport), auto bredde, border-radius 1px 3px 3px 1px, skygge `-16px 20px 36px -16px rgba(0,0,0,0.75)`.
  - **Sideblok** (bogsider): absolut div, top 1.5%/bottom 1%/right −6px, bredde 6px, gradient 90°: #EFE9DC → #CFC6B4 (55%) → #9B917E.
  - **Gulvskygge**: absolut div under bogen: left 8%, right −3%, bottom −9px, højde 14px, `radial-gradient(ellipse, rgba(0,0,0,0.6), transparent 70%)`.
  - **Lænende bog**: "Fuck It Ship It" står lænet: `transform: rotate(-8deg) rotateY(5deg); transform-origin: 100% 100%`, margin-left `clamp(6px, 1vw, 14px)`, margin-right let negativ; hover beholder rotate(−8deg), fjerner kun rotateY og løfter −10px.
  - **10x-pladsholder** (ikke udgivet endnu — ingen sideblok): samme højde, aspect-ratio 23/30, gradient 155°: #4A66FF → #2E45C9, centreret indhold: "10x" i Newsreader kursiv `clamp(38px, 4.5vw, 54px)` #FFFFFF + "KOMMENDE · EFTERÅR 2026" 10.5px uppercase 0.12em 600 rgba(255,255,255,0.78).
- **Hylde**: div i fuld bredde, højde 13px, gradient 180°: #3B352C → #262019, border-radius 2px, skygge `0 24px 38px -14px rgba(0,0,0,0.8)` + indre topkant `0 2px 0 rgba(245,239,230,0.06) inset`.

### 4. Kontakt (footer, scroll-mål)
- `id="kontakt"`, border-top 1px #322D26. Padding `clamp(72px, 14vh, 150px)` top og bund.
- **H2**: "Skal vi tales ved?" — Newsreader 400 kursiv, `clamp(44px, 7vw, 104px)`, line-height 1, letter-spacing −0.02em, #F5EFE6.
- **Kontakt-række** (gap `clamp(18px, 2.5vw, 36px)`): samme blå "Book et foredrag"-knap (→ highperformance.dk-linket); email-link "jacob@boetter.dk" → `mailto:jacob@boetter.dk?subject=Foredrag%20om%20AI`; telefon-link "31 68 30 14" → `tel:+4531683014`. Begge links: Newsreader kursiv `clamp(20px, 1.8vw, 26px)`, #F5EFE6, hover #F9C99B.
- Ingen bundlinje/kolofon — siden slutter her med luft.

## Interaktioner & adfærd
- **Smooth scroll**: "Kontakt" i toppen er et rent ankerlink (`<a href="#kontakt">`) kombineret med `html { scroll-behavior: smooth; }` — ingen JS. Degraderer pænt til et alment hop, hvor smooth ikke understøttes.
- **Hover på bøger**: rotateY → 0 og løft −12px (0.4s ease) — bogen "tages ud af reolen". Den lænende bog beholder sin 2D-hældning.
- **Hover på knapper**: translateY(−2px), 0.3s ease. Link-hover: farve → #F9C99B.
- **Eksterne links** ("Book et foredrag", LinkedIn): `target="_blank" rel="noopener"`.
- **Responsivt**: alt via `clamp()` og auto-fit-grids — ingen media queries nødvendige. Hero stakker til én kolonne under ~1000px; bogreolen wrapper (hylden bliver under nederste række).
- **Tekstmarkering**: `::selection { background: #3D5BFF; color: #FFF }`.

## State management
Ingen egentlig state. Email (`jacob@boetter.dk`) og telefon (`31 68 30 14`) er konstanter, der bruges både som visningstekst og i `mailto:`/`tel:`-href. `lang="da"` på `<html>`.

## Design tokens
- **Farver**: baggrund #191612; tekst primær #F5EFE6; tekst sekundær #B8AE9F; muted/labels #8A8177; hairline #322D26; underkant på links #4A443B; accent (CTA) #3D5BFF; accent-gradient 10x #4A66FF→#2E45C9; hover-highlight #F9C99B; sideblok #EFE9DC/#CFC6B4/#9B917E; hylde #3B352C→#262019.
- **Typografi**: Display: Newsreader (400; kursiv 300) — Google Fonts. Brødtekst/UI: Hanken Grotesk (400/500/600). Labels: 12px, uppercase, letter-spacing 0.16em. Skalaer: se clamp-værdier pr. sektion.
- **Spacing**: sektions-padding `clamp(48px, 9vh, 96px)` (kontakt: `clamp(72px, 14vh, 150px)`); container max-width 1360px med side-padding `clamp(24px, 4vw, 64px)`.
- **Radius**: knapper 999px; bøger 1px 3px 3px 1px; hylde 2px.
- **Skygger**: bøger `-16px 20px 36px -16px rgba(0,0,0,0.75)`; hylde `0 24px 38px -14px rgba(0,0,0,0.8)`.

## Assets
- `assets/jacob-vindue.jpg` — hero-foto (leveret af Jacob, 1600×1200, beskåret via object-position).
- `assets/bog-nq.jpg`, `assets/bog-unboss.jpg`, `assets/bog-fuckitshipit.jpg`, `assets/bog-udefra.jpg`, `assets/bog-nocode.jpg` — bogomslag (leveret af Jacob, højde 600px).
- Google Fonts: Newsreader + Hanken Grotesk (`https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&family=Hanken+Grotesk:wght@400;500;600&display=swap`).

## Filer
- `Landingpage 1a Moerk.dc.html` — designreference (hele siden, inline styles).
- `assets/` — alle billeder i webklar størrelse.
