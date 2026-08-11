#!/usr/bin/env bash
# Bygger de webklare fonte i assets/fonts/ ud fra kilderne i tools/fonts-src/.
#
# Kræver: python3 -m pip install fonttools brotli
# Kør fra repo-roden:  ./tools/build-fonts.sh
#
# Newsreader er en variabel font med to akser: wght (200-800) og opsz (6-72,
# "optical size"). Browseren sætter som udgangspunkt opsz efter skriftstørrelsen,
# så store overskrifter får en anden — bredere og finere — bogstavform end
# brødteksten. Hele akse-dataen fylder det meste af filen, så vi låser den og
# skærer i stedet fonten i to:
#
#   Newsreader Display  opsz 72 — kun de tegn, der bruges i de store overskrifter.
#                       Ved 132px vælger browseren alligevel 72, så heroen
#                       gengives identisk med designoplægget.
#   Newsreader          opsz 22 — hele det latinske tegnsæt til alt andet
#                       (statements 22-28px, kontaktlinks 20-26px, hero-noten 16px).
#
# VIGTIGT: display-fonten indeholder KUN tegnene i DISPLAY_ROMAN/DISPLAY_ITALIC
# nedenfor. Ændrer du teksten i <h1>, i "Skal vi tales ved?" eller på 10x-omslaget,
# så tilføj de nye tegn her og kør scriptet igen — ellers falder de manglende
# bogstaver tilbage på systemets serif.

set -euo pipefail

cd "$(dirname "$0")/.."
SRC="tools/fonts-src"
OUT="assets/fonts"

# Tegn brugt i stor Newsreader-tekst
DISPLAY_ROMAN="Jacob"                      # <h1>Jacob</h1>
DISPLAY_ITALIC="BøtterSkalvites d?10x"     # "Bøtter", "Skal vi tales ved?", "10x"

# Samme unicode-range som @font-face i styles.css opgiver (Google Fonts' latin-subset)
LATIN='U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

mkdir -p "$OUT"

build_display () {  # <kildefil> <tegn> <målfil>
  python3 -m fontTools.varLib.instancer "$SRC/$1" opsz=72 wght=300:600 -o "$TMP/$1"
  python3 -m fontTools.subset "$TMP/$1" \
    --flavor=woff2 --layout-features='*' --text="$2" --output-file="$OUT/$3"
}

build_text () {     # <kildefil> <målfil>
  python3 -m fontTools.varLib.instancer "$SRC/$1" opsz=22 wght=300:600 -o "$TMP/text-$1"
  python3 -m fontTools.subset "$TMP/text-$1" \
    --flavor=woff2 --layout-features='*' --unicodes="$LATIN" --output-file="$OUT/$2"
}

build_display newsreader.woff2        "$DISPLAY_ROMAN"  newsreader-display.woff2
build_display newsreader-italic.woff2 "$DISPLAY_ITALIC" newsreader-display-italic.woff2

build_text newsreader.woff2        newsreader.woff2
build_text newsreader-italic.woff2 newsreader-italic.woff2

# Hanken Grotesk har kun wght-aksen; vi bruger 400-600
python3 -m fontTools.varLib.instancer "$SRC/hanken-grotesk.woff2" wght=400:600 -o "$TMP/hanken.woff2"
python3 -m fontTools.subset "$TMP/hanken.woff2" \
  --flavor=woff2 --layout-features='*' --unicodes="$LATIN" --output-file="$OUT/hanken-grotesk.woff2"

echo
echo "Færdige fonte i $OUT:"
ls -l "$OUT" | awk 'NR>1 {printf "  %6.1f KB  %s\n", $5/1024, $9}'
awk_total=$(du -cb "$OUT"/*.woff2 | tail -1 | cut -f1)
printf "  %6.1f KB  i alt\n" "$(echo "$awk_total/1024" | bc -l)"
