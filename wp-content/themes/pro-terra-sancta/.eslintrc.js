module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true,
  },
  extends: [
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
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
    'import/first': 0,
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
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 5, consistent: true },
        ObjectPattern: { multiline: true, minProperties: 5, consistent: true },
        ImportDeclaration: { multiline: true, minProperties: 5, consistent: true },
        ExportDeclaration: { multiline: true, minProperties: 5, consistent: true },
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
