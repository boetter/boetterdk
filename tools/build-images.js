/*
 * Bygger AVIF- og WebP-udgaver af billederne i assets/ ud fra JPEG-originalerne.
 *
 * Kræver: npm install sharp     Kør fra repo-roden:  node tools/build-images.js
 *
 * Hero-fotoet lægges i tre bredder, så mobilen ikke henter et 1600px-billede;
 * bogomslagene beholder deres ene størrelse (de vises maks. 230px høje, så
 * 600px dækker skærme med dobbelt pixeltæthed).
 *
 * assets/og-image.jpg røres ikke: Facebook, LinkedIn og andre kræver JPEG/PNG.
 */

const sharp = require('sharp');
const path = require('path');

const ASSETS = path.join(__dirname, '..', 'assets');

const HERO = { file: 'jacob-vindue.jpg', widths: [800, 1200, 1600] };
const COVERS = [
  'bog-nq.jpg',
  'bog-unboss.jpg',
  'bog-fuckitshipit.jpg',
  'bog-udefra.jpg',
  'bog-nocode.jpg',
];

const results = [];

async function encode(input, output, width, format, options) {
  let pipeline = sharp(input);
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
  const info = await pipeline[format](options).toFile(output);
  results.push({ file: path.basename(output), bytes: info.size });
}

(async () => {
  for (const width of HERO.widths) {
    const src = path.join(ASSETS, HERO.file);
    const stem = `jacob-vindue-${width}`;
    await encode(src, path.join(ASSETS, `${stem}.avif`), width, 'avif', { quality: 58 });
    await encode(src, path.join(ASSETS, `${stem}.webp`), width, 'webp', { quality: 78 });
  }

  for (const cover of COVERS) {
    const src = path.join(ASSETS, cover);
    const stem = cover.replace(/\.jpg$/, '');
    await encode(src, path.join(ASSETS, `${stem}.avif`), null, 'avif', { quality: 60 });
    await encode(src, path.join(ASSETS, `${stem}.webp`), null, 'webp', { quality: 80 });
  }

  const total = results.reduce((sum, r) => sum + r.bytes, 0);
  for (const r of results.sort((a, b) => a.file.localeCompare(b.file))) {
    console.log(`  ${(r.bytes / 1024).toFixed(1).padStart(7)} KB  ${r.file}`);
  }
  console.log(`  ${(total / 1024).toFixed(1).padStart(7)} KB  i alt (nye filer)`);
})();
