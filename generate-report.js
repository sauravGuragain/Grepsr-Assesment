const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const reportDir = 'cypress/reports/mochawesome-report';

// 1. Delete old reports
console.log(' Cleaning old reports...');
fs.readdirSync(reportDir).forEach(file => {
  const filePath = path.join(reportDir, file);
  if (fs.lstatSync(filePath).isFile()) {
    fs.unlinkSync(filePath);
  }
});

console.log(' Cleaned old files.');

// 2. Run Cypress tests
console.log(' Running Cypress tests...');
execSync('npx cypress run', { stdio: 'inherit' });

// 3. Merge JSON reports
console.log(' Merging JSON reports...');
execSync(`npx mochawesome-merge ${reportDir}/*.json > ${reportDir}/merged.json`, {
  stdio: 'inherit'
});

// 4. Generate HTML from merged report
console.log(' Generating final HTML report...');
execSync(`npx marge ${reportDir}/merged.json -o ${reportDir}`, { stdio: 'inherit' });

console.log(' All done! Final report generated in:', reportDir);
