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
    // Considering that a lot of existing components does not have proptypes we define
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
    'react/sort-comp': [
      'error',
      {
        order: [
          'instance-variables',
          'static-variables',
          'static-methods',
          'lifecycle',
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

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    //
    // Airbnb:
    // 'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    //
    // Shows an error when we find JSX components outside of the following file extensions
    // Re-defined as we use the `.js` extension for JSX files.
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

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
  },
};
