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
    // ========== CORE ==========
    // Ref: https://eslint.org/docs/rules/no-underscore-dangle
    // Airbnb:
    // 'no-underscore-dangle': ['error', {
    //   allow: [],
    //   allowAfterThis: false,
    //   allowAfterSuper: false,
    //   enforceInMethodNames: true,
    // }],
    //
    // We use an underscore dangle to mark private and protected variables and methods of a class.
    // Thats why we need `allowAfterThis`, `allowAfterSuper`, `enforceInMethodNames` to be enabled.
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: true,
        allowAfterSuper: true,
        // enforceInMethodNames: true, // available in last version
      },
    ],

    // Ref: https://eslint.org/docs/rules/no-unused-expressions
    // Airbnb:
    // 'no-unused-expressions': ['error', {
    //   allowShortCircuit: false,
    //   allowTernary: false,
    //   allowTaggedTemplates: false,
    // }],
    //
    // We re-define the rule as we use short circuit syntax: b && b().
    // Mostly to call disposers of mobx `observe`, `reaction`, `when` etc. Sometimes we define them conditionally and
    // need call on a component unmount if a disposer exist: dispose && dispose();
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // TODO: come back to it when we start to extend prettier recommended
    // Need to handle a case with Joi Models
    'newline-per-chained-call': 'off',
    // ========== END CORE ==========


    // ========== IMPORT ==========
    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // Enforces the addition of file extensions when importing.
    'import/extensions': [
      'error',
      'never',
      {
        'svg': 'always',
        'png': 'always',
      },
    ],

    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    // TODO: We should fix this at the webpack level - remove 'ignore' and use 'babel-plugin-root-import'
    'import/no-unresolved': ['error', { ignore: ['^[~]'] }],

    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // Allow `export const` without a export default from a module
    // The reason we chose this to be allowed is because we'd like some modules to
    // export only certain functions. Enforcing a `export default` will likely cause
    // more issues and boilerplate code.
    'import/prefer-default-export': 'off',
    // ========== END IMPORT ==========


    // ========== JSX-A11Y ==========
    // Ref: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    // From eslint-plugin-jsx-a11y
    // This rule was deprecated in v6.1.0. It will no longer be maintained.
    // Please use label-has-associated-control instead.
    // But airbnb still describe it
    //  airbnb - 'jsx-a11y/label-has-for': ['error', {
    //   components: [],
    //   required: {
    //     every: ['nesting', 'id'],
    //   },
    //   allowChildren: false,
    // }],
    // We might should just relay on airbnb - we barely use Label + Input as we use antd decorator where they
    // only id to bind label and input (no nesting)
    // We can also redefine rule with 'every: ['id']', (do not require nesting) to be consistent with antd
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: [],
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    // ========== END JSX-A11Y ==========
  },
};
