# Release Sync Guide - How to Update Axiom01

## Quick Reference

When releasing a new version (e.g., v2.0.1), only update **one file**:

### File: `release-info.json`

```json
{
  "version": "2.0.1",
  "releaseDate": "2025-01-25",
  "releaseDateFormatted": "January 25, 2025"
}
```

Everything else updates automatically!

---

## Step-by-Step Release Process

### 1. Update Version in Package
```bash
# Edit package.json
npm version patch  # or minor/major
```

### 2. Update Release Info
```bash
# Edit release-info.json ONLY
{
  "version": "2.0.1",
  "releaseDate": "2025-01-25",
  "releaseDateFormatted": "January 25, 2025",
  "bundle": {
    "css": { "sizeGzipped": "~40 KB" },
    "js": { "sizeGzipped": "~8 KB" }
  },
  "features": {
    "components": 6,
    "designTokens": 50,
    "animations": 20
  }
}
```

### 3. Commit & Push
```bash
git add package.json release-info.json
git commit -m "chore: Release v2.0.1"
git tag v2.0.1
git push origin main v2.0.1
```

### 4. Verify Updates
- Landing page (axiom01.com) auto-updates via release-loader.js
- README displays current version in npm package
- npm page shows latest release date
- All displays sync automatically

---

## What Updates Automatically

When you update `release-info.json`:

✅ **Landing Page** (axiom01.com):
  - Hero version display
  - Release date
  - Bundle sizes
  - Feature counts

✅ **npm Package** (npmjs.com/package/axiom01):
  - README version (via git sync)
  - Package metadata

✅ **Documentation**:
  - All pages referencing version
  - Release date stamps
  - Feature counts

---

## Fields You Can Update

### Required
- `version` - e.g., "2.0.1"
- `releaseDate` - ISO format: "2025-01-25"
- `releaseDateFormatted` - Display format: "January 25, 2025"

### Optional (as needed)
- `bundle.css.sizeGzipped` - CSS size
- `bundle.js.sizeGzipped` - JS size
- `features.components` - Number of components
- `features.designTokens` - Number of tokens
- `features.animations` - Number of animations
- `highlights` - List of new features/highlights

---

## Example: v2.1.0 Release

If adding new components (Button groups) and features:

```json
{
  "version": "2.1.0",
  "releaseDate": "2025-02-15",
  "releaseDateFormatted": "February 15, 2025",
  "features": {
    "components": 7,  // +1 (Button Groups)
    "designTokens": 55,  // +5 (new theme tokens)
    "animations": 25  // +5 (new animations)
  },
  "highlights": [
    "New: Button Groups component",
    "New: 5 animation variations",
    "Improved: Dark mode transitions",
    "Fixed: Accessibility on mobile"
  ]
}
```

Then commit and everything syncs!

---

## Troubleshooting

### Landing page still shows old version
1. Hard refresh: `Ctrl+Shift+R` (Chrome) or `Cmd+Shift+R` (Mac)
2. Check browser console for errors
3. Verify `release-info.json` exists and is valid JSON
4. Check that `js/release-loader.js` is loaded

### npm package doesn't update
1. Version must be in `package.json`
2. Push changes to GitHub
3. npm syncs from GitHub (may take 5-10 minutes)

### New fields aren't showing
1. Add the ID to HTML first: `<span id="feature-name">default</span>`
2. Add the update logic to `js/release-loader.js`
3. Add the field to `release-info.json`

---

## File Locations

- Release metadata: `/release-info.json`
- Auto-sync script: `/js/release-loader.js`
- Landing page: `/index.html`
- Package config: `/package.json`

---

## Next Steps (One File!)

1. Make your code changes
2. Update `release-info.json` (ONE file)
3. Commit and push
4. **Everything syncs automatically** ✅

No more hunting through multiple files to update versions!
