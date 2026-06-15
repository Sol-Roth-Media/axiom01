# Axiom01 v2.0.0 - Complete Reference & Quick Start

## 🎉 PUBLISHED TO npm! ✅

```bash
npm install axiom01
```

**Links:**
- npm: https://www.npmjs.com/package/axiom01
- GitHub: https://github.com/Sol-Roth-Media/axiom01
- CDN: https://unpkg.com/axiom01@2.0.0/

---

## 📚 Key Documentation Files

These files are IN THIS REPO and document everything you need to know:

### For Publishing (npm)
- **NPM_PUBLISHING_GUIDE.md** ← READ THIS FIRST for future releases
  - Complete 2FA setup instructions
  - Step-by-step publishing process
  - Troubleshooting guide
  - Security best practices

- **NPM_PUBLICATION_SUCCESS.md**
  - Publication success details
  - Package metadata
  - Access points and CDN links
  - Quality metrics

### For Development
- **AXIOM01_STYLING_GUIDE.md** ← Philosophy and best practices
- **docs/COMPONENTS.md** ← Component API reference
- **docs/UTILITIES.md** ← Utilities reference
- **docs/ANIMATIONS.md** ← Animation guide
- **docs/tokens/VARIABLES.md** ← Design tokens

### For Project Status
- **PRIORITY_1_2_3_COMPLETE.md** ← Session summary
- **CHANGELOG.md** ← Version history

---

## 🚀 Publishing Future Versions (Quick Reference)

### Prerequisites (One-time setup)
```bash
# Your npm token is already set in ~/.npmrc
# Verify it:
cat ~/.npmrc
# Should show: //registry.npmjs.org/:_authToken=npm_...
```

### To Publish a New Version

```bash
cd /Users/solroth/Sites/axiom01

# 1. Update version in package.json
nano package.json  # Change version number

# 2. Run all tests
npm test           # Must pass all 9 audits

# 3. Build
npm run build

# 4. Commit
git add -A
git commit -m "chore: Bump version to X.X.X"

# 5. Tag
git tag vX.X.X
git push origin vX.X.X

# 6. Publish (your token is already configured)
npm publish

# 7. Verify
npm view axiom01@X.X.X

# 8. Create GitHub Release
# Go to: https://github.com/Sol-Roth-Media/axiom01/releases
```

That's it! Your npm token is already set up with 2FA bypass.

---

## 🔑 npm 2FA Setup (For Reference)

If you need to regenerate the token or set it up on another machine:

```bash
# 1. Go to: https://www.npmjs.com/settings/solomonrothman/tokens

# 2. Create Granular Access Token:
#    - Type: Granular Access Token
#    - Expiration: 30 days
#    - Package: axiom01
#    - Access: Read and write
#    - ✅ Enable: "Allow bypass for publishing with 2FA"

# 3. Copy token (appears once!)

# 4. Set locally:
npm set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE

# 5. Verify:
cat ~/.npmrc
npm whoami
```

---

## 📦 Package Information

**Name:** axiom01  
**Version:** 2.0.0  
**License:** MIT  
**Author:** Sol Roth Media  

**Installation Methods:**
```bash
npm install axiom01
yarn add axiom01
pnpm add axiom01
```

**CDN Links:**
```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/axiom01@2.0.0/css/axiom.min.css">
<script src="https://unpkg.com/axiom01@2.0.0/js/axiom.min.js"></script>

<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01@2.0.0/css/axiom.min.css">
```

---

## ✨ What's in v2.0.0

✅ **Semantic-First Framework**
- No BEM naming
- Clean HTML structure
- One class per component

✅ **Professional Design System**
- 50+ design tokens
- Complete color system
- Responsive spacing scale
- Dark mode support

✅ **Production-Ready Components**
- Button, Card, Badge, Alert, Tag, Link
- 6 component systems
- WCAG 2.1 Level AA accessible

✅ **Animation System**
- 20+ GPU-accelerated keyframes
- Respects `prefers-reduced-motion`
- Smooth transitions

✅ **100+ Utilities**
- Optional (components-first approach)
- Design token-based
- Responsive breakpoints

✅ **Zero Dependencies**
- Pure CSS and vanilla JS
- Works everywhere
- Framework-agnostic

---

## 🧪 Quality Gates

All 9 npm audit scripts pass:

```bash
npm test
```

✅ All tests passing
✅ Zero BEM violations
✅ Zero external dependencies
✅ WCAG 2.1 AA compliant
✅ 88 files accessibility verified

---

## 📁 Project Structure

```
/Users/solroth/Sites/axiom01/
├── css/
│   ├── axiom.css
│   ├── axiom.min.css       ← Production build
│   ├── _variables.css
│   ├── _animations.css
│   ├── _utilities.css
│   └── _components.css
├── js/
│   └── axiom.min.js        ← Component loader
├── docs/
│   ├── COMPONENTS.md
│   ├── UTILITIES.md
│   ├── ANIMATIONS.md
│   └── tokens/VARIABLES.md
├── scripts/
│   ├── sync_drupal_starter_assets.py (syncs to dbase)
│   └── (9 audit scripts)
├── starter-themes/axiom01/ (Drupal theme)
├── package.json            ← npm config
├── .npmignore              ← Package optimization
├── NPM_PUBLISHING_GUIDE.md ← 2FA & publishing
├── NPM_PUBLICATION_SUCCESS.md
├── AXIOM01_STYLING_GUIDE.md
├── README.md
└── CHANGELOG.md
```

---

## 🔗 Related Projects

### Dbase (Drupal 11 Starter)
- Location: `/Users/solroth/Sites/dbase`
- Synced with Axiom01 v2.0.0
- Sync script: `/scripts/sync-drupal-theme.sh`

### Google Gemini Gems
- Gem #1: Axiom01 UI Expert (ready to create)
- Gem #2: Dbase Drupal Starter (ready to create)
- Config file: `/Users/solroth/Sites/GOOGLE_GEMINI_GEMS_SETUP.md`

---

## 🎯 Next Priorities (When Ready)

**Priority 4 (MEDIUM - 20-30 min)**: GitHub Actions CI/CD
- Auto-test on every push
- Auto-publish on release

**Priority 5 (LOW - 45-60 min)**: v1→v2 Migration Guide
- Breaking changes (none!)
- New features
- Upgrade checklist

**Priority 6 (LOW - 30-40 min)**: Bundle Size Tracking
- Track CSS/JS size
- Add GitHub badges

---

## 💡 Quick Tips

### To check if npm token is working:
```bash
npm whoami
# Should show: solomonrothman

cat ~/.npmrc
# Should show token set
```

### To search for the package:
```bash
npm search axiom01
```

### To view package metadata:
```bash
npm view axiom01@latest
```

### To dry-run publishing:
```bash
npm publish --dry-run
```

### To check unpkg CDN:
```bash
# Visit in browser:
https://unpkg.com/axiom01@latest/css/axiom.min.css
```

---

## 🔒 Security Notes

✅ DO:
- Use granular access tokens
- Set expiration dates
- Scope tokens to specific packages
- Revoke old tokens
- Use environment variables in CI/CD

❌ DON'T:
- Commit `.npmrc` to git
- Share tokens
- Use classic tokens
- Use `npm login` in CI/CD
- Use tokens in public logs

---

## 📞 Support

**npm Package:** https://www.npmjs.com/package/axiom01  
**GitHub Issues:** https://github.com/Sol-Roth-Media/axiom01/issues  
**GitHub Discussions:** https://github.com/Sol-Roth-Media/axiom01/discussions

---

**Status:** ✅ Published to npm v2.0.0  
**Last Updated:** January 20, 2025  
**Ready for:** Production use
