# Release Automation Guide

## Overview

The release date on the index.html page is automatically fetched from npm registry and kept in sync with the actual published version. This prevents the date from going stale.

## How It Works

1. **release-info.json** - Single source of truth for all release metadata
2. **scripts/update-release-info.js** - Script that fetches data from npm registry
3. **npm script** - Easy command to run the update

## Workflow for New Releases

### 1. Prepare and Test
```bash
npm test
npm run quality-audit
```

### 2. Update Version
```bash
# Update version in package.json
npm version minor  # or major/patch as appropriate
```

### 3. Publish to npm
```bash
npm publish
```

### 4. Update Release Info (NEW!)
```bash
npm run update-release
```

This will:
- Fetch the actual release date from npm registry
- Format it nicely
- Update release-info.json
- Release page automatically displays the correct date

### 5. Commit and Push
```bash
git add release-info.json
git commit -m "chore: Update release info for v2.1.0"
git push
```

## Manual Update

If you need to manually update release info:

```bash
npm run update-release
```

The script will:
- Connect to npm registry
- Fetch the published date for axiom01@2.0.0 (or current version in script)
- Convert to human-readable format
- Update release-info.json

## What Gets Updated

The script updates:
- `releaseDate` - ISO 8601 format (2026-06-15)
- `releaseDateFormatted` - Human-readable format (June 15, 2026)

## Viewing the Release Date

The release date appears on:
- Landing page (index.html) - via release-loader.js
- Release info section - dynamically updated

## Changing the Version

When you release a new version (e.g., 2.1.0):

1. Update package.json version
2. Publish to npm
3. Update the VERSION in `scripts/update-release-info.js`
4. Run `npm run update-release`

Example:
```javascript
// In scripts/update-release-info.js
const VERSION = '2.1.0'; // Change this
```

## Why This Matters

✅ Release date is always accurate  
✅ No manual updates needed  
✅ Automatically syncs with npm publication  
✅ Simple one-command workflow  
✅ Part of release process  

## Troubleshooting

### Script fails to run
- Ensure Node.js is installed
- Check internet connection (needs to reach npm registry)
- Verify package.json has correct package name

### Date is wrong
- Verify the package was actually published on npm
- Check that version number in script matches package.json
- Run `npm run update-release` again

### Need to override date
Edit release-info.json manually and set the date directly

## Summary

For every new release:
1. `npm publish` → Publish to npm
2. `npm run update-release` → Fetch real release date
3. `git push` → Deploy

That's it! The landing page always shows the correct release date.
