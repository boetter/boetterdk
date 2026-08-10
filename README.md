# boetter.dk — Jacob Bøtter

Personlig landingpage for Jacob Bøtter: foredragsholder og rådgiver om AI, forfatter til fem bøger (den sjette, *10x*, udkommer efterår 2026).

Statisk site — ren HTML/CSS, ingen build-proces, ingen JavaScript.

## Struktur

- `index.html` — hele siden (hero, foredrag/rådgivning, bogreol, kontakt)
- `styles.css` — al styling, inkl. self-hostede fonte
- `assets/` — billeder samt fonte (`assets/fonts/`, Newsreader + Hanken Grotesk som variable woff2, self-hostet af hensyn til performance og GDPR)
- `favicon.svg`, `apple-touch-icon.png` — ikoner
- `assets/og-image.jpg` — delingsbillede til sociale medier (1200×630)
- `404.html`, `robots.txt`
- `design_handoff_landingpage/` — det oprindelige designoplæg (reference, deployes ikke)

## Lancering

Sitet kan hostes overalt, hvor statiske filer kan serveres. Med GitHub Pages:

1. Merge til `main`
2. Settings → Pages → "Deploy from a branch" → `main`, mappe `/ (root)`
3. Peg domænet (`boetter.dk`) på GitHub Pages og sæt det som custom domain — GitHub opretter selv en `CNAME`-fil

Bruges et subdomæne (fx `jacob.boetter.dk`) i stedet, skal `canonical`-/`og:url`-/`og:image`-URL'erne i `index.html` og URL'erne i JSON-LD-blokken rettes tilsvarende.
