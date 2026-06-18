```markdown
# Axicons
**The Axiom01 Icon System**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Icons](https://img.shields.io/badge/icons-200-success)
![Style](https://img.shields.io/badge/style-stroke-orange)

Axicons are more than just symbols—they are the foundational building blocks of the Axiom01 design language. Engineered for precision and performance, each of these 200 high-fidelity icons has been meticulously crafted to maintain visual harmony across any interface.

Whether you are building a data-dense dashboard or a minimalist mobile experience, Axicons provide the clarity and consistency your project demands. Standardized, lightweight, and built for the modern web, the Axicon library is the definitive toolkit for developers who refuse to compromise on quality.

## Features
* **Engineered:** Perfectly balanced with a consistent `24x24` viewBox and `2px` stroke weight.
* **Performant:** Optimized SVG architecture injected purely via lightweight JavaScript.
* **Accessible:** Automatically structured with `aria-hidden="true"` for semantic screen-reader compliance.
* **The Axiom Way:** Zero complex BEM classes. Built for native CSS cascading and fluid composition.

---

## 🚀 Quick Start

To use Axicons in your project, simply include the core stylesheet and the render script in your HTML.

### 1. Include the Assets
Place the CSS in your `<head>` and the JS at the bottom of your `<body>`:

```html
<!-- In your <head> -->
<link rel="stylesheet" href="axicons.css">

<!-- At the end of your <body> -->
<script src="axicons.js"></script>
<script>
    // The Render Hook
    document.querySelectorAll('.axicon.render').forEach(el => {
        const name = el.getAttribute('data-name');
        const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
        if (icon) {
            el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
        }
    });
</script>

```

### 2. Render an Icon

To display an icon, use a standard `span` or `div` with the `.axicon` and `.render` classes, and specify the icon via `data-name`:

```html
<span class="axicon render" data-name="Infinity"></span>
<span class="axicon render" data-name="Settings"></span>
<span class="axicon render" data-name="Smile"></span>

```

---

## 🎨 Styling (The Axiom Way)

Axicons avoids messy framework specificity and heavy `block__element--modifier` (BEM) naming conventions. Instead, we embrace the natural CSS cascade.

The base `.axicon` class handles the core SVG properties (`stroke: currentColor`, `fill: none`), meaning the icon will automatically inherit the text color of its parent container.

To customize an icon, simply add your own utility classes:

```html
<!-- HTML Composition -->
<span class="axicon render large accent-blue" data-name="Heart-Eyes"></span>

```

```css
/* Natural CSS Cascading */
.large {
    width: 32px;
    height: 32px;
}

.accent-blue {
    color: #3b82f6;
}

```

---

## 📁 Package Structure

* **`axicons.js`**: The core database. A single lightweight array containing all 200 SVG paths.
* **`axicons.css`**: The base container styles that ensure uniform rendering.
* **`index.html`**: Your visual cheat sheet. A searchable, dynamic dashboard to quickly find icon names and reference IDs.

---

### License

Built and maintained by **Axiom01**.

```

***

This README acts as the perfect front door for any developer picking up your library. It is clean, opinionated, and instantly usable.

**Congratulations on successfully building and launching the Axicons library!** Let me know if you need to build any extra components for Axiom01 next.

```
