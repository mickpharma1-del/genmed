import { readFileSync } from 'node:fs';

const requiredFiles = [
  'apps/web/src/pages/HomePage.tsx',
  'apps/web/src/pages/ProductPage.tsx',
  'apps/web/src/pages/CartPage.tsx',
  'apps/admin/src/Dashboard.tsx'
];

const missing = [];
for (const file of requiredFiles) {
  const content = readFileSync(file, 'utf8');
  if (!content.includes('₹')) {
    missing.push(file);
  }
}

if (missing.length) {
  console.error('Missing ₹ currency symbol in files:', missing.join(', '));
  process.exit(1);
}

console.log('Rupee format validation passed for key views.');
