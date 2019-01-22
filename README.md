# eslint-config-eko

Defines set of Eko Javascript eslint rules based on [Airbnb](https://github.com/airbnb/javascript) eslint rules extended by [Prettier plugin](https://github.com/prettier/eslint-plugin-prettier).

The package provides 2 sets of rules:
* `eko` - base js rules, import rules
* `eko/react` - `eko`, react rules, jsx-a11y rules

## Pre-installation:

Copy `.prettierrc` file into root of your project. Make sure that you do not change configuration or you will run in a bunch of conflicts between prettier and eslint.

## To install base `eko` rules set:

### 1. Run npm insall for all required packages and `eslint-config-eko`:

`npm i --save-dev eslint prettier eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-config-eko`

### 2. In `.eslintrc.json` extend eko base configuration:

```
{
  "extends": "eko"
}
```

### 3. (if required) To properly support `eslint-plugin-import` please check [resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers) docs.

## To install `eko/react` rules set:

### 1. Follow all previous steps for `eko` base set except:
```
{
  "extends": "eko/react"
}
```

### 2. Run npm insall for all additional packages to support `react` rules set:

`npm i --save-dev eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react`

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

## Thumb ups rules of editing this package subset:

* Make sure that this is not disabled by `eslint-config-prettier`. If you re-enable it then prettier and eslint might run into conflict.
* Provide referrence to documentation.
* Provide Airbnb declaration (and they reasoning).
* Provide explanation why the desicion to alter a rule was made.

## Publish (!!!at first you will need to get access!!!)

At first make sure that you increased version. You can also check last published packages by:
`npm dist-tag list`

To publish
`npm publish .`

To publish `develop`, `test` etc version:
`npm publish . --tag <dist-tag-name>`

For example: `npm publish . --tag develop`
After that you will be able to install `develop` by from a target project:
`npm install eslint-config-eko@develop`

## TODO:
* [GraphQL subset](https://github.com/apollographql/eslint-plugin-graphql)
* [Jest subset](https://github.com/jest-community/eslint-plugin-jest)
* [lodash subset](https://github.com/wix/eslint-plugin-lodash)
* [flowtype subset](https://github.com/gajus/eslint-plugin-flowtype)
* [JSDoc subset](https://github.com/gajus/eslint-plugin-jsdoc)

