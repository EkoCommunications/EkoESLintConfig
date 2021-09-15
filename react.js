const ekoRules = [
  // 'base' eko custom rules
  require.resolve('./rules/base'),
  require.resolve('./rules/import'),
  // 'react' eko custom rules
  require.resolve('./rules/react'),
  require.resolve('./rules/jsx-a11y.js'),
];

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', ...ekoRules],
};
