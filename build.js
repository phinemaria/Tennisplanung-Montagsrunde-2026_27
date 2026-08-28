const fs = require('fs');
const path = require('path');

// Stelle sicher dass public Verzeichnis existiert
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✓ Public Verzeichnis erstellt');
}

// Kopiere index.html in public
const source = path.join(__dirname, 'index.html');
const dest = path.join(publicDir, 'index.html');

try {
  fs.copyFileSync(source, dest);
  console.log('✓ index.html → public/index.html kopiert');
} catch (error) {
  console.error('✗ Fehler beim Kopieren:', error.message);
  process.exit(1);
}

console.log('✓ Build complete!');
