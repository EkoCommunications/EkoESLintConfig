module.exports = {
  rules: {
    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    //
    // Airbnb:
    // 'import/prefer-default-export': 'error'
    //
    // Allow `export const` without a export default from a module
    // The reason we chose this to be allowed is because we'd like some modules to
    // export only certain functions. Enforcing a `export default` will likely cause
    // more issues and boilerplate code.
    'import/prefer-default-export': 'off',

    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    //
    // Airbnb (will be enabled with major update)
    // 'import/no-unused-modules': ['off', {
    //   ignoreExports: [],
    //   missingExports: true,
    //   unusedExports: true,
    // }],
    //
    // Team decided to enable now to help catch “dead” components.
    // Expecting extra noise from it during development.
    // NOTE: rule does not recognize `module.exports` and can generate extra noise.
    // NOTE2: there is concerns related to performance. eslint-plugin-import team already were
    // fixing it but I starting to notice more time consuming for running eslint
    'import/no-unused-modules': [
      'error',
      {
        missingExports: true,
        unusedExports: true,
      },
    ],

    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    //
    // Airbnb
    // 'import/no-useless-path-segments': ['error', { commonjs: true }],
    //
    // Re-defining airbnb to enable `noUselessIndex` option introduced with
    // eslint-config-import v2.17.0
    'import/no-useless-path-segments': ['error', { commonjs: true, noUselessIndex: true }],
  },
};
