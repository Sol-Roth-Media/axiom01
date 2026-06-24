# Axiom01 Release Process Guide

## 🚀 Complete Release Workflow

This guide walks you through releasing a new version of Axiom01 to NPM.

---

## 📋 Pre-Release Checklist

### 1. Cleanup Phase
- [ ] Remove 40+ outdated documentation files
- [ ] Keep only essential documentation
- [ ] Update README.md for NPM

### 2. Version & Metadata
- [ ] Update package.json version
- [ ] Update release-info.json
- [ ] Update CHANGELOG.md

### 3. Quality Assurance
- [ ] Run pre-release audits
- [ ] Run full test suite
- [ ] Build dist files
- [ ] Verify bundle sizes

### 4. Deployment
- [ ] Commit changes to Git
- [ ] Push to GitHub
- [ ] Create GitHub Release
- [ ] Publish to NPM

---

## 📁 Files to Keep

### Essential Documentation (KEEP)
- ✅ README.md - Main documentation for NPM
- ✅ CHANGELOG.md - Version history
- ✅ AXIOM01_STYLING_GUIDE.md - Developer guide
- ✅ DEVELOPER.md - Development setup
- ✅ LICENSE - MIT license
- ✅ package.json - NPM metadata
- ✅ .gitignore - Git configuration
- ✅ .npmignore - NPM file filtering

### Outdated Documentation (DELETE)
- ❌ AGENTS.md - Old session notes
- ❌ *_AUDIT*.md - Outdated audits
- ❌ *_REPORT*.md - Session reports
- ❌ *_CHECKLIST*.md - Old checklists
- ❌ *_COMPLETE*.md - Completed tasks
- ❌ SESSION_*.md - Session documentation
- ❌ *.html (diagnostic/test files)
- ❌ PHASE_*.md - Old phase plans
- ❌ PRIORITY_*.md - Old priority lists
- ❌ REFACTOR_*.md - Old refactoring docs
- ❌ NEXT_PHASE_*.md - Old plans
- ❌ RELEASE_*.md - Old release info
- ❌ And 20+ more...

---

## ✅ Version Number Schema

Current: **v2.1.1** → Next: **v2.1.2** (patch release)

### When to use which:
- **Major (2.0.0 → 3.0.0)** - Breaking changes
- **Minor (2.1.0 → 2.2.0)** - New features, backwards compatible
- **Patch (2.1.1 → 2.1.2)** - Bug fixes, no new features

This is a **PATCH** release (cleanup + minor improvements)

---

## 📄 NPM README Content

The README should include:
- ✅ Quick intro (what is Axiom01)
- ✅ Key features (components, animations, accessibility)
- ✅ Installation instructions (3 methods: CDN, npm, yarn)
- ✅ Quick start examples
- ✅ Bundle size info
- ✅ Browser support
- ✅ Links to documentation
- ✅ License information

---

## 🔄 Release Steps

### 1. Cleanup
```bash
cd /Users/solroth/Sites/axiom01
# Delete 40+ outdated files
```

### 2. Update Metadata
```bash
# Edit package.json - version: 2.1.1 → 2.1.2
# Edit CHANGELOG.md - add new release info
# Edit release-info.json - update timestamp
```

### 3. Build
```bash
npm run build
npm run test
```

### 4. Commit & Push
```bash
git add .
git commit -m "Release v2.1.2: Cleanup and improvements"
git push origin main
```

### 5. GitHub Release
Create release on GitHub with tag v2.1.2

### 6. NPM Publish
```bash
npm publish
```

---

## 📦 Files Published to NPM

From `package.json` files array:
- css/axiom.css
- css/axiom.min.css
- css/_variables.css
- css/_animations.css
- css/_utilities.css
- css/_components.css
- css/axiom_config.css
- js/axiom.min.js
- README.md
- CHANGELOG.md
- LICENSE

---

## 🎯 Success Criteria

- [ ] 40+ outdated files deleted
- [ ] README.md updated and comprehensive
- [ ] CHANGELOG.md has new entry
- [ ] package.json updated to 2.1.2
- [ ] Release notes created on GitHub
- [ ] NPM package published
- [ ] npm info axiom01 shows v2.1.2
- [ ] CDN URL works

---

## 📞 Verification

After publishing:

```bash
# Check NPM
npm info axiom01

# Check CDN
curl https://unpkg.com/axiom01@2.1.2/css/axiom.min.css

# Install locally to test
npm install axiom01@2.1.2
```

---

## 🚨 Rollback (if needed)

```bash
# Unpublish from NPM
npm unpublish axiom01@2.1.2

# Revert Git
git revert HEAD
git push origin main
```

---

**Ready to start the release?** Follow the steps in order below.
