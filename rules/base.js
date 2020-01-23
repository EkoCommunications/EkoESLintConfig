module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  globals: {
    expect: true,
  },
  rules: {
    // Ref: https://eslint.org/docs/rules/no-underscore-dangle
    //
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
        // _id - MongoDB id, convention forced by backend
        allow: ['_id'],
        allowAfterThis: true,
        allowAfterSuper: true,
        // enforceInMethodNames: true, // available in last version
      },
    ],

    // Ref: https://eslint.org/docs/rules/no-unused-expressions
    //
    // Airbnb:
    // 'no-unused-expressions': ['error', {
    //   allowShortCircuit: false,
    //   allowTernary: false,
    //   allowTaggedTemplates: false,
    // }],
    //
    // We re-define the rule as we use short circuit syntax: b && b().
    // Mostly to call disposers of mobx `observe`, `reaction`, `when` etc. Sometimes we define
    // them conditionally and need call on a component unmount if a disposer exist:
    // dispose && dispose();
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // Ref: https://eslint.org/docs/rules/no-prototype-builtins
    //
    // Eslint reasoning: https://github.com/eslint/eslint/issues/7071
    //
    // Airbnb: 'no-prototype-builtins': 'error',
    //
    // Example (if enable):
    // obj.hasOwnProperty(key) => (should be) Object.prototype.hasOwnProperty.call(obj, key)
    //
    // We prefer to get Error and get aware of the wrong usage. It is much better then silently
    // hadle dangerous code.
    'no-prototype-builtins': 'off',

    // Ref: https://eslint.org/docs/rules/consistent-return
    //
    // Airbnb: 'consistent-return': 'error'
    //
    // TODO: Until we decide, do we want to do `return null` explicitly from function or we stick
    // with `return undefined`, we disable this rule.
    'consistent-return': 'off',

    // Ref: https://eslint.org/docs/rules/no-continue
    //
    // Airbnb:
    // 'no-continue': 'error'
    //
    // Airbnb team reasoning: https://github.com/airbnb/javascript/issues/1103
    //
    // Continue can be useful and create clean code in multiple use cases
    // Airbnb doesn't like loops in general, but for certain functions they
    // must be used. Showing errors for creating clean code is bad approach.
    //
    // while (iAmStillProcessing) {
    //   if (iShouldSkipThisLoop) {
    //     continue;
    //   }
    //
    //   ... do lots of other stuff
    //   ...
    // }
    //
    // https://github.com/airbnb/javascript/issues/1103
    'no-continue': 'off',
  },
};
