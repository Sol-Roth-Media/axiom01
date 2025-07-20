#!/usr/bin/env node
/**
 * Axiom01 Design Token Compiler
 * Converts design tokens JSON to CSS custom properties and theme variations
 */

const fs = require('fs');
const path = require('path');

class DesignTokenCompiler {
  constructor(tokenPath = './design-tokens.json') {
    this.tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
    this.output = {
      core: '',
      light: '',
      dark: '',
      forest: '',
      ocean: '',
      sunset: ''
    };
  }

  /**
   * Compile tokens to CSS custom properties
   */
  compile() {
    console.log('🎨 Compiling design tokens to CSS...');

    // Generate core tokens (non-color values)
    this.generateCoreTokens();

    // Generate theme-specific color tokens
    this.generateLightTheme();
    this.generateDarkTheme();
    this.generateForestTheme();
    this.generateOceanTheme();
    this.generateSunsetTheme();

    // Write output files
    this.writeFiles();

    console.log('✅ Design tokens compiled successfully!');
  }

  /**
   * Generate core design tokens (spacing, typography, etc.)
   */
  generateCoreTokens() {
    let css = ':root {\n';

    // Spacing tokens
    Object.entries(this.tokens.spacing).forEach(([key, token]) => {
      css += `  --a-space-${key}: ${token.value};\n`;
    });

    // Typography tokens
    Object.entries(this.tokens.typography.fontFamily).forEach(([key, token]) => {
      css += `  --a-font-${key}: ${token.value};\n`;
    });

    Object.entries(this.tokens.typography.fontSize).forEach(([key, token]) => {
      css += `  --a-size-${key}: ${token.value};\n`;
    });

    Object.entries(this.tokens.typography.fontWeight).forEach(([key, token]) => {
      css += `  --a-font-weight-${key}: ${token.value};\n`;
    });

    Object.entries(this.tokens.typography.lineHeight).forEach(([key, token]) => {
      css += `  --a-line-height-${key}: ${token.value};\n`;
    });

    // Border radius tokens
    Object.entries(this.tokens.radius).forEach(([key, token]) => {
      css += `  --a-radius-${key}: ${token.value};\n`;
    });

    // Shadow tokens
    Object.entries(this.tokens.shadow).forEach(([key, token]) => {
      css += `  --a-shadow-${key}: ${token.value};\n`;
    });

    // Transition tokens
    Object.entries(this.tokens.transition.duration).forEach(([key, token]) => {
      css += `  --a-transition-duration-${key}: ${token.value};\n`;
    });

    Object.entries(this.tokens.transition.easing).forEach(([key, token]) => {
      css += `  --a-transition-easing-${key}: ${token.value};\n`;
    });

    // Combined transition shortcuts
    css += `  --a-transition-default: var(--a-transition-duration-normal) var(--a-transition-easing-default);\n`;
    css += `  --a-transition-fast: var(--a-transition-duration-fast) var(--a-transition-easing-default);\n`;
    css += `  --a-transition-slow: var(--a-transition-duration-slow) var(--a-transition-easing-default);\n`;

    // Breakpoint tokens
    Object.entries(this.tokens.breakpoint).forEach(([key, token]) => {
      css += `  --a-breakpoint-${key}: ${token.value};\n`;
    });

    css += '}\n\n';
    this.output.core = css;
  }

  /**
   * Generate light theme color tokens
   */
  generateLightTheme() {
    let css = ':root, [data-theme="light"] {\n';

    // Base colors
    Object.entries(this.tokens.color.base).forEach(([key, token]) => {
      css += `  --a-color-${key}: ${token.value};\n`;
    });

    // Color palette
    ['neutral', 'primary', 'secondary', 'success', 'warning', 'error', 'info'].forEach(palette => {
      Object.entries(this.tokens.color[palette]).forEach(([shade, token]) => {
        css += `  --a-color-${palette}-${shade}: ${token.value};\n`;
      });
    });

    // Semantic colors for light theme
    css += `  --a-color-text: var(--a-color-neutral-900);\n`;
    css += `  --a-color-text-secondary: var(--a-color-neutral-600);\n`;
    css += `  --a-color-text-muted: var(--a-color-neutral-400);\n`;
    css += `  --a-color-text-disabled: var(--a-color-neutral-300);\n`;
    css += `  --a-color-text-inverse: var(--a-color-white);\n`;
    css += `  --a-color-surface: var(--a-color-white);\n`;
    css += `  --a-color-surface-secondary: var(--a-color-neutral-50);\n`;
    css += `  --a-color-surface-tertiary: var(--a-color-neutral-100);\n`;
    css += `  --a-color-border: var(--a-color-neutral-200);\n`;
    css += `  --a-color-border-secondary: var(--a-color-neutral-100);\n`;
    css += `  --a-color-focus: var(--a-color-primary-500);\n`;

    css += '}\n\n';
    this.output.light = css;
  }

  /**
   * Generate dark theme color tokens
   */
  generateDarkTheme() {
    let css = '@media (prefers-color-scheme: dark) {\n  :root {\n';
    css += this.getDarkThemeColors();
    css += '  }\n}\n\n';

    css += '[data-theme="dark"] {\n';
    css += this.getDarkThemeColors();
    css += '}\n\n';

    this.output.dark = css;
  }

  getDarkThemeColors() {
    let css = '';

    // Inverted semantic colors for dark theme
    css += `    --a-color-text: var(--a-color-neutral-100);\n`;
    css += `    --a-color-text-secondary: var(--a-color-neutral-300);\n`;
    css += `    --a-color-text-muted: var(--a-color-neutral-500);\n`;
    css += `    --a-color-text-disabled: var(--a-color-neutral-600);\n`;
    css += `    --a-color-text-inverse: var(--a-color-neutral-900);\n`;
    css += `    --a-color-surface: var(--a-color-neutral-900);\n`;
    css += `    --a-color-surface-secondary: var(--a-color-neutral-800);\n`;
    css += `    --a-color-surface-tertiary: var(--a-color-neutral-700);\n`;
    css += `    --a-color-border: var(--a-color-neutral-700);\n`;
    css += `    --a-color-border-secondary: var(--a-color-neutral-800);\n`;
    css += `    --a-color-focus: var(--a-color-primary-400);\n`;

    return css;
  }

  /**
   * Generate forest theme (green-based)
   */
  generateForestTheme() {
    let css = '[data-theme="forest"] {\n';

    // Forest theme uses green as primary
    css += `  --a-color-primary-25: #f0fdf4;\n`;
    css += `  --a-color-primary-50: #dcfce7;\n`;
    css += `  --a-color-primary-100: #bbf7d0;\n`;
    css += `  --a-color-primary-200: #86efac;\n`;
    css += `  --a-color-primary-300: #4ade80;\n`;
    css += `  --a-color-primary-400: #22c55e;\n`;
    css += `  --a-color-primary-500: #16a34a;\n`;
    css += `  --a-color-primary-600: #15803d;\n`;
    css += `  --a-color-primary-700: #166534;\n`;
    css += `  --a-color-primary-800: #14532d;\n`;
    css += `  --a-color-primary-900: #052e16;\n`;
    css += `  --a-color-primary-950: #022c22;\n`;

    // Warm earth tones for surfaces
    css += `  --a-color-surface: #fefffe;\n`;
    css += `  --a-color-surface-secondary: #f8faf8;\n`;
    css += `  --a-color-surface-tertiary: #f0f4f0;\n`;
    css += `  --a-color-border: #d4d8d4;\n`;

    css += '}\n\n';
    this.output.forest = css;
  }

  /**
   * Generate ocean theme (blue-based)
   */
  generateOceanTheme() {
    let css = '[data-theme="ocean"] {\n';

    // Ocean theme uses cyan/blue as primary
    css += `  --a-color-primary-25: #f0fdff;\n`;
    css += `  --a-color-primary-50: #e0f7fa;\n`;
    css += `  --a-color-primary-100: #b2ebf2;\n`;
    css += `  --a-color-primary-200: #80deea;\n`;
    css += `  --a-color-primary-300: #4dd0e1;\n`;
    css += `  --a-color-primary-400: #26c6da;\n`;
    css += `  --a-color-primary-500: #00bcd4;\n`;
    css += `  --a-color-primary-600: #00acc1;\n`;
    css += `  --a-color-primary-700: #0097a7;\n`;
    css += `  --a-color-primary-800: #00838f;\n`;
    css += `  --a-color-primary-900: #006064;\n`;
    css += `  --a-color-primary-950: #004d40;\n`;

    // Cool blue-gray surfaces
    css += `  --a-color-surface: #fafcff;\n`;
    css += `  --a-color-surface-secondary: #f0f8ff;\n`;
    css += `  --a-color-surface-tertiary: #e8f4f8;\n`;
    css += `  --a-color-border: #cce7f0;\n`;

    css += '}\n\n';
    this.output.ocean = css;
  }

  /**
   * Generate sunset theme (warm orange-based)
   */
  generateSunsetTheme() {
    let css = '[data-theme="sunset"] {\n';

    // Sunset theme uses warm orange as primary
    css += `  --a-color-primary-25: #fffaf0;\n`;
    css += `  --a-color-primary-50: #fff7ed;\n`;
    css += `  --a-color-primary-100: #ffedd5;\n`;
    css += `  --a-color-primary-200: #fed7aa;\n`;
    css += `  --a-color-primary-300: #fdba74;\n`;
    css += `  --a-color-primary-400: #fb923c;\n`;
    css += `  --a-color-primary-500: #f97316;\n`;
    css += `  --a-color-primary-600: #ea580c;\n`;
    css += `  --a-color-primary-700: #c2410c;\n`;
    css += `  --a-color-primary-800: #9a3412;\n`;
    css += `  --a-color-primary-900: #7c2d12;\n`;
    css += `  --a-color-primary-950: #431407;\n`;

    // Warm surfaces with subtle orange tint
    css += `  --a-color-surface: #fffefb;\n`;
    css += `  --a-color-surface-secondary: #fef9f3;\n`;
    css += `  --a-color-surface-tertiary: #fef3e2;\n`;
    css += `  --a-color-border: #f4d4b8;\n`;

    css += '}\n\n';
    this.output.sunset = css;
  }

  /**
   * Write compiled CSS files
   */
  writeFiles() {
    const outputDir = './css/tokens';

    // Create tokens directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write individual token files
    Object.entries(this.output).forEach(([theme, css]) => {
      if (css) {
        fs.writeFileSync(`${outputDir}/${theme}.css`, css);
        console.log(`✅ Generated ${theme}.css`);
      }
    });

    // Write combined file
    const combined = Object.values(this.output).join('');
    fs.writeFileSync(`${outputDir}/all-themes.css`, combined);
    console.log('✅ Generated all-themes.css');

    // Write individual theme files for easy import
    const themeFiles = {
      'light-theme.css': this.output.core + this.output.light,
      'dark-theme.css': this.output.core + this.output.light + this.output.dark,
      'forest-theme.css': this.output.core + this.output.light + this.output.forest,
      'ocean-theme.css': this.output.core + this.output.light + this.output.ocean,
      'sunset-theme.css': this.output.core + this.output.light + this.output.sunset
    };

    Object.entries(themeFiles).forEach(([filename, css]) => {
      fs.writeFileSync(`${outputDir}/${filename}`, css);
      console.log(`✅ Generated ${filename}`);
    });
  }
}

// Run the compiler if called directly
if (require.main === module) {
  const compiler = new DesignTokenCompiler();
  compiler.compile();
}

module.exports = DesignTokenCompiler;
