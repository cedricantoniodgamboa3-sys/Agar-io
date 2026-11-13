const fs = require('fs'), path = require('path');
const out = 'www';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'icons'), { recursive: true });
for (const f of ['index.html', 'manifest.json', 'sw.js']) fs.copyFileSync(f, path.join(out, f));
for (const f of fs.readdirSync('icons')) fs.copyFileSync(path.join('icons', f), path.join(out, 'icons', f));
console.log('Built to ./www');
