module.exports = {
  plugins: ['jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Ref: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    //
    // From eslint-plugin-jsx-a11y
    // This rule was deprecated in v6.1.0. It will no longer be maintained.
    // Please use label-has-associated-control instead.
    // But airbnb still describe it
    // Airbnb
    // 'jsx-a11y/label-has-for': ['error', {
    //   components: [],
    //   required: {
    //     every: ['nesting', 'id'],
    //   },
    //   allowChildren: false,
    // }],
    //
    // We might should just relay on airbnb - we barely use Label + Input as we use antd decorator
    // where they only id to bind label and input (no nesting). We can also re-define rule
    // with 'every: ['id']', (do not require nesting) to be consistent with antd.
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
  },
};
