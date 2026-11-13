// Builds 1600x900 line-drawing blog heroes matching the existing CMS heroes
// (slate gradient #1e293b -> #0b1220, amber #f59e0b glow, light round strokes).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const OUT = process.argv[2] || __dirname; // run: node build-heroes.cjs (needs playwright). Then shrink each PNG with sharp: .png({palette:true, colors:256, quality:100, effort:10, dither:1.0})

const W = 1600, H = 900;
const INK = '#cfd3d9';
const bg = `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1e293b"/><stop offset="1" stop-color="#0b1220"/>
    </linearGradient>
    <radialGradient id="glow" gradientUnits="userSpaceOnUse" cx="800" cy="380" r="600"
      gradientTransform="translate(800 380) scale(1 0.68) translate(-800 -380)">
      <stop offset="0" stop-color="#f59e0b" stop-opacity="0.30"/>
      <stop offset="0.45" stop-color="#f59e0b" stop-opacity="0.13"/>
      <stop offset="1" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>`;
const main = `fill="none" stroke="${INK}" stroke-opacity="0.82" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"`;
const faint = `fill="none" stroke="${INK}" stroke-opacity="0.5" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"`;

// 1. Discovery vs validation: a wandering search path (before PMF) crosses a dashed
//    threshold and becomes a straight line into a target (after PMF).
const hero1 = `
  <!-- threshold -->
  <line x1="800" y1="170" x2="800" y2="640" ${main} stroke-width="10" stroke-dasharray="26 30"/>
  <!-- magnifying glass -->
  <circle cx="440" cy="300" r="58" ${main}/>
  <line x1="398" y1="342" x2="350" y2="390" ${main}/>
  <!-- wandering path from the glass to the threshold -->
  <path d="M 488 334 C 560 390, 470 470, 520 530 C 570 590, 660 560, 640 500
           C 620 440, 540 470, 580 540 C 620 610, 720 590, 742 520 C 760 462, 770 430, 800 420" ${main}/>
  <!-- loose ideas left behind -->
  <circle cx="610" cy="300" r="9" ${faint}/>
  <circle cx="690" cy="380" r="9" ${faint}/>
  <circle cx="470" cy="610" r="9" ${faint}/>
  <circle cx="700" cy="250" r="9" ${faint}/>
  <!-- straight line into the target -->
  <line x1="800" y1="420" x2="1118" y2="420" ${main}/>
  <circle cx="1130" cy="420" r="128" ${main}/>
  <circle cx="1130" cy="420" r="80" ${main} stroke-opacity="0.65" stroke-width="11"/>
  <circle cx="1130" cy="420" r="30" ${main}/>
  <!-- arrow fletching at the tail -->
  <path d="M 880 420 l -34 -30 M 880 420 l -34 30 M 920 420 l -34 -30 M 920 420 l -34 30" ${faint}/>`;

// 2. Buying-intent questions: a question in a speech bubble connects to a price tag.
const hero2 = `
  <path d="M 470 190 H 730 Q 790 190 790 250 V 410 Q 790 470 730 470 H 560 L 480 540 L 500 470 H 470
           Q 410 470 410 410 V 250 Q 410 190 470 190 Z" ${main}/>
  <path d="M 552 280 Q 552 240 600 240 Q 648 240 648 282 Q 648 316 612 330 Q 600 336 600 360 V 372" ${main}/>
  <circle cx="600" cy="414" r="5" fill="${INK}" fill-opacity="0.82" stroke="${INK}" stroke-opacity="0.82" stroke-width="10"/>
  <!-- connector -->
  <path d="M 820 330 C 900 300, 930 380, 990 400" ${faint} stroke-dasharray="4 26" stroke-width="12"/>
  <!-- price tag, tilted -->
  <g transform="rotate(-18 1110 480)">
    <path d="M 1010 400 H 1230 Q 1260 400 1260 430 V 530 Q 1260 560 1230 560 H 1010 L 950 480 Z" ${main}/>
    <circle cx="1012" cy="480" r="16" ${main} stroke-width="10"/>
    <line x1="1070" y1="450" x2="1210" y2="450" ${faint}/>
    <line x1="1070" y1="490" x2="1180" y2="490" ${faint}/>
    <line x1="1070" y1="530" x2="1150" y2="530" ${faint}/>
  </g>
  <!-- tag string -->
  <path d="M 1006 506 C 960 560, 900 600, 930 650 C 950 684, 1000 670, 990 630" ${faint}/>`;

// 3. How many interviews: a curve that climbs then levels off; speech bubbles along it
//    hold fewer lines each time (less new) until they come back empty.
function hero3() {
  const curve = 'M 370 650 C 470 390, 610 290, 1180 278';
  // positions computed in-page via getPointAtLength; placeholder replaced at render
  return `
  <path id="curve" d="${curve}" fill="none" stroke="none"/>
  <g id="bubbles"></g>
  <line x1="930" y1="222" x2="1180" y2="222" ${faint} stroke-dasharray="18 22"/>`;
}
const hero3Script = `
  const svg = document.querySelector('svg');
  const c = document.getElementById('curve');
  const L = c.getTotalLength();
  const fr = [0.0, 0.17, 0.36, 0.56, 0.77, 0.97];
  const lines = [3, 3, 2, 1, 0, 0];
  const r = 40;
  const pts = fr.map(f => c.getPointAtLength(f * L));
  // mask: draw the curve but cut it where bubbles sit
  const ns = 'http://www.w3.org/2000/svg';
  let mask = '<mask id="cut"><rect width="1600" height="900" fill="white"/>' +
    pts.map(p => '<circle cx="'+p.x+'" cy="'+p.y+'" r="'+(r+10)+'" fill="black"/>').join('') + '</mask>';
  svg.querySelector('defs').insertAdjacentHTML('beforeend', mask);
  const MAIN = ${JSON.stringify(main)};
  svg.insertAdjacentHTML('beforeend', '<path d="'+c.getAttribute('d')+'" '+MAIN+' mask="url(#cut)"/>');
  let g = '';
  pts.forEach((p, i) => {
    const op = lines[i] === 0 ? 0.6 : 0.82;
    const s = "fill='none' stroke='${INK}' stroke-opacity='"+op+"' stroke-width='11' stroke-linecap='round' stroke-linejoin='round'";
    // bubble: circle with a short tail to the lower left
    g += '<path d="M '+(p.x-r*0.55)+' '+(p.y+r*0.84)+' L '+(p.x-r*0.95)+' '+(p.y+r*1.28)+' L '+(p.x-r*0.05)+' '+(p.y+r*1.0)+'" '+s+'/>';
    g += '<circle cx="'+p.x+'" cy="'+p.y+'" r="'+r+'" '+s+'/>';
    const ys = lines[i] === 3 ? [-13, 0, 13] : lines[i] === 2 ? [-7, 7] : lines[i] === 1 ? [0] : [];
    ys.forEach((dy, k) => {
      const half = ys.length === 1 ? 10 : (k === ys.length - 1 ? 10 : 17);
      g += '<line x1="'+(p.x-17)+'" y1="'+(p.y+dy)+'" x2="'+(p.x-17+half*2)+'" y2="'+(p.y+dy)+'" stroke="${INK}" stroke-opacity="0.82" stroke-width="6" stroke-linecap="round"/>';
    });
  });
  svg.insertAdjacentHTML('beforeend', g);
  // check mark at the plateau
  svg.insertAdjacentHTML('beforeend', "<path d='M 1222 196 l 22 22 l 44 -50' fill='none' stroke='${INK}' stroke-opacity='0.82' stroke-width='14' stroke-linecap='round' stroke-linejoin='round'/>");
`;

const heroes = [
  { slug: 'customer-discovery-vs-customer-validation', body: hero1 },
  { slug: 'customer-discovery-questions-buying-intent', body: hero2 },
  { slug: 'how-many-customer-interviews-is-enough', body: hero3(), script: hero3Script },
];

(async () => {
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  for (const h of heroes) {
    const html = `<!doctype html><html><body style="margin:0;background:#0b1220">
      <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${h.body}</svg>
      <script>${h.script || ''}</script></body></html>`;
    await page.setContent(html);
    await page.waitForTimeout(100);
    const svgMarkup = await page.evaluate(() => document.querySelector('svg').outerHTML);
    fs.writeFileSync(path.join(OUT, `${h.slug}-hero.svg`), svgMarkup);
    await page.screenshot({ path: path.join(OUT, `${h.slug}-hero.png`), clip: { x: 0, y: 0, width: W, height: H } });
    console.log('wrote', h.slug);
  }
  await b.close();
})();
