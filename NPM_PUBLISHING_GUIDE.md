# Publishing Axiom01 to npm

## ⚠️ CRITICAL: npm 2FA Setup (Required for Publishing)

If your npm account has **2FA enabled** (recommended for security), you **CANNOT use `npm login`** for publishing. You must use a **Granular Access Token**.

### If you get: "E403 Two-factor authentication required to publish"

**Follow these steps:**

1. **Log in to npm.js**
   - Go to: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Replace YOUR_USERNAME with your actual npm username

2. **Generate Granular Access Token**
   - Click "Generate New Token"
   - Select: **Granular Access Token** (NOT Classic Token)

3. **Configure Token**
   - Expiration: 30 days (or your preference)
   - Allow access to: "Only select packages and scopes"
   - Select package: **axiom01**
   - Package access: **Read and write**
   - ✅ **CRITICAL: Enable checkbox "Allow bypass for publishing with 2FA"**

4. **Copy Token Immediately**
   - The token appears only ONCE
   - Format: `npm_xxxxxxxxxxxxx...`
   - Save it somewhere safe temporarily

5. **Authenticate Locally**
   ```bash
   npm set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE
   ```
   - Replace YOUR_TOKEN_HERE with the token from step 4
   - This saves to `~/.npmrc` (do NOT commit this file!)

6. **Verify Authentication**
   ```bash
   cat ~/.npmrc
   # Should show: //registry.npmjs.org/:_authToken=npm_...
   ```

### Why Granular Tokens?

✓ **More secure** than classic tokens  
✓ **Scoped** to specific packages  
✓ **Revocable** immediately  
✓ **Expiration dates** for time-limited access  
✓ **Can bypass 2FA** for CI/CD automation  
✓ **Granular permissions** (read-only or read-write)

### Security Best Practices

**DO:**
- ✅ Use granular tokens
- ✅ Set expiration dates
- ✅ Scope to specific packages
- ✅ Revoke old tokens
- ✅ Use environment variables in CI/CD

**DON'T:**
- ❌ Commit `.npmrc` to git
- ❌ Share tokens with anyone
- ❌ Use tokens in public logs
- ❌ Use `npm login` in CI/CD
- ❌ Use classic tokens (they're less secure)

---

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

# 6. Token is set up (run once per machine)
cat ~/.npmrc | grep authToken
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

### 3. Verify Authentication

Make sure your granular access token is set:

```bash
cat ~/.npmrc
# Should output: //registry.npmjs.org/:_authToken=npm_...

# If not set:
npm set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE
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
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
+ axiom01@2.0.0
```

### 5. Verify Publication

```bash
# Check it's available
npm view axiom01

# Check latest version
npm view axiom01@latest

# Check on npm website
# https://www.npmjs.com/package/axiom01

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

### "E403 403 Forbidden - Two-factor authentication required"
- Your npm account has 2FA enabled
- You must use a **Granular Access Token**, not `npm login`
- See **CRITICAL: npm 2FA Setup** section above
- Set token: `npm set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE`

### "E403 403 Forbidden - You do not have permission to publish"
- You're not the package owner
- Check that you're logged in as the correct npm user: `npm whoami`
- Verify the package exists: `npm view axiom01`
- Contact package owner if needed

### "Package not found after publishing"
- npm registry takes 5-10 minutes to sync
- Try: `npm search axiom01`
- Check CDN cache: https://unpkg.com/axiom01@latest/

### "Need to unpublish a version"
```bash
# Unpublish specific version
npm unpublish axiom01@2.0.0

# Only works within 72 hours of publish
# Contact npm support for older versions
```

### "Update package details (no re-publish needed)"
- Edit package.json
- Run: `npm publish` (will update metadata only)

## Accessing Published Packages

### From npm registry
- https://www.npmjs.com/package/axiom01

### From CDN
- https://unpkg.com/axiom01@2.0.0/css/axiom.min.css
- https://unpkg.com/axiom01@2.0.0/js/axiom.min.js
- https://cdn.jsdelivr.net/npm/axiom01@2.0.0/css/axiom.min.css

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

## Automated Publishing (CI/CD)

For GitHub Actions or other CI/CD, use the token via environment variable:

```yaml
# .github/workflows/publish.yml
- name: Publish to npm
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
  run: npm publish
```

1. Add secret to GitHub: `Settings → Secrets → NPM_TOKEN`
2. Value: Your granular access token
3. GitHub Actions will use it automatically

## Questions?

- npm docs: https://docs.npmjs.com/
- npm CLI reference: https://docs.npmjs.com/cli/
- Axiom01 repo: https://github.com/Sol-Roth-Media/axiom01
- npm Support: https://support.npmjs.com/
