
const esbuild = require('esbuild');
const path = require('path');

const entryPoint = path.join(__dirname, 'js', 'axiom.js');
const outputFile = path.join(__dirname, 'dist', 'axiom.js');

esbuild.build({
  entryPoints: [entryPoint],
  outfile: outputFile,
  bundle: true,
  minify: true,
  sourcemap: true,
  format: 'esm',
  target: ['es2020']
}).catch(() => process.exit(1));
