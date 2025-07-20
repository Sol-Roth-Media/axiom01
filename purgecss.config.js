module.exports = {
  content: [
    '*.html',
    'components/*.html',
    'axiom-docs-site/**/*.html',
    'axiom01-site/**/*.html',
    'js/**/*.js'
  ],
  css: ['css/**/*.css'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: [
    // Preserve dynamic classes
    /^theme-/,
    /^color-/,
    /^size-/,
    /^variant-/,
    // Preserve state classes
    /^is-/,
    /^has-/,
    /^active$/,
    /^open$/,
    /^closed$/,
    // Preserve component states
    /alert/,
    /modal/,
    /drawer/,
    /notification/
  ]
};

