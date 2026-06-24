# Axiom01 v2.1.2 Release Guide

## ✅ Pre-Release Checklist

- [x] Version updated to 2.1.2 in `package.json`
- [x] README.md updated with v2.1.2 info
- [x] CSS 404 issues fixed (GitHub Pages)
- [x] Content updated on main and gh-pages
- [x] All tests passing
- [x] Build complete and verified

---

## 📋 Step 1: Create & Push Git Tag

### Create the tag locally
```bash
cd /Users/solroth/Sites/axiom01
git tag -a v2.1.2 -m "Release v2.1.2: Fixed CSS 404 errors on GitHub Pages, updated content"
```

### Verify the tag
```bash
git tag -l
git show v2.1.2  # View tag details
```

### Push tag to GitHub
```bash
git push origin v2.1.2
```

### Verify on GitHub
Visit: https://github.com/Sol-Roth-Media/axiom01/releases
- Should show v2.1.2 tag
- Click "Create release from tag" if needed

---

## 📦 Step 2: Publish to NPM

### Prerequisites
- Make sure you're logged in to NPM
- Check npm credentials are valid

### Login to NPM (if needed)
```bash
npm login
# Enter username, password, and 2FA code when prompted
```

### Verify package contents
```bash
npm pack --dry-run
# Shows what will be published
```

### Publish to NPM
```bash
npm publish
```

### Verify publication
```bash
npm info axiom01
# Should show v2.1.2 as latest

# Or check on web
# https://www.npmjs.com/package/axiom01
```

### Check CDN availability
```bash
curl https://unpkg.com/axiom01@2.1.2/package.json
curl https://unpkg.com/axiom01@2.1.2/css/axiom.min.css
```

---

## 🔍 Step 3: Verify Release

### Local verification
```bash
cd /Users/solroth/Sites/axiom01

# Check version
cat package.json | grep version
# Expected: "version": "2.1.2"

# Check README
head -1 README.md
# Expected: # Axiom01 v2.1.2

# Check git tag
git tag -l | grep 2.1.2
# Expected: v2.1.2
```

### NPM registry verification
```bash
# Check package on NPM
npm view axiom01

# Check specific version
npm view axiom01@2.1.2

# Search NPM
npm search axiom01
```

### GitHub verification
```bash
# Verify tag pushed
git ls-remote --tags origin | grep 2.1.2

# Visit GitHub Releases page
# https://github.com/Sol-Roth-Media/axiom01/releases
```

### Website verification
```bash
# axiom01.com should be live (if deployed to gh-pages)
# https://axiom01.com

# Check for CSS 404 errors in console
# F12 > Console tab - should have NO 404s
```

---

## 📝 What's Included in v2.1.2

### Fixed Issues
- ✅ GitHub Pages CSS 404 errors (inlined all CSS partials)
- ✅ Unified CSS build process
- ✅ Cache-buster added to CSS link
- ✅ Updated content and branding

### Files in Release
- `css/axiom.min.css` - Minified unified CSS (156 KB, no @import)
- `js/axiom.min.js` - Minified JavaScript (13 KB)
- `README.md` - Complete documentation
- `package.json` - v2.1.2
- Full source code and components

### Bundle Sizes
- CSS: 156 KB minified, ~19 KB gzipped
- JS: 13 KB minified, ~2.5 KB gzipped
- Total: 169 KB minified, ~21.5 KB gzipped

---

## 🚀 Quick Release Commands (All-in-One)

```bash
cd /Users/solroth/Sites/axiom01

# 1. Create and push git tag
git tag -a v2.1.2 -m "Release v2.1.2: Fixed CSS 404 errors, updated content"
git push origin v2.1.2

# 2. Verify tag
git show v2.1.2

# 3. Publish to NPM
npm publish

# 4. Verify on NPM
npm info axiom01
npm view axiom01@2.1.2

# 5. Check CDN
curl https://unpkg.com/axiom01@2.1.2/css/axiom.min.css | head -c 100
```

---

## 🔗 Release Links

After publishing, these will be live:

**NPM Package**
- Package page: https://www.npmjs.com/package/axiom01
- v2.1.2 page: https://www.npmjs.com/package/axiom01/v/2.1.2

**GitHub**
- Releases page: https://github.com/Sol-Roth-Media/axiom01/releases
- Tag: https://github.com/Sol-Roth-Media/axiom01/releases/tag/v2.1.2

**CDN (unpkg)**
- CSS: https://unpkg.com/axiom01@2.1.2/css/axiom.min.css
- JS: https://unpkg.com/axiom01@2.1.2/js/axiom.min.js
- Package: https://unpkg.com/axiom01@2.1.2/

**Website**
- Live site: https://axiom01.com

---

## 📞 Troubleshooting

### Tag already exists
```bash
git tag -d v2.1.2           # Delete local tag
git push origin :v2.1.2     # Delete remote tag
git tag -a v2.1.2 -m "..."  # Recreate tag
git push origin v2.1.2      # Push new tag
```

### NPM publish fails
```bash
# Check if logged in
npm whoami

# Login again
npm logout
npm login

# Verify package
npm pack --dry-run

# Publish with verbose output
npm publish --verbose
```

### Version mismatch
```bash
# Check all version references
grep -r "2.1.2" . --include="*.json" --include="*.md"

# Update if needed
# - package.json
# - package-lock.json (runs `npm install`)
# - README.md
```

---

## ✅ Release Checklist (Final)

Before clicking publish:

- [ ] Version is 2.1.2 in package.json
- [ ] README mentions v2.1.2
- [ ] Git tag v2.1.2 created locally
- [ ] All files committed to main
- [ ] Build successful (`npm run build`)
- [ ] No uncommitted changes (`git status`)
- [ ] Logged into NPM (`npm whoami`)
- [ ] Ready to publish (`npm pack --dry-run`)

---

## 🎉 After Release

1. **Announce the release**
   - GitHub Releases page
   - NPM package page
   - Twitter/social media
   - Documentation updates

2. **Monitor**
   - NPM download stats
   - GitHub stars/issues
   - Website analytics

3. **Next version planning**
   - Collect feedback
   - Plan features for v2.2.0

---

**Ready to release? Run the commands above! 🚀**
