/*
 * Samler det, der skal udgives, i mappen _site/.
 *
 * Kør fra repo-roden:  node tools/build-site.js
 *
 * To ting sker her:
 *   1. Kun produktionsfilerne kopieres med. Designoplægget, README, tools/ og
 *      alt andet arbejdsmateriale bliver liggende i repoet, men lander aldrig
 *      på et offentligt domæne.
 *   2. styles.css skrives ind i index.html, så forsiden ikke skal hente et
 *      ekstra stylesheet, før den kan tegnes. Filen kopieres stadig med, fordi
 *      404.html henter den.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '_site');

const FILES = [
  'index.html',
  '404.html',
  'styles.css',
  'robots.txt',
  'sitemap.xml',
  'favicon.svg',
  'apple-touch-icon.png',
];
const DIRS = ['assets'];

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const file of FILES) fs.copyFileSync(path.join(ROOT, file), path.join(OUT, file));
for (const dir of DIRS) copyDir(path.join(ROOT, dir), path.join(OUT, dir));

const cssPath = path.join(ROOT, 'styles.css');
const css = fs.readFileSync(cssPath, 'utf8');
const indexPath = path.join(OUT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const linkTag = '<link rel="stylesheet" href="styles.css">';
if (!html.includes(linkTag)) {
  throw new Error('Fandt ikke stylesheet-linket i index.html — er markup ændret?');
}
html = html.replace(linkTag, '<style>\n' + css.trim() + '\n</style>');
fs.writeFileSync(indexPath, html);

const size = (p) => fs.statSync(p).size;
console.log('_site bygget:');
console.log(`  index.html  ${(size(indexPath) / 1024).toFixed(1)} KB (styles.css skrevet ind)`);
console.log(`  ${FILES.length} filer + ${DIRS.join(', ')}/`);
