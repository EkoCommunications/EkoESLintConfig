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
    // That's why we need `allowAfterThis`, `allowAfterSuper`, `enforceInMethodNames` to be enabled.
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
    // Mostly to call disposers of MobX `observe`, `reaction`, `when` etc. Sometimes we define
    // them conditionally and need to call when component unmounts (if a disposer exist):
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
    // handle dangerous code.
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

    // Ref: https://eslint.org/docs/rules/require-atomic-updates
    //
    // Airbnb (will be enabled with major update)
    // 'require-atomic-updates': 'off'
    //
    // Enabling it ahead. Rule provide good protection for specific edge case.
    'require-atomic-updates': 'error',

    // Ref: https://eslint.org/docs/rules/no-import-assign
    //
    // Airbnb (will be enabled with major update)
    // 'no-import-assign': 'off'
    //
    // Enabling it ahead.
    'no-import-assign': 'error',

    // Ref: https://eslint.org/docs/rules/prefer-regex-literals
    //
    // Airbnb (will be enabled with major update)
    // 'prefer-regex-literals': 'off'
    //
    // Not an unanimous decision. Decided to enable at this moment and look how it will affect
    // code base.
    'prefer-regex-literals': 'error',

    // Ref: https://eslint.org/docs/rules/default-param-last
    //
    // Airbnb (will be enabled with major update)
    // 'default-param-last': 'off'
    //
    // An unanimous decision. Better to enable it sooner.
    'default-param-last': 'error',

    // Ref: https://eslint.org/docs/rules/grouped-accessor-pairs
    //
    // Airbnb
    // 'grouped-accessor-pairs': 'off'
    //
    // Overall airbnb guide does not approve usage of getters and setters.
    // They will probably not enable it.
    // We are using getters and setters. Having consistent order will be nice.
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

    // Ref: https://eslint.org/docs/rules/no-constructor-return
    //
    // Airbnb (will be enabled with major update)
    // 'no-constructor-return': 'off'
    //
    // An unanimous decision.
    'no-constructor-return': 'error',

    // Ref: https://eslint.org/docs/rules/no-setter-return
    //
    // Airbnb (will be enabled with major update)
    // 'no-setter-return': 'off',
    //
    // An unanimous decision.
    'no-setter-return': 'error',

    // Ref: https://eslint.org/docs/rules/no-dupe-else-if
    //
    // Airbnb (will be enabled with major update)
    // 'no-dupe-else-if': 'off'
    //
    // An unanimous decision.
    'no-dupe-else-if': 'error',

    // Ref: https://eslint.org/docs/rules/prefer-exponentiation-operator
    //
    // Airbnb (will be enabled with major update)
    // 'prefer-exponentiation-operator': 'off'
    //
    // Infix notation is considered to be more readable and thus more preferable than
    // the function notation.
    // Not an unanimous decision.
    'prefer-exponentiation-operator': 'error',

    // This rule enforces default clauses in switch statements to be last.
    // Ref: https://eslint.org/docs/rules/default-case-last
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    // 'default-case-last': 'off'
    //
    // Decision to enable (by the majority)
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint#eslint-7-0-0-default-case-last
    'default-case-last': 'error',

    // This rule would disallow the use of number literals that immediately lose precision
    // at runtime when converted to a JS Number due to 64-bit floating-point rounding.
    // Ref: https://eslint.org/docs/rules/no-loss-of-precision
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    // 'no-loss-of-precision': 'off'
    //
    // Decision to enable (by the majority)
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint#eslint-7-1-0-no-loss-of-precision
    'no-loss-of-precision': 'error',

    // This rule disallows returning values from Promise executor functions.
    // Only return without a value is allowed, as it's a control flow statement.
    // Ref: https://eslint.org/docs/rules/no-promise-executor-return
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    // 'no-promise-executor-return': 'off'
    //
    // Decision to enable (by the majority)
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint#eslint-7-3-0-no-promise-executor-return
    'no-promise-executor-return': 'error',

    // This rule aims to detect and disallow loops that can have at most one iteration,
    // by performing static code path analysis on loop bodies.
    // Ref: https://eslint.org/docs/rules/no-unreachable-loop
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    // 'no-unreachable-loop': ['off', {
    //   // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    //   ignore: [],
    // }]
    //
    // Decision to enable and apply to all loops (by the majority)
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint#eslint-7-3-0-no-unreachable-loop
    'no-unreachable-loop': ['error', { ignore: [] }],

    //
    // Ref:
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    //
    //
    // Decision to enable (by the majority)
    //

    //
    // Ref:
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    //
    //
    // Decision to enable (by the majority)
    //

    //
    // Ref:
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    //
    //
    // Decision to enable (by the majority)
    //

    //
    // Ref:
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    //
    //
    // Decision to enable (by the majority)
    //

    //
    // Ref:
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    //
    //
    // Decision to enable (by the majority)
    //

    //
    // Ref:
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    //
    //
    // Decision to enable (by the majority)
    //

    //
    // Ref:
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    //
    //
    // Decision to enable (by the majority)
    //
  },
};
