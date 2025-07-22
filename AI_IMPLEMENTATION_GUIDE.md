# Axiom01 AI Implementation Guide
*Condensed instructions for AI systems building sites with Axiom01*

## 🚨 CRITICAL COMPLIANCE RULES

### **NO BEM CLASSES - EVER**
- ❌ NEVER use `__` or `--` in class names
- ❌ NO `card__header`, `button--large`, `nav__item`
- ✅ USE single semantic classes: `card`, `button large`, `nav`

### **MINIMAL CLASS USAGE**
- ✅ ONE class per component root: `<article class="card">`
- ✅ Variants as separate classes: `<button class="primary large">`
- ❌ NO utility stacking: `<div class="flex justify-center items-center">`

## 📋 SEMANTIC HTML STRUCTURE

### **Use Proper Elements**
```html
✅ CORRECT:
<article class="card">
  <header><h3>Title</h3></header>
  <main><p>Content</p></main>
  <footer><button class="primary">Action</button></footer>
</article>

❌ WRONG:
<div class="card">
  <div class="card-header"><h3>Title</h3></div>
  <div class="card-body"><p>Content</p></div>
  <div class="card-footer"><button>Action</button></div>
</div>
```

## 🎯 REAL WORLD EXAMPLE: AUDIO BOOK GENERATOR

### **CORRECT Implementation**
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Book Generator</title>
    <link rel="stylesheet" href="http://localhost:8000/css/axiom.css">
</head>
<body class="axiom-body">
    <!-- Navigation -->
    <nav>
        <div>
            <a href="/" class="brand">AudioBook AI</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/library">Library</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
            <div class="actions">
                <button class="secondary">Login</button>
            </div>
        </div>
    </nav>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div>
                <h1>Generate Audio Books with AI</h1>
                <p>Transform any text into professional audio books using advanced AI voices.</p>
                <div class="actions">
                    <button class="primary large">Start Creating</button>
                    <button class="secondary large">View Examples</button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section>
            <div class="container">
                <header>
                    <h2>Why Choose Our AI Audio Books?</h2>
                    <p>Professional quality audio generation with natural-sounding voices.</p>
                </header>
                
                <div class="cards">
                    <article class="card">
                        <header>
                            <i class="fas fa-microphone" aria-hidden="true"></i>
                            <h3>Natural Voices</h3>
                            <p>AI voices that sound human and engaging</p>
                        </header>
                        <main>
                            <p>Choose from dozens of professional voice actors powered by advanced neural networks.</p>
                        </main>
                        <footer>
                            <button class="primary">Try Voices</button>
                        </footer>
                    </article>

                    <article class="card">
                        <header>
                            <i class="fas fa-clock" aria-hidden="true"></i>
                            <h3>Fast Generation</h3>
                            <p>Books ready in minutes, not hours</p>
                        </header>
                        <main>
                            <p>Our optimized AI pipeline processes text to speech up to 10x faster than competitors.</p>
                        </main>
                        <footer>
                            <button class="primary">Start Now</button>
                        </footer>
                    </article>

                    <article class="card">
                        <header>
                            <i class="fas fa-download" aria-hidden="true"></i>
                            <h3>Multiple Formats</h3>
                            <p>Export to MP3, WAV, or streaming</p>
                        </header>
                        <main>
                            <p>Compatible with all major audiobook platforms and devices.</p>
                        </main>
                        <footer>
                            <button class="primary">Learn More</button>
                        </footer>
                    </article>
                </div>
            </div>
        </section>

        <!-- Generation Form -->
        <section>
            <div class="container">
                <article class="card elevated">
                    <header>
                        <h2>Create Your Audio Book</h2>
                        <p>Upload text or paste content to get started</p>
                    </header>
                    <main>
                        <form>
                            <div>
                                <label for="book-title">Book Title</label>
                                <input type="text" id="book-title" placeholder="Enter your book title" required>
                            </div>
                            
                            <div>
                                <label for="voice-select">Choose Voice</label>
                                <select id="voice-select">
                                    <option>Sarah - Professional Female</option>
                                    <option>David - Warm Male</option>
                                    <option>Emma - Energetic Female</option>
                                </select>
                            </div>
                            
                            <div>
                                <label for="book-content">Book Content</label>
                                <textarea id="book-content" rows="10" placeholder="Paste your text content here..." required></textarea>
                            </div>
                        </form>
                    </main>
                    <footer>
                        <button type="submit" class="primary large">Generate Audio Book</button>
                        <button type="button" class="secondary">Save Draft</button>
                    </footer>
                </article>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div>
                <h4>AudioBook AI</h4>
                <p>Professional AI-powered audio book generation</p>
            </div>
            <div>
                <h5>Product</h5>
                <ul>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/api">API</a></li>
                </ul>
            </div>
        </div>
    </footer>

    <!-- Essential Scripts -->
    <script src="http://localhost:8000/js/axiom.js"></script>
</body>
</html>
```

### **WRONG Implementation (What NOT to Do)**
```html
❌ NEVER DO THIS:
<div class="container-fluid px-4 py-3">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow-lg border-0">
                <div class="card-header bg-primary text-white py-3">
                    <h3 class="card-title mb-0 fw-bold">Audio Book Generator</h3>
                    <p class="card-subtitle text-light">AI-powered content creation</p>
                </div>
                <div class="card-body p-4">
                    <form class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Title:</label>
                            <input class="form-control form-control-lg border-2" type="text">
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary btn-lg px-4 me-md-2">Generate</button>
                            <button class="btn btn-outline-secondary btn-lg px-4">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 🚨 COMMON MISTAKES TO AVOID

### **1. Bootstrap/Utility Classes**
```html
❌ WRONG: <div class="d-flex justify-content-center align-items-center">
✅ CORRECT: <div class="hero"> <!-- Axiom handles centering -->
```

### **2. Complex Class Structures**
```html
❌ WRONG: <div class="card card-elevated card-shadow-lg border-primary">
✅ CORRECT: <article class="card elevated">
```

### **3. Missing Semantic Structure**
```html
❌ WRONG: <div class="form-container">
✅ CORRECT: <section> or <main> or <article>
```

### **4. Inline Styles**
```html
❌ WRONG: <div style="padding: 20px; margin: 10px;">
✅ CORRECT: Use Axiom's spacing system automatically
```

## 📐 LAYOUT PRINCIPLES

### **Container System**
```html
<section>
    <div class="container"> <!-- Max-width container with padding -->
        <!-- Content here -->
    </div>
</section>
```

### **Grid System**
```html
<div class="grid"> <!-- Responsive auto-fit grid -->
    <article class="card">Card 1</article>
    <article class="card">Card 2</article>
    <article class="card">Card 3</article>
</div>
```

## 🎨 DESIGN TOKENS (MANDATORY USAGE)

### **Required CSS Link**
```html
<link rel="stylesheet" href="http://localhost:8000/css/axiom.css">
<!-- OR if using from axiom site -->
<link rel="stylesheet" href="../css/axiom.css">
```

### **Essential Body Class**
```html
<body class="axiom-body">
    <!-- Provides proper padding-top for fixed nav -->
```

### **Theme Support**
```html
<html lang="en" data-theme="light"> <!-- or data-theme="dark" -->
```

## ⚡ INTERACTIVE COMPONENTS

### **Dropdown Menus**
```html
<div class="dropdown" data-component="dropdown">
    <button>Options <i class="fas fa-chevron-down"></i></button>
    <ul>
        <li role="menuitem" tabindex="0">Option 1</li>
        <li role="menuitem" tabindex="0">Option 2</li>
    </ul>
</div>
```

### **Modal Dialogs**
```html
<div class="modal" id="my-modal" data-component="modal">
    <dialog>
        <header>
            <h3>Dialog Title</h3>
            <button class="close" aria-label="Close">×</button>
        </header>
        <main>
            <p>Dialog content goes here</p>
        </main>
        <footer>
            <button class="primary">Confirm</button>
            <button class="secondary">Cancel</button>
        </footer>
    </dialog>
</div>
```

### **Tabs**
```html
<div class="tabs" data-component="tabs">
    <nav role="tablist">
        <button role="tab" aria-selected="true">Tab 1</button>
        <button role="tab">Tab 2</button>
    </nav>
    <div role="tabpanel">Content for tab 1</div>
    <div role="tabpanel" hidden>Content for tab 2</div>
</div>
```

## ✅ SUCCESS CHECKLIST

Before deploying any Axiom site, verify:

- [ ] **CSS linked correctly**: `<link rel="stylesheet" href="path/to/axiom.css">`
- [ ] **Body class applied**: `<body class="axiom-body">`
- [ ] **Semantic HTML used**: `<nav>`, `<main>`, `<article>`, `<section>`
- [ ] **No BEM classes**: No `__` or `--` in class names
- [ ] **Minimal classes**: One class per component, variants as separate classes
- [ ] **Cards structured properly**: `<article class="card">` with `<header>`, `<main>`, `<footer>`
- [ ] **Forms are accessible**: Labels, proper input types, error handling
- [ ] **Navigation is semantic**: `<nav>` with proper structure
- [ ] **Buttons use variants**: `primary`, `secondary`, `large`, etc.
- [ ] **No inline styles**: Let Axiom handle all styling
- [ ] **Theme attribute set**: `data-theme="light"` on `<html>`

## 🔧 DEBUGGING TIPS

### **Common Issues**
1. **Styles not applying**: Check CSS link path
2. **Layout broken**: Ensure `axiom-body` class on `<body>`
3. **Cards not styled**: Use `<article class="card">` with semantic structure
4. **Spacing wrong**: Don't use custom CSS, trust Axiom's spacing system
5. **Components not interactive**: Include `axiom.js` script

### **Quick Fixes**
- Always use the exact HTML structure shown in examples
- Never override Axiom styles with custom CSS
- Always include the `data-component` attribute for interactive elements
- Use semantic HTML elements, not generic `<div>` tags

## 🎯 STEP-BY-STEP IMPLEMENTATION PROCESS

### **STEP 1: Base HTML Template (MANDATORY)**
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Site Title</title>
    <!-- REQUIRED: Link to Axiom CSS -->
    <link rel="stylesheet" href="http://localhost:8000/css/axiom.css">
</head>
<body class="axiom-body">
    <!-- REQUIRED: Use semantic navigation -->
    <nav>
        <div>
            <a href="/" class="brand">Site Name</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <div class="actions">
                <button class="secondary">Login</button>
            </div>
        </div>
    </nav>

    <!-- REQUIRED: Main content wrapper -->
    <main>
        <!-- Your content sections go here -->
    </main>

    <!-- REQUIRED: Semantic footer -->
    <footer>
        <div class="container">
            <p>© 2024 Your Site Name</p>
        </div>
    </footer>

    <!-- REQUIRED: Include Axiom JavaScript -->
    <script src="http://localhost:8000/js/axiom.js"></script>
</body>
</html>
```

### **STEP 2: Hero Section (MANDATORY for Landing Pages)**
```html
<section class="hero">
    <div>
        <h1>Your Main Headline</h1>
        <p>Your compelling description goes here. Keep it concise and engaging.</p>
        <div class="actions">
            <button class="primary large">Primary Action</button>
            <button class="secondary large">Secondary Action</button>
        </div>
    </div>
</section>
```

### **STEP 3: Content Sections with Cards**
```html
<section>
    <div class="container">
        <header>
            <h2>Section Title</h2>
            <p>Optional section description</p>
        </header>
        
        <!-- CRITICAL: Use cards container for grid layout -->
        <div class="cards">
            <article class="card">
                <header>
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <h3>Feature Title</h3>
                    <p>Brief feature description</p>
                </header>
                <main>
                    <p>Detailed explanation of the feature or content.</p>
                </main>
                <footer>
                    <button class="primary">Action Button</button>
                </footer>
            </article>
            
            <!-- Repeat card structure for each item -->
            <article class="card">
                <header>
                    <i class="fas fa-rocket" aria-hidden="true"></i>
                    <h3>Another Feature</h3>
                    <p>Another description</p>
                </header>
                <main>
                    <p>More detailed content here.</p>
                </main>
                <footer>
                    <button class="primary">Learn More</button>
                </footer>
            </article>
        </div>
    </div>
</section>
```

### **STEP 4: Forms (When Needed)**
```html
<section>
    <div class="container">
        <article class="card elevated">
            <header>
                <h2>Form Title</h2>
                <p>Form description</p>
            </header>
            <main>
                <form>
                    <div>
                        <label for="input-id">Input Label</label>
                        <input type="text" id="input-id" placeholder="Placeholder text" required>
                    </div>
                    
                    <div>
                        <label for="select-id">Select Label</label>
                        <select id="select-id">
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="textarea-id">Textarea Label</label>
                        <textarea id="textarea-id" rows="5" placeholder="Enter text..."></textarea>
                    </div>
                </form>
            </main>
            <footer>
                <button type="submit" class="primary large">Submit Form</button>
                <button type="button" class="secondary">Cancel</button>
            </footer>
        </article>
    </div>
</section>
```

## ⚠️ CRITICAL REQUIREMENTS CHECKLIST

**Before writing ANY HTML, verify:**

### **CSS & JavaScript Links**
- [ ] `<link rel="stylesheet" href="http://localhost:8000/css/axiom.css">` in `<head>`
- [ ] `<script src="http://localhost:8000/js/axiom.js"></script>` before `</body>`
- [ ] `<body class="axiom-body">` - THIS IS MANDATORY
- [ ] `data-theme="light"` on `<html>` element

### **Semantic Structure Requirements**
- [ ] Use `<nav>` for navigation with `.brand` and `<ul>` structure
- [ ] Use `<main>` to wrap all primary content
- [ ] Use `<section>` for each content area
- [ ] Use `<article class="card">` for card components
- [ ] Use `<header>`, `<main>`, `<footer>` inside cards
- [ ] Use proper heading hierarchy (`h1` → `h2` → `h3`)

### **Layout Requirements**
- [ ] Use `<div class="container">` inside sections for max-width
- [ ] Use `<div class="cards">` to create responsive card grids
- [ ] Use `<div class="actions">` for button groups
- [ ] Never use `<div class="row">`, `<div class="col-*">`, or Bootstrap classes

### **Component Requirements**
- [ ] Cards must use: `<article class="card">`
- [ ] Buttons must use variants: `class="primary"`, `class="secondary"`
- [ ] Icons must have `aria-hidden="true"`
- [ ] Forms must have proper `<label for="id">` associations

## 🚫 ABSOLUTE PROHIBITIONS

### **NEVER USE THESE PATTERNS:**
```html
<!-- FORBIDDEN CLASS PATTERNS -->
❌ <div class="container-fluid">
❌ <div class="row justify-content-center">
❌ <div class="col-md-6">
❌ <div class="d-flex align-items-center">
❌ <button class="btn btn-primary">
❌ <div class="card-header">
❌ <div class="form-group">
❌ <input class="form-control">

<!-- FORBIDDEN ELEMENTS -->
❌ <div class="nav">  <!-- Use <nav> -->
❌ <div class="main"> <!-- Use <main> -->
❌ <div class="card"> <!-- Use <article class="card"> -->
❌ <span class="button"> <!-- Use <button> -->
```

### **NEVER USE INLINE STYLES:**
```html
❌ <div style="margin: 20px; padding: 10px;">
❌ <p style="color: blue; font-size: 18px;">
❌ <button style="background: red;">
```

## 📋 MANDATORY ELEMENT PATTERNS

### **Navigation - EXACT Structure Required**
```html
<nav>
    <div>
        <a href="/" class="brand">Brand Name</a>
        <ul>
            <li><a href="/page1">Page 1</a></li>
            <li><a href="/page2">Page 2</a></li>
        </ul>
        <div class="actions">
            <button class="secondary">Login</button>
            <button class="primary">Sign Up</button>
        </div>
    </div>
</nav>
```

### **Hero Section - EXACT Structure Required**
```html
<section class="hero">
    <div>
        <h1>Main Headline</h1>
        <p>Supporting text that explains the value proposition.</p>
        <div class="actions">
            <button class="primary large">Primary CTA</button>
            <button class="secondary large">Secondary CTA</button>
        </div>
    </div>
</section>
```

### **Card Grid - EXACT Structure Required**
```html
<section>
    <div class="container">
        <header>
            <h2>Section Heading</h2>
            <p>Optional section description</p>
        </header>
        <div class="cards">
            <article class="card">
                <header>
                    <i class="fas fa-icon-name" aria-hidden="true"></i>
                    <h3>Card Title</h3>
                    <p>Card subtitle or brief description</p>
                </header>
                <main>
                    <p>Main card content goes here. Can be multiple paragraphs.</p>
                </main>
                <footer>
                    <button class="primary">Action</button>
                </footer>
            </article>
        </div>
    </div>
</section>
```

## 🎨 VISUAL DESIGN PRINCIPLES

### **Typography Hierarchy (Automatic)**
- `<h1>` - Page title, 3.8rem, black weight
- `<h2>` - Section titles, 2.5rem, bold weight  
- `<h3>` - Card titles, 1.5rem, bold weight
- `<p>` - Body text, 1rem, normal weight
- Card subtitles automatically styled lighter

### **Color Usage (Automatic)**
- Primary color applied to buttons, links, icons
- Surface colors for backgrounds automatically applied
- Text colors automatically contrast-adjusted
- Hover states automatically generated

### **Spacing (Automatic)**
- Sections have consistent vertical spacing
- Cards have proper internal padding
- Button groups have appropriate gaps
- Container margins set automatically

## 🔧 TROUBLESHOOTING GUIDE

### **If Site Looks Broken:**
1. **Check CSS link**: Must be `href="http://localhost:8000/css/axiom.css"`
2. **Check body class**: Must be `<body class="axiom-body">`
3. **Check card structure**: Must be `<article class="card">` with semantic children
4. **Check container usage**: Use `<div class="container">` inside sections

### **If Cards Don't Display:**
- Verify: `<article class="card">` (not `<div class="card">`)
- Verify: `<div class="cards">` wrapper for grid layout
- Verify: Proper `<header>`, `<main>`, `<footer>` structure inside cards

### **If Buttons Look Wrong:**
- Use: `<button class="primary">` or `<button class="secondary">`
- Never: `<div class="button">` or `<span class="btn">`
- For large buttons: `<button class="primary large">`

### **If Navigation Broken:**
- Must use: `<nav>` element
- Must include: `.brand` class on logo/title link
- Must include: `<ul><li><a>` structure for links
- Must include: `.actions` div for buttons

## 🚀 SUCCESS VALIDATION

**Your site is correctly implemented if:**
- [ ] Looks professional and polished immediately
- [ ] Cards display in responsive grid with proper spacing
- [ ] Hero section is centered with gradient background
- [ ] Navigation has proper spacing and hover effects
- [ ] Buttons have primary/secondary styling with hover effects
- [ ] All text is properly sized and spaced
- [ ] Icons display in primary color
- [ ] Form inputs have proper styling
- [ ] No custom CSS needed for basic styling
- [ ] Mobile responsive automatically

**If any of these fail, review the exact HTML patterns above.**
