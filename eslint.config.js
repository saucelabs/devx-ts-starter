const ts = require('typescript-eslint');
const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  ts.configs.eslintRecommended,
  prettier,
  {
    ignores: ['lib/**'],
  },
  {
    languageOptions: {
      globals: {
        console: true,
        exports: true,
        module: true,
        require: true,
      },
    },
  },
];
