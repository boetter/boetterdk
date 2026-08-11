# Tjekliste før lancering

To ting mangler, før sitet går live: nogle **fakta skal bekræftes**, og nogle **handlinger ligger uden for koden**. Begge dele kræver Jacob.

## 1. Fakta, der skal bekræftes

Bogårstallene er dine egne fra rettelsen af bogreolen, og meritlinjen bygger på dine tal. Tilbage står:

| Hvor | Påstand | Status |
| --- | --- | --- |
| Hero, meritlinjen | „500+ foredrag · Tusindvis undervist i at bruge AI · 100+ virksomheder rådgivet“ | Du foreslog tallene selv, men med spørgsmålstegn — sig god for de præcise størrelser |
| JSON-LD | ISBN: Unboss 9788740007053 · Fuck It, Ship It 9788797083413 · No-Code 9788797083499 | Eneste tal, der stadig stammer fra research. NQ og Udefra står uden ISBN |

To ting er bevidst holdt ude, jf. dine kommentarer: at du er ekstern lektor, og at du har rådgivet to statsministre. Medforfatterne (Lars Kolind, Stine Mølgaard) står heller ikke længere på siden.

**Ét spørgsmål:** heroen nævner ikke længere bogens titel („den sjette, om AI“), men 10x-omslaget i reolen gør. Er titlen ikke endelig, bør omslaget rettes med — sig til, så laver jeg det om.


## 2. Links, der ikke kunne testes herfra

Sessionens netværkspolitik blokerer udgående kald til de her domæner, så de er lagt ind som oplyst, men ikke klikket igennem. Test dem, når branchen er merget:

- `heutedenkenmorgenfertig.com` — rådgivningslinket peger på **forsiden**. Har rådgivningssiden sin egen URL, så send den, og linket rettes.
- `unboss.com`, `udefrabog.dk`, `nocodehandbook.com` — bogomslagene linker hertil.
- `bibliotek.dk` — NQ og Fuck It, Ship It linker til katalogsiderne. Sporingsparameteren (`tid=…`) i den ene adresse er fjernet, så linket ikke bærer en session med sig; tjek at begge sider stadig svarer.
- `dagligprompt.boetter.dk` — linket i kontaktsektionen.
- `highperformance.dk/foredragsholdere/jacob-boetter/` — begge „Book et foredrag“-knapper.

## 3. Handlinger uden for koden

### Sæt byggekommandoen i Netlify
Repoet har nu en `netlify.toml` med kommandoen `node tools/build-site.js` og `_site` som output. Tjek i Netlify (**Site configuration → Build & deploy**), at der ikke står en anden kommando eller publish-mappe i UI'et — indstillinger i UI'et vinder over filen.

Indtil det er på plads, udgiver Netlify hele repo-roden. Så er `/design_handoff_landingpage/`, `/tools/` og dokumentationen offentligt tilgængelige, og `styles.css` hentes som separat fil.

### Ryd op i økosystemet
- **`foredrag.boetter.dk`** — gammel foredragsside, stadig indekseret og kun på HTTP. Sæt en redirect til `boetter.dk`, så de to sider ikke konkurrerer på „Jacob Bøtter foredrag“.
- **`dagligprompt.boetter.dk`** — tilføj et link tilbage til `boetter.dk`.
- **LinkedIn** — din headline markedsfører stadig `nocodeprototype.com`, og det er den titel, Google viser. Ret headline, og sæt `boetter.dk` i website-feltet.

### Efter lancering
- Registrér `boetter.dk` i Google Search Console og indsend `sitemap.xml` (ligger klar i roden).
- Bed High Performance om at linke fra din profilside til `boetter.dk`.
