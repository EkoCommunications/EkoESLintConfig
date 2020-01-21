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
  },
};
