# eslint-config-eko

Defines set of Eko Javascript eslint rules based on [Airbnb](https://github.com/airbnb/javascript) eslint rules extended by [Prettier plugin](https://github.com/prettier/eslint-plugin-prettier).

The package provides 2 sets of rules:

- `eko` - base js rules, import rules
- `eko/react` - `eko`, react rules, jsx-a11y rules

## Pre-installation:

Copy `.prettierrc` file into root of your project. Make sure that you do not change configuration or you will run in a bunch of conflicts between prettier and eslint.

## Installation:

### 1. Insall `eslint-config-eko` and peer-dependencies:

(mandatory: base) `npx install-peerdeps --dev eslint-config-eko`
(optional: react) `npm install --save-dev --save-prefix=~ eslint-config-airbnb@18.0.1 eslint-plugin-jsx-a11y@6.2.3 eslint-plugin-react@7.17.0 eslint-plugin-react-hooks@1.7.0`

### 2. In `.eslintrc.json` extend eko configuration:

```
{
  "extends": "eko" - for only base set of rules
  "extends": "eko/react" - for react set of rules
}
```

### 3. (if required) To properly support `eslint-plugin-import` please check [resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers) docs.

## (Recommended) Setup project for auto-linting on commit:

`npm i --save-dev husky lint-staged`

In package.json:

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "linters": {
      "*.{js,jsx}": [
        "eslint --fix",
        "git add --force"
      ],
      "*.{json,md}": [
        "prettier --write",
        "git add --force"
      ]
    }
  },
```

## Hints

### import/no-unresolved and root path synonym

If you want to use root synonyms like:

```
// from
import Example from '../../../some/example.js';

// to
import Example from '~/some/example.js';
```

Run:
`npm i --save-dev babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import`

Add to `.babelrc`:

```
"plugins": [
  [
    "babel-plugin-root-import",
    {
      "rootPathPrefix": "~",
      "rootPathSuffix": "app"
    }
  ]
]
```

Add to `.eslintrc`:

```
  "settings": {
    "import/resolver": "babel-plugin-root-import"
  },
```

## Thumb ups rules of editing this package subset:

- Make sure that this is not disabled by `eslint-config-prettier`. If you re-enable it then prettier and eslint might run into conflict.
- Provide referrence to documentation.
- Provide Airbnb declaration (and they reasoning).
- Provide explanation why the desicion to alter a rule was made.

## TODO:

- [GraphQL subset](https://github.com/apollographql/eslint-plugin-graphql)
- [Jest subset](https://github.com/jest-community/eslint-plugin-jest)
- [lodash subset](https://github.com/wix/eslint-plugin-lodash)
- [flowtype subset](https://github.com/gajus/eslint-plugin-flowtype)
- [JSDoc subset](https://github.com/gajus/eslint-plugin-jsdoc)
  ttps://github.com/wix/eslint-plugin-lodash)
- [flowtype subset](https://github.com/gajus/eslint-plugin-flowtype)
- [JSDoc subset](https://github.com/gajus/eslint-plugin-jsdoc)
