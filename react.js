const ekoRules = [
  require.resolve('./rules/base'),
  require.resolve('./rules/import'),
  require.resolve('./rules/react'),
  require.resolve('./rules/jsx-a11y.js'),
];

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react', ...ekoRules],
};
