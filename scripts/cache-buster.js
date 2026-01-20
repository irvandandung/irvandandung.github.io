#!/usr/bin/env node

/**
 * Cache Buster - Increments version numbers across all assets
 * Run this before deploying to ensure cache invalidation
 * 
 * Usage: node scripts/cache-buster.js
 */

const fs = require('fs');
const path = require('path');

const files = [
  {
    path: 'src/app/layout.tsx',
    pattern: /\/favicon\.svg\?v=(\d+)/g,
    description: 'Favicon version'
  }
];

function incrementVersion(filePath, pattern, description) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let found = false;
    
    content = content.replace(pattern, (match, version) => {
      found = true;
      const newVersion = parseInt(version) + 1;
      console.log(`✓ ${description}: ${version} → ${newVersion}`);
      return match.replace(version, newVersion.toString());
    });
    
    if (found) {
      fs.writeFileSync(filePath, content, 'utf8');
    } else {
      console.log(`⚠ ${description}: No version found to increment`);
    }
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
  }
}

console.log('🔄 Incrementing cache buster versions...\n');

files.forEach(({ path: filePath, pattern, description }) => {
  const fullPath = path.join(__dirname, '..', filePath);
  incrementVersion(fullPath, pattern, description);
});

console.log('\n✅ Cache buster versions incremented!');
console.log('📝 Remember to commit and deploy these changes.\n');
