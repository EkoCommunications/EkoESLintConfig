module.exports = {
  plugins: ['react'],
  rules: {
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    //
    // Airbnb:
    // 'react/forbid-prop-types': ['error', {
    //   forbid: ['any', 'array', 'object'],
    //   checkContextTypes: true,
    //   checkChildContextTypes: true,
    // }],
    //
    // TODO: as soon as mobx upgraded to version 5 we should come back to this rule.
    'react/forbid-prop-types': 'off',

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    //
    // Airbnb:
    // 'react/prop-types': ['error', {
    //   ignore: [],
    //   customValidators: [],
    //   skipUndeclared: false
    // }],
    //
    // Considering that a lot of existing components does not have PropTypes we define
    // "skipUndeclared: true" to avoid "dangerous" refactoring.
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: true,
      },
    ],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    //
    // Airbnb: https://github.com/airbnb/javascript/blob/685f37be39fd01bcfdd349de9acdcd5a50414520/packages/eslint-config-airbnb/rules/react.js#L232
    //
    // Decorators do not play any role in ordering and react-eslint team are not planning to
    // change it (what has sense). But we defining 'instance-variables' as first item in the `order`
    // option. It will work for all instance variables (with or without decorators).
    //
    // 3.0.0: New ordering option '/^handle.+$/' added to align with airbnb@18.2.1 update.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-config-airbnb
    'react/sort-comp': [
      'error',
      {
        order: [
          'instance-variables',
          'static-variables',
          'static-methods',
          'lifecycle',
          '/^handle.+$/',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // Restrict file extensions that may contain JSX
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    //
    // Airbnb:
    // 'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    //
    // We re-defined as we use the `.js` extension for JSX files.
    //
    // 3.0.0: Add new option { 'allow': 'as-needed' } as natural useful rule extension.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-react#7-21-0-react-jsx-filename-extension-allow-option
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'], allow: 'as-needed' }],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    //
    // Airbnb:
    // 'react/self-closing-comp': 'error'
    //
    // Re-defined to support the way we use html tags with icons
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        // `html` option is a different with airbnb: we need it as we use self closing html tags:
        // <span className="lnr lnr-name" />
        html: true,
      },
    ],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    //
    // Airbnb:
    // 'react/require-default-props': ['error', {
    //   forbidDefaultForRequired: true,
    // }],
    //
    // Covering whole project with default props is high effort. So it is switched to `warn` to
    // prevent further skipping of default props and enforce refactor existing components.
    'react/require-default-props': [
      'warn',
      {
        forbidDefaultForRequired: true,
      },
    ],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    //
    // Airbnb:
    // 'react/no-array-index-key': 'error',
    //
    // Legacy code heavy use indexes for keys. It is complicated to convert to something else at
    // this point.
    'react/no-array-index-key': 'warn',

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    //
    // Airbnb (since eslint-config-airbnb 17.1.1)
    // before: 'react/no-multi-comp': ['error', { ignoreStateless: true }],
    // after: 'react/no-multi-comp': 'off',
    //
    // Airbnb reasoning: https://github.com/airbnb/javascript/pull/2006
    //
    // We never faced the problem with discouragement as Airbnb team describing.
    // Or we never paid attention to it?
    // After vote team decided to leave rule as it was.
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    //
    // Airbnb (since eslint-config-airbnb 18.0.0)
    // 'react/jsx-props-no-spreading': ['error', {
    //   html: 'enforce',
    //   custom: 'enforce',
    //   exceptions: [],
    // }]
    //
    // Decision is enforced by existing legacy code base.
    // Disabling it to avoid big and bug prone re-writings.
    // TODO: a subject of a future discussion/effort. After all the rule is a good one.
    'react/jsx-props-no-spreading': 'off',

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
    //
    // Airbnb (since eslint-config-airbnb 18.0.0)
    // 'react/jsx-fragments': ['error', 'syntax']
    //
    // Not an unanimous decision: enable but with `element` mode`
    // Reasons: already existing preferences, more consistent.
    'react/jsx-fragments': ['error', 'element'],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    //
    // Airbnb (since eslint-config-airbnb 18.0.0)
    // 'react/state-in-constructor': ['error', 'always']
    //
    // Our current code base is not consistent on this case. Team could not come up with preference.
    // Decided to disable it and continue to use both cases.
    // TODO: a subject of a future discussion/effort.
    'react/state-in-constructor': 'off',

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    //
    // Airbnb
    // 'react/jsx-key': 'off'
    //
    // Good rule. By some reason not enabled by airbnb team.
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    //
    // Airbnb (not covered yet)
    //
    // An unanimous decision to enable.
    'react/jsx-no-useless-fragment': 'error',

    // This option enforces a specific function type for function components.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    //
    // airbnb@18.2.1 (will be enabled with major update)
    // 'react/function-component-definition': ['off', {
    //   namedComponents: 'function-expression',
    //   unnamedComponents: 'function-expression',
    // }],
    //
    // The decision to enable rule chosen by the majority. Each option also chosen by majority.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-react#7-18-0-react-function-component-definition
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // This rule prevents non-stable values (i.e. object identities) from
    // being used as a value for Context.Provider.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    //
    // airbnb@18.2.1 (will be enabled with major update)
    // 'react/jsx-no-constructed-context-values': 'off'
    //
    // The decision to enable rule chosen by the majority.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-react#7-22-0-jsx-no-constructed-context-values
    'react/jsx-no-constructed-context-values': 'error',

    // Prevent usage of unsafe target='_blank'. This rules requires that you accompany
    // target='_blank' attributes with rel='noreferrer'
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    //
    // airbnb@18.2.1
    // 'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }]
    //
    // We redefine the rule to enable new options, not used by AirBnb.
    // These options strengthen the protection and close the vulnerable workarounds.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-react#7-22-0-jsx-no-target-blank-warnonspreadattributes
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-react#7-25-0-jsx-no-target-blank-forms
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always',
        warnOnSpreadAttributes: true,
        links: true,
        forms: true,
      },
    ],

    // Prevent creating unstable components inside components.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    //
    // airbnb@18.2.1 (will be enabled with major update)
    // 'react/no-unstable-nested-components': 'off'
    //
    // The decision to enable rule chosen by the majority with { allowAsProps: true }. The option
    // is enabled to avoid manual refactoring of the existing codebase as it can populate bugs
    // if refactoring is done wrong. It is chosen as more safe path to enable this new rule.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-react#7-23-0-no-unstable-nested-components
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

    // Enforce props alphabetical sorting.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    //
    // airbnb@18.2.1
    // 'react/jsx-sort-props': ['off', {
    //   ignoreCase: true,
    //   callbacksLast: false,
    //   shorthandFirst: false,
    //   shorthandLast: false,
    //   noSortAlphabetically: false,
    //   reservedFirst: true,
    // }],
    //
    // Proposal to enable the rule was supported my majority of the team, with relaxed options:
    // no alphabetical, without restrictions for shorthand props.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/proposals#2
    'react/jsx-sort-props': [
      'error',
      {
        noSortAlphabetically: true,
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
        callbacksLast: true,
      },
    ],

    // Enforce propTypes declarations sorting.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    //
    // airbnb@18.2.1
    // 'react/sort-prop-types': ['off', {
    //   ignoreCase: true,
    //   callbacksLast: false,
    //   requiredFirst: false,
    //   sortShapeProp: true,
    // }],
    //
    // Following decision to enable react/jsx-sort-props, it was decided to enable
    // react/sort-prop-types in the same or the most compatible way as react/jsx-sort-props.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/proposals#3
    'react/sort-prop-types': [
      'error',
      {
        noSortAlphabetically: true,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: false,
        callbacksLast: true,
      },
    ],
  },
};
