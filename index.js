const ekoRules = [
  // 'base' eko custom rules
  require.resolve('./rules/base'),
  require.resolve('./rules/import'),
];

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended', ...ekoRules],
};
