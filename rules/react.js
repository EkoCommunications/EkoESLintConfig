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

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    // AirBnB
    // 'react/jsx-sort-props': ['off', {
    //   ignoreCase: true,
    //   callbacksLast: false,
    //   shorthandFirst: false,
    //   shorthandLast: false,
    //   noSortAlphabetically: false,
    //   reservedFirst: true,
    // }],
    // ============
    // Proposed:
    'react/jsx-sort-props': [
      'error',
      {
        // function will be last
        // <Component isABC tel={5555555} onClick={this._handleClick} />
        callbacksLast: true,
        // ignore case when sorting
        ignoreCase: true,
        // Sort according to alphabetical order
        noSortAlphabetically: false,
        // shorthand like boolean prop will be first
        // <Component a b c d="string" e="string" />
        shorthandFirst: true,
        shorthandLast: false,
        // DOM's reserved props will be first
        // <Component className="x" style={} isABC onClick={this._handleClick} />
        reservedFirst: true,
      },
    ],

    // ==========================
    // ! IMPORTANT: CAN'T use --fix *
    // ! Enable with precaution
    // ==========================
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
    // AirBnB
    // 'react/jsx-sort-default-props': ['off', {
    //   ignoreCase: true,
    // }],
    // ============
    // Proposed:
    // In style with sorting component's props
    // 'react/jsx-sort-default-props': [
    //   'error',
    //   {
    //     ignoreCase: true,
    //   },
    // ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    // AirBnB
    // 'react/no-direct-mutation-state': 'off',
    // ============
    // Proposed:
    // Enforce immutability
    'react/no-direct-mutation-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    // AirBnB
    // 'react/forbid-component-props': ['off', { forbid: [] }],
    // ============
    // Default value: className & style
    // Proposed:
    // Enforce styling inside styled-component rather than class
    // We can pass custom props to styled-component and assign logic there
    // Span allowed for our icon set like linear icons but we can also specify the required icon
    // inside styled-component attrs but that means we need to create a lot of icon component.
    // If no additional styling required, using className for span icon probably good enough.
    // Also forbid using "style" as component's props.
    'react/forbid-component-props': [
      'error',
      {
        forbid: [{ propName: 'className', allowedFor: ['span'] }, { propName: 'style' }],
      },
    ],

    // https://eslint.org/docs/rules/max-statements-per-line
    // AirBnB
    // 'max-statements-per-line': ['off', { max: 1 }],
    // ============
    // Proposed:
    // max only 1 statement per line
    // GOOD:
    // if (true) { doThis(); }
    // ERROR:
    // if (true) { doThis(); doThat(); }
    'max-statements-per-line': ['error', { max: 1 }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    // AirBnB
    // 'react/jsx-no-literals': ['off', { noStrings: true }],
    // ============
    // Proposed:
    // Always wrap sting inside literal
    // GOOD:
    // <span>{'Hello'}</span>
    // BAD:
    // <span>Hello</span>
    // WHY: consistency and make it more specific to JSX's literal rather than string literal
    'react/jsx-no-literals': ['error', { noStrings: true }],
  },
};
