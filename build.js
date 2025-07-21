const fs = require('fs').promises;
const path = require('path');
const esbuild = require('esbuild');
const CleanCSS = require('clean-css');
const terser = require('terser');

const DIST_DIR = 'dist';
const CSS_DIR = path.join(DIST_DIR, 'css');
const JS_DIR = path.join(DIST_DIR, 'js');

async function build() {
    try {
        console.log('Starting Axiom build process...');

        // 1. Clean and create dist directories
        await fs.rm(DIST_DIR, { recursive: true, force: true });
        await fs.mkdir(CSS_DIR, { recursive: true });
        await fs.mkdir(JS_DIR, { recursive: true });
        console.log('Cleaned and created dist directories.');

        // 2. Build CSS
        console.log('Building CSS...');
        const cssFiles = [
            'css/base/_reset.css',
            'css/base/_axiom_reset.css',
            'css/base/axiom_vars.css',
            'css/base/colors_vars.css',
            'css/base/axiom_config.css',
            'css/base/colors.css',
            'css/axiom.css'
        ];

        const cssContents = await Promise.all(cssFiles.map(file => fs.readFile(file, 'utf-8')));
        const concatenatedCss = cssContents.join('\n');
        await fs.writeFile(path.join(CSS_DIR, 'axiom.css'), concatenatedCss);
        console.log('Concatenated CSS files into dist/css/axiom.css.');

        const minifiedCss = new CleanCSS().minify(concatenatedCss).styles;
        await fs.writeFile(path.join(CSS_DIR, 'axiom.min.css'), minifiedCss);
        console.log('Minified CSS to dist/css/axiom.min.css.');

        // 3. Build JavaScript
        console.log('Building JavaScript...');
        await esbuild.build({
            entryPoints: ['js/axiom.js'],
            bundle: true,
            outfile: path.join(JS_DIR, 'axiom.js'),
            format: 'esm',
        });
        console.log('Bundled JavaScript files into dist/js/axiom.js.');

        const bundledJs = await fs.readFile(path.join(JS_DIR, 'axiom.js'), 'utf-8');
        const minifiedJs = await terser.minify(bundledJs, {
            module: true,
            mangle: {
                toplevel: true,
            },
        });
        await fs.writeFile(path.join(JS_DIR, 'axiom.min.js'), minifiedJs.code);
        console.log('Minified JavaScript to dist/js/axiom.min.js.');

        console.log('Axiom build process completed successfully!');

    } catch (error) {
        console.error('Axiom build failed:', error);
        process.exit(1);
    }
}

build();