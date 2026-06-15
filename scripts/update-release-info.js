#!/usr/bin/env node

/**
 * Update release-info.json with actual npm release data
 * Fetches release date and info from npm registry
 * Keeps release info always in sync with published version
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const PACKAGE_NAME = 'axiom01';
const VERSION = '2.0.0'; // Update this when releasing new version
const NPM_API_URL = `https://registry.npmjs.org/${PACKAGE_NAME}`;

function fetchNpmData() {
  return new Promise((resolve, reject) => {
    https.get(NPM_API_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

async function updateReleaseInfo() {
  try {
    console.log(`Fetching release info for ${PACKAGE_NAME}@${VERSION} from npm...`);
    
    const npmData = await fetchNpmData();
    const releaseTime = npmData.time[VERSION];
    
    if (!releaseTime) {
      throw new Error(`Version ${VERSION} not found in npm registry`);
    }
    
    const formattedDate = formatDate(releaseTime);
    console.log(`✓ Found release date: ${formattedDate}`);
    
    // Read current release-info.json
    const releaseInfoPath = path.join(__dirname, '../release-info.json');
    const releaseInfo = JSON.parse(fs.readFileSync(releaseInfoPath, 'utf8'));
    
    // Update dates
    releaseInfo.releaseDate = releaseTime.split('T')[0]; // YYYY-MM-DD
    releaseInfo.releaseDateFormatted = formattedDate;
    
    // Write back
    fs.writeFileSync(releaseInfoPath, JSON.stringify(releaseInfo, null, 2) + '\n');
    
    console.log(`✓ Updated release-info.json`);
    console.log(`  Release Date: ${releaseInfo.releaseDateFormatted}`);
    
  } catch (error) {
    console.error(`✗ Error updating release info:`, error.message);
    process.exit(1);
  }
}

updateReleaseInfo();
