// ==============================================================================
// ==============================================================================
// TODO: Enable when moved to prettier-eslint package instead of current config
// "prettier-eslint" package ensure this flow:
// Code => prettier => eslint => formatted code
// So there will be no more conflict
// NOTE: This is how VSCode do the formatting when enabling prettier
// integration with eslint as formatting rule. And the code will more likely looks
// much better and closer to AirBnB style guideline
// ==============================================================================
// ==============================================================================

const TODO = {
  // TODO: +++++++ 1 +++++++++
  // https://eslint.org/docs/rules/array-element-newline
  // AirBnB
  // 'array-element-newline': ['off', { multiline: true, minItems: 3 }],
  // ============
  // Proposed:
  // 'array-element-newline': ['error', 'consistent', { multiline: true, minItems: 3 }],

  // TODO: +++++++ 2 +++++++++
  // require multiline ternary
  // https://eslint.org/docs/rules/multiline-ternary
  // AirBnB
  // 'multiline-ternary': ['off', 'never'],
  // ============
  // Proposed:
  // 'multiline-ternary': ['error', 'always-multiline'],

  // TODO: +++++++ 3 +++++++++
  // https://eslint.org/docs/rules/object-curly-newline
  // AirBnB
  // 'object-curly-newline': [
  //   'error',
  //   {
  //     ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
  //     ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
  //     ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  //     ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  //   },
  // ],
  // ============
  // Proposed:
  // Ensure object doesn't being squeezed into 1 line of code
  // 'object-curly-newline': [
  //   'error',
  //   {
  //     ObjectExpression: { minProperties: 2, multiline: true, consistent: true },
  //     ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
  //     ImportDeclaration: { minProperties: 2, multiline: true, consistent: true },
  //     ExportDeclaration: { minProperties: 2, multiline: true, consistent: true },
  //   },
  // ],

  // TODO: +++++++ 4 +++++++++
  // https://github.com/airbnb/javascript#whitespace--implicit-arrow-linebreak
  // Not Found in AirBnB rules
  // Proposed:
  // To better align arrow function body
  // 'implicit-arrow-linebreak': 'error',

  // TODO: +++++++ 5 +++++++++
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  // AirBnB
  // 'react/jsx-max-props-per-line': [
  //   'error',
  //   {
  //     maximum: 1,
  //     when: 'multiline',
  //   },
  // ],
  //
  // Set to "always" so that new props will always on new line if there are more than 1 prop
  // BAD:
  // <Component isSingle life={isProgrammer ? undefined : 'hard'} />
  // GOOD:
  // <Component
  //   isSingle
  //   life={isProgrammer ? undefined : 'hard'}
  // />
  // 'react/jsx-max-props-per-line': [
  //   'error',
  //   {
  //     maximum: 1,
  //     when: 'always',
  //   },
  // ],
};
