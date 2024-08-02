/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  arrowParens: 'avoid',
  jsxSingleQuote: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  endOfLine: 'auto',
}
