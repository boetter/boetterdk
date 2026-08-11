# Tjekliste før lancering

To ting mangler, før sitet går live: nogle **fakta skal bekræftes**, og nogle **handlinger ligger uden for koden**. Begge dele kræver Jacob.

## 1. Fakta, der skal bekræftes

Alt herunder står nu på siden. Intet af det er efterprøvet af andre end research — bekræft, ret eller slet.

| Hvor | Påstand | Status |
| --- | --- | --- |
| Hero, meritlinjen | „500+ foredrag · Tusindvis undervist i at bruge AI · 100+ virksomheder rådgivet“ | Dine egne tal fra kommentaren — bekræft de præcise størrelser |
| Bogreol, faktalinjen | NQ (2010) · Unboss (2012, med Lars Kolind — også på engelsk) · Fuck It, Ship It (med Stine Mølgaard) · Udefra (2014) · No-Code (2021) | Årstal og medforfattere stammer fra forlags- og boghandlersider |
| JSON-LD | ISBN: Unboss 9788740007053 · Fuck It, Ship It 9788797083413 · No-Code 9788797083499 | Fra boghandlerlisteringer. NQ og Udefra står uden ISBN |

Bemærk: udsagnet om, at du er ekstern lektor, og at du har rådgivet to statsministre, er **ikke** kommet på siden, jf. din kommentar.

## 2. Links, der ikke kunne testes herfra

Sessionens netværkspolitik blokerer udgående kald til de her domæner, så de er lagt ind som oplyst, men ikke klikket igennem. Test dem, når branchen er merget:

- `heutedenkenmorgenfertig.com` — rådgivningslinket peger på **forsiden**. Har rådgivningssiden sin egen URL, så send den, og linket rettes.
- `unboss.com`, `udefrabog.dk`, `nocodehandbook.com` — bogomslagene linker hertil.
- `dagligprompt.boetter.dk` — linket i kontaktsektionen.
- `highperformance.dk/foredragsholdere/jacob-boetter/` — begge „Book et foredrag“-knapper.

**NQ og Fuck It, Ship It er ikke klikbare endnu.** Du var i tvivl om, hvor de skulle pege hen. Send en adresse (bogens eget site eller en boghandler), så kobles de på — indtil da står de som ren illustration.

## 3. Handlinger uden for koden

### Skift GitHub Pages til Actions
Sitet bygges nu af `.github/workflows/deploy.yml`, som kun udgiver produktionsfilerne. Derfor: **Settings → Pages → Source → GitHub Actions** (i stedet for „Deploy from a branch“). Uden det skifte deployes repoet stadig råt, og designoplægget ligger offentligt.

### Ryd op i økosystemet
- **`foredrag.boetter.dk`** — gammel foredragsside, stadig indekseret og kun på HTTP. Sæt en redirect til `boetter.dk`, så de to sider ikke konkurrerer på „Jacob Bøtter foredrag“.
- **`dagligprompt.boetter.dk`** — tilføj et link tilbage til `boetter.dk`.
- **LinkedIn** — din headline markedsfører stadig `nocodeprototype.com`, og det er den titel, Google viser. Ret headline, og sæt `boetter.dk` i website-feltet.

### Efter lancering
- Registrér `boetter.dk` i Google Search Console og indsend `sitemap.xml` (ligger klar i roden).
- Bed High Performance om at linke fra din profilside til `boetter.dk`.
