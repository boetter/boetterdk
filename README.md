# boetter.dk — Jacob Bøtter

Personlig landingpage for Jacob Bøtter: foredragsholder og rådgiver om AI, forfatter til fem bøger (den sjette, *10x*, udkommer efterår 2026).

Statisk site — ren HTML/CSS, ingen JavaScript på siden selv. Byggeskridtet er valgfrit og bruges kun ved udgivelse.

**Før sitet går live: se [TJEKLISTE.md](TJEKLISTE.md)** — den samler de fakta, der skal bekræftes, og de handlinger, der ligger uden for koden.

## Struktur

| Sti | Hvad |
| --- | --- |
| `index.html` | Hele forsiden (hero, foredrag/rådgivning, bogreol, kontakt) |
| `styles.css` | Al styling |
| `404.html`, `robots.txt`, `sitemap.xml` | Fejlside og søgemaskine-filer |
| `assets/` | Billeder (JPEG + AVIF/WebP) og fonte |
| `tools/` | Byggescripts og fontkilder — udgives ikke |
| `design_handoff_landingpage/` | Det oprindelige designoplæg — udgives ikke |

## Udgivelse

Sitet hostes på Netlify og bygges efter `netlify.toml`: kommandoen `node tools/build-site.js` og mappen `_site` som output. Byggeskridtet gør to ting — det kopierer **kun** produktionsfilerne, så designoplæg, `tools/` og dokumentation aldrig havner på et offentligt domæne, og det skriver `styles.css` ind i `index.html`, så forsiden kan tegnes uden at hente et ekstra stylesheet.

Byggeskridtet har ingen afhængigheder; Netlify skal ikke installere noget først. Fejler et deploy, ligger fejlen derfor i `tools/build-site.js` — typisk fordi stylesheet-linket i `index.html` er ændret, hvilket scriptet med vilje stopper på.

Sitets adresse er `jacob.boetter.dk`, og den står i `canonical`, `og:url`, `og:image`, URL'erne i JSON-LD, `sitemap.xml` og `robots.txt`. Flytter sitet til et andet domæne, skal alle de steder rettes med.

Byg lokalt med `node tools/build-site.js` og server `_site/`.

## Billeder

`node tools/build-images.js` (kræver `npm install sharp`) genererer AVIF- og WebP-udgaver ud fra JPEG-originalerne i `assets/`. Hero-fotoet lægges i tre bredder; bogomslagene i én. JPEG'erne bliver liggende som fallback, og `assets/og-image.jpg` røres ikke — sociale medier kræver JPEG eller PNG.

## Fonte

Fontene er self-hostede: hurtigere, og besøgendes IP-adresser sendes ikke til Google.

`./tools/build-fonts.sh` (kræver `python3 -m pip install fonttools brotli`) bygger dem ud fra kilderne i `tools/fonts-src/`. Newsreader er skåret i to snit, fordi den variable optiske akse fylder det meste af filen:

- **Newsreader Display** — optisk størrelse 72, kun de tegn, der bruges i de store overskrifter. Browseren vælger alligevel 72 ved den størrelse, så heroen ser ud præcis som i designoplægget.
- **Newsreader** — optisk størrelse 22, hele det latinske tegnsæt, til alt andet.

Tilsammen 134 KB mod 313 KB før.

**Ændrer du teksten i `<h1>`, i „Skal vi tales ved?“ eller på 10x-omslaget**, skal de nye bogstaver tilføjes i `DISPLAY_ROMAN`/`DISPLAY_ITALIC` øverst i `tools/build-fonts.sh`, og scriptet køres igen. Ellers falder de manglende tegn tilbage på den almindelige Newsreader.
