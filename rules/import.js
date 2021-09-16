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
    //
    // NOTE: Rule does not recognize `module.exports` and can generate extra noise.
    //       Easiest way to solve - redefine with `ignoreExports: [...folderNames]` option
    //
    // NOTE2: There are concerns related to the performance in the community.
    //        https://github.com/benmosher/eslint-plugin-import/issues/1487
    //        Tests on WebApp show that performance not affected seriously
    //        Without the rule: npm run lint  91.68s user 9.66s system 126% cpu 1:20.22 total
    //        With the rule: npm run lint  95.38s user 9.89s system 125% cpu 1:23.70
    //
    // NOTE3: Rule does not handle:
    //        1) export default from 'Module' - this one is proposal (Stage 1 at the moment).
    //           We use a lot of it.
    //        2) export { default } from 'Module'
    //           link to an issue: https://github.com/benmosher/eslint-plugin-import/issues/1544
    //
    // Considering NOTE3 going to disable the rule for now
    // 'import/no-unused-modules': [
    //   'error',
    //   {
    //     missingExports: true,
    //     unusedExports: true,
    //   },
    // ],

    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    //
    // Airbnb
    // 'import/no-useless-path-segments': ['error', { commonjs: true }],
    //
    // Re-defining airbnb to enable `noUselessIndex` option introduced with
    // eslint-config-import v2.17.0
    'import/no-useless-path-segments': ['error', { commonjs: true, noUselessIndex: true }],

    // Use this rule to prevent importing packages through relative paths.
    // It's useful in Yarn/Lerna workspaces, were it's possible to import a sibling package
    // using ../package relative path, while direct package is the correct one.
    // Ref: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    // 'import/no-relative-packages': 'off'
    //
    // Decision to enable (by the majority, second vote)
    // Even workspaces usage is not a common practice at the moment in the team,
    // the growth of our projects shows that it will be useful in the future.
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-import#2-23-0-no-relative-packages
    'import/no-relative-packages': 'error',

    // Reports the use of import declarations with CommonJS exports in any module
    // except for the main module.
    // Ref: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    //
    // airbnb-base@14.2.1 (will be enabled with major update)
    // 'import/no-import-module-exports': ['off', {
    //   exceptions: [],
    // }],
    //
    // Decision to enable (by the majority, second vote)
    // https://app.gitbook.com/@eko/s/amity-web-team/eslint/update-2021-august/eslint-plugin-import#2-23-0-no-import-module-exports
    'import/no-import-module-exports': ['error', { exceptions: [] }],
  },
};
