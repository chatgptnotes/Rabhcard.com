const fs = require('fs');
const path = require('path');

// Read current version from index.html
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Extract current version
const versionMatch = indexContent.match(/v(\d+)\.(\d+)\.(\d+)/);
if (!versionMatch) {
    console.error('Could not find version in index.html');
    process.exit(1);
}

let [, major, minor, patch] = versionMatch.map(Number);

// Increment patch version
patch++;

// Create new version string
const newVersion = `${major}.${minor}.${patch}`;
const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Update version in index.html
indexContent = indexContent.replace(
    /v\d+\.\d+\.\d+ \| Last updated: \d{4}-\d{2}-\d{2}/,
    `v${newVersion} | Last updated: ${timestamp}`
);

// Write back to file
fs.writeFileSync(indexPath, indexContent);

console.log(`Version bumped to ${newVersion}`);
console.log(`Timestamp: ${timestamp}`);
