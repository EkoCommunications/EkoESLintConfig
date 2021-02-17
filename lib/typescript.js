module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  ignorePatterns: ['node_modules/**', 'dist/**'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'quote-props': ['error', 'as-needed', { keywords: false }],
    curly: ['error', 'multi-line'],
    'max-classes-per-file': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
  },
};
