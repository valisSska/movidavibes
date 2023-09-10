// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'prettier',
    'eslint-config-prettier',
  ],
  // required to lint *.vue files
  plugins: ['html', 'jquery', 'prettier', 'unicorn', 'sonarjs'],
  globals: {
    ga: true, // Google Analytics
    __statics: true,
  },
  // add your custom rules here
  rules: {
    'arrow-parens': [2, 'always'],
    'no-param-reassign': 0,
    'react/prop-types': 0,
    'import/first': 0,
    'sonarjs/cognitive-complexity': 0,
    'unicorn/numeric-separators-style': 0,
    'unicorn/no-array-for-each': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-underscore-dangle': 'off',
    'func-names': ['error', 'never'],
    'sonarjs/no-duplicate-string': 0,
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          e: {
            event: false,
          },
          el: {
            element: false,
          },
          params: {
            parameters: false,
          },
          res: false,
          cmd: {
            command: true,
          },
          errCb: {
            handleError: true,
          },
        },
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 7, consistent: true },
        ObjectPattern: { multiline: true, minProperties: 7, consistent: true },
        ImportDeclaration: { multiline: true, minProperties: 7, consistent: true },
        ExportDeclaration: { multiline: true, minProperties: 7, consistent: true },
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'function-paren-newline': 'off',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
