module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['jsx-a11y'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {},
  rules: {
    // TOOD We should fix this at the webpack level
    // Ensures that eslint can find our custom prefix '~'
    'import/no-unresolved': ['error', { ignore: ['^[~]'] }],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // Allow `export const` without a export default from a module
    // The reason we chose this to be allowed is because we'd like some modules to
    // export only certain functions. Enforcing a `export default` will likely cause
    // more issues and boilerplate code
    'import/prefer-default-export': 'off',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    // From eslint-plugin-jsx-a11y
    // This rule was deprecated in v6.1.0. It will no longer be maintained.
    // Please use label-has-associated-control instead.
    // We might should just relay on airbnb - we barely use Label + Input as we use antd decorator where they
    // only id to bind label and input (no nesting)
    // We can also redefine rule with 'every: ['id']', (do not require nesting) to be consistent with antd
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: [],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],

    // must be enabled or at least use 'warn'
    'no-console': 'warn',

    // https://eslint.org/docs/rules/no-unused-expressions
    // const a = b && b()
    // undefined = b && b() We've chosen this one @Jenya @David
    // if (b instanceof Function) b()
    // { test && <Component /> }
    // We need allowShortCircuit: true, as we use b && b() expressins sometimes.
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    // We should enable this rule, but considering that a lot of components now does not have proptypes we can
    // define 'skipUndeclared: false' - switching it to true and enforce proptypes should go as separate PR
    // Maybe only exported components? @will @Jenya
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    // airbnb: 'react/self-closing-comp': 'error',
    // Must not be disabled! We should define additional options:
    'react/self-closing-comp': 'off',

    // https://eslint.org/docs/rules/no-underscore-dangle
    // We need this rule enabled with allowAfterThis: true, because we use underscore for private params and methods
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: true,
        allowAfterSuper: true,
        // enforceInMethodNames: true,
      },
    ],
  },
};
