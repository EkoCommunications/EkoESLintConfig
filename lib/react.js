module.exports = {
  plugins: ['react', 'jsx-a11y'],
  extends: ['airbnb', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
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
    'react/forbid-prop-types': 'off',
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: true,
      },
    ],
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
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        // `html` option is a different with airbnb: we need it as we use self closing html tags:
        // <span className="lnr lnr-name" />
        html: true,
      },
    ],
    'react/require-default-props': [
      'warn',
      {
        forbidDefaultForRequired: true,
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/state-in-constructor': 'off',
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-no-useless-fragment': 'error',
  },
};
