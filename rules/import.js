module.exports = {
  rules: {
    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // Enforces the addition of file extensions when importing.
    'import/extensions': [
      'error',
      'never',
      {
        mp3: 'always',
        mp4: 'always',
        svg: 'always',
        png: 'always',
      },
    ],

    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    // TODO: We should fix this at the webpack level - remove 'ignore' and use 'babel-plugin-root-import'
    'import/no-unresolved': ['error', { ignore: ['^[~]'] }],

    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // Allow `export const` without a export default from a module
    // The reason we chose this to be allowed is because we'd like some modules to
    // export only certain functions. Enforcing a `export default` will likely cause
    // more issues and boilerplate code.
    'import/prefer-default-export': 'off',
  },
};
