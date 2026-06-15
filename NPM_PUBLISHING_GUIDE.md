# Publishing Axiom01 to npm

## Pre-Publication Checklist

Before publishing a new version to npm, verify:

```bash
# 1. All tests pass
npm test

# 2. Build completes successfully
npm run build

# 3. Philosophy audit passes
npm run audit:philosophy

# 4. Version bumped in package.json
cat package.json | grep version

# 5. Changes committed to git
git status
```

## Publishing Steps

### 1. Prepare Your Local Environment

```bash
# Ensure you're on the main branch
git checkout main
git pull origin main

# Install dependencies (if needed)
npm install

# Run full test suite
npm test
```

### 2. Update Version (if needed)

Edit `package.json` and update the version following semantic versioning:
- `patch` (2.0.1): Bug fixes
- `minor` (2.1.0): New features, non-breaking changes
- `major` (3.0.0): Breaking changes

```bash
# Option 1: Manual edit
nano package.json  # Edit version field

# Option 2: npm version helper (requires git in correct state)
npm version patch   # or minor, or major
```

### 3. Authenticate with npm

First time only:

```bash
npm adduser
```

This prompts for:
- npm username
- Password
- Email address
- One-Time Password (if 2FA enabled)

Or if already authenticated:

```bash
npm login
```

Verify authentication:

```bash
npm whoami
```

### 4. Publish to npm

```bash
# Dry run (show what would be published)
npm publish --dry-run

# Actual publish
npm publish
```

Expected output:
```
npm notice 📦  axiom01@2.0.0
npm notice Packfile contents
npm notice ...
npm notice 📦  axiom01@2.0.0
npm notice === Tarball Details ===
npm notice name:          axiom01
npm notice version:       2.0.0
npm notice package size:  XXX kB
npm notice unpacked size: XXX kB
+ axiom01@2.0.0
```

### 5. Verify Publication

```bash
# Check it's available
npm view axiom01

# Check latest version
npm view axiom01@latest

# Install from npm to verify
npm install axiom01@2.0.0
```

### 6. Update Git Tags

```bash
# Create git tag
git tag v2.0.0

# Push tag to GitHub
git push origin v2.0.0

# View tags
git tag -l
```

### 7. Create GitHub Release

1. Go to https://github.com/Sol-Roth-Media/axiom01/releases
2. Click "Draft a new release"
3. Select tag: `v2.0.0`
4. Title: `Axiom01 v2.0.0`
5. Description: Copy from CHANGELOG.md
6. Click "Publish release"

## Installation for Users

Once published, users can install with:

```bash
# Latest version
npm install axiom01

# Specific version
npm install axiom01@2.0.0

# In package.json
{
  "dependencies": {
    "axiom01": "^2.0.0"
  }
}
```

## Usage After Installation

```html
<!-- In your HTML -->
<link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
<script src="node_modules/axiom01/js/axiom.min.js"></script>
```

Or with a bundler (webpack, vite, etc.):

```javascript
import 'axiom01/css/axiom.min.css';
import axiom from 'axiom01/js/axiom.min.js';
```

## Troubleshooting

### "403 Forbidden" error
- Verify you're logged in: `npm whoami`
- Check npm token: `npm token list`
- May need to wait a few minutes if recently created account

### Package not found after publishing
- npm registry takes 5-10 minutes to sync
- Try: `npm search axiom01`
- Check CDN cache: https://unpkg.com/axiom01@latest/

### Need to unpublish a version
```bash
# Unpublish specific version
npm unpublish axiom01@2.0.0

# Only works within 72 hours of publish
# Contact npm support for older versions
```

### Update package details (no re-publish needed)
- Edit package.json
- Run: `npm publish` (will update metadata only)

## Accessing Published Packages

### From npm registry
- https://www.npmjs.com/package/axiom01

### From CDN
- https://unpkg.com/axiom01@2.0.0/css/axiom.min.css
- https://unpkg.com/axiom01@2.0.0/js/axiom.min.js

### Version history
- https://www.npmjs.com/package/axiom01?activeTab=versions

## Files Included in npm Package

Only files listed in `package.json` `"files"` array are published:

```json
"files": [
  "css/axiom.css",
  "css/axiom.min.css",
  "css/_variables.css",
  "css/_animations.css",
  "css/_utilities.css",
  "css/_components.css",
  "css/axiom_config.css",
  "js/axiom.min.js",
  "README.md",
  "CHANGELOG.md",
  "LICENSE"
]
```

Files excluded via `.npmignore`:
- `scripts/`
- `starter-themes/`
- `src/`
- `docs/`
- `.github/`
- etc.

## Automated Publishing (Optional)

Set up GitHub Actions to automatically publish on release:

See `.github/workflows/publish.yml` (if available)

## Questions?

- npm docs: https://docs.npmjs.com/
- npm CLI reference: https://docs.npmjs.com/cli/
- Axiom01 repo: https://github.com/Sol-Roth-Media/axiom01
