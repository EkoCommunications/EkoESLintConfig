module.exports = {
  plugins: ['react'],
  rules: {
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    // Airbnb:
    // 'react/forbid-prop-types': ['error', {
    //   forbid: ['any', 'array', 'object'],
    //   checkContextTypes: true,
    //   checkChildContextTypes: true,
    // }],
    // This must be groomed. I think that we might can leave it disabled.
    // TODO: after mobx update we should update enable this rule (separate PR)
    'react/forbid-prop-types': 'off',

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    // Airbnb:
    // 'react/prop-types': ['error', {
    //   ignore: [],
    //   customValidators: [],
    //   skipUndeclared: false
    // }],
    // Considering that a lot of components does not have proptypes we define 'skipUndeclared': true
    // TODO: Try to find the way to enforce this rule only for exported components.
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: true,
      },
    ],

    // TODO: @jenya @will
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    // Airbnb: https://github.com/airbnb/javascript/blob/685f37be39fd01bcfdd349de9acdcd5a50414520/packages/eslint-config-airbnb/rules/react.js#L232
    // Here this rule is disabled because of decorators issues. It can not recognize @observable etc inside components
    // and throwing errors. We acually need this rule and should find the way to enable it and configure in the way that
    // observables has to be defined always first.
    // After some research it seams that decorators does not play any role in ordering and react-eslint team are not
    // planning to change it (what has sense). But we should define 'instance-variables' as first item in order option
    // TODO: It will work for instance variables (with or without decorators)
    // Now it does not work https://github.com/yannickcr/eslint-plugin-react/issues/599 - lets see how it will behive
    // after we update packages
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
    // Airbnb: 'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    // Shows an error when we find JSX components outside of the following file extensions
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    // Airbnb: 'react/self-closing-comp': 'error',
    // Must not be disabled! We should define additional options:
    // "react/self-closing-comp": ["error", {
    //   "component": true,
    //   "html": true - example for icons <span className="lnr lnr-blah" />
    // }]
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        // diference with default: we need it as we use self closing html tags: <span className="lnr lnr-name" />
        html: true,
      },
    ],

    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
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
    // Airbnb: 'react/no-array-index-key': 'error',
    //
    // Some legacy code heavy use indexes for keys. It is complicated to convert to something else
    // expecially when data is client side derived.
    'react/no-array-index-key': 'warn',
  },
};
