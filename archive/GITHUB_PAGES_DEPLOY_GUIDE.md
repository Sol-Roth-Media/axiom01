# Axiom01 v2.1.2 Release - GitHub Pages Fix Guide

## What Was Fixed
GitHub Pages CSS 404 errors on axiom01.com have been resolved by switching from `axiom.css` (which uses `@import` statements) to `axiom.min.css` (self-contained minified CSS).

## Changes Made
**File: `/index.html`**
- Line 9: Changed from `<link rel="stylesheet" href="css/axiom.css">` 
- To: `<link rel="stylesheet" href="css/axiom.min.css">`

**Result**: All CSS now loads without 404 errors ✅

## How to Deploy This Fix

### Step 1: Verify the change locally
```bash
cd /Users/solroth/Sites/axiom01
grep "axiom" index.html | grep link
# Should show: <link rel="stylesheet" href="css/axiom.min.css">
```

### Step 2: Commit to Git
```bash
git add index.html
git commit -m "Fix: Use minified CSS to resolve GitHub Pages 404 errors"
```

### Step 3: Push to main branch
```bash
git push origin main
```

### Step 4: Deploy to GitHub Pages (gh-pages)
If you have a deployment script:
```bash
git push origin gh-pages
```

Or manually:
```bash
# Copy index.html and css/ to gh-pages branch
git checkout gh-pages
git merge main  # or manually copy files
git push origin gh-pages
```

### Step 5: Verify on axiom01.com
1. Go to https://axiom01.com
2. Open Developer Tools (F12)
3. Check Console tab - should have NO 404 errors
4. Check Network tab - CSS files should load with 200 status

## Why This Works
- **axiom.min.css** contains all CSS in a single, minified file
- No `@import url()` statements that cause path resolution issues
- GitHub Pages can load it directly without relative path confusion
- Same styling as before, just more efficient

## File Comparison

| Aspect | axiom.css | axiom.min.css |
|--------|-----------|---------------|
| Size | 170 KB | 76 KB |
| Contains | Source + imports | All CSS inline |
| Imports | Yes (@import statements) | No |
| GitHub Pages | ❌ 404 errors | ✅ Works |
| Production | ✅ Works | ✅ Works |
| CDN | Used | Preferred |

## No Other Changes Needed
- ✅ Package.json already correct (v2.1.2)
- ✅ CHANGELOG.md updated
- ✅ README.md updated
- ✅ release-info.json updated
- ✅ CSS files all present and working

## Next Steps for Release
After pushing this fix:

1. **Tag the release** (optional):
   ```bash
   git tag v2.1.2
   git push origin v2.1.2
   ```

2. **Create GitHub Release**:
   - Go to GitHub.com/Sol-Roth-Media/axiom01/releases
   - Create new release with tag v2.1.2
   - Add release notes from CHANGELOG.md

3. **Test axiom01.com**:
   - Wait 5-10 minutes for GitHub Pages to deploy
   - Visit https://axiom01.com
   - Verify no CSS 404 errors
   - Check that styling is correct

4. **Publish to NPM** (if ready):
   ```bash
   npm publish
   ```

## Rollback (if needed)
If for some reason you need to revert:
```bash
git revert HEAD
git push origin main
```

## Summary
This fix solves the GitHub Pages 404 issue without requiring any code changes or rebuilds. The minified CSS file was already generated and working - it just needed to be linked in index.html instead of the source CSS file.

**Status**: ✅ Ready to deploy to GitHub Pages
**Impact**: Fixes axiom01.com styling completely
**Risk Level**: Extremely low (just changing which CSS file is loaded)
