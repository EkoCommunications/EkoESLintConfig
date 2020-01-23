const t = [require('./index.js')];

module.exports = {
  extends: require.resolve('./index.js'),
  rules: {
    // Forced to disable rule for eslint-config-eko as it behave weird.
    // Somehow it reports all exports across package.
    // Might be removed if we find out that it behave like this everywhere.
    'import/no-unused-modules': 'off',
  },
};
