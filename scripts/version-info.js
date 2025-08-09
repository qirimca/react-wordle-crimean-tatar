const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Перевіряємо, чи запущено в CI (GitHub Actions вже генерує .env.local)
if (process.env.CI || process.env.GITHUB_ACTIONS) {
  console.log('ℹ️ Running in CI environment, skipping version generation (handled by workflow)');
  process.exit(0);
}

// Отримуємо інформацію про версію та коміт
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const version = packageJson.version;

let commitHash;
let buildDate;

try {
  // Отримуємо хеш поточного коміту
  commitHash = execSync('git rev-parse HEAD').toString().trim();
} catch (error) {
  console.warn('Warning: Could not get git commit hash:', error.message);
  commitHash = 'unknown';
}

buildDate = new Date().toISOString();

// Записуємо в .env файл для React
const envContent = `
REACT_APP_VERSION=${version}
REACT_APP_COMMIT_HASH=${commitHash}
REACT_APP_BUILD_DATE=${buildDate}
`;

fs.writeFileSync(path.join(__dirname, '..', '.env.local'), envContent.trim());

console.log(`✅ Version info generated:
  Version: ${version}
  Commit: ${commitHash.substring(0, 7)}
  Build Date: ${buildDate}
`);