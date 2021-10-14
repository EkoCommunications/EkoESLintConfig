# eslint-config-eko

Defines set of Amity ESLint rules based on [Airbnb](https://github.com/airbnb/javascript) eslint rules extended by [Prettier plugin](https://github.com/prettier/eslint-plugin-prettier).

The package provides 2 sets of rules:

- `eko` - eslint, import rules
- `eko/react` - `eko` + react, react-hook, jsx-a11y rules

## Installation:

### Step 1. Mandatory. Copy this configuration to your `.prettierrc` file:

```json
{
  "tabWidth": 2,
  "printWidth": 100,
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "all",
  "quoteProps": "as-needed",
  "arrowParens": "avoid",
  "embeddedLanguageFormatting": "auto"
}
```

Make sure that you do not change configuration or you will run in a bunch of conflicts between Prettier and ESLint.

### Step 2. Mandatory. To apply base set of rules.

**npm@6**

```
npx install-peerdeps --dev eslint-config-eko@3.0.0 --extra-args "--save-exact"
```

**npm@7**

```
npm install --save-dev --save-exact --save-peer  eslint-config-eko@3.0.0
```

### Step 3. Optional. To apply react extended set of rules

```
npm install --save-dev --save-exact eslint-config-airbnb@18.2.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.25.1 eslint-plugin-react-hooks@4.2.0
```

### Step 4. In `.eslintrc.json` extend eko configuration:

**Only base set of rules**

```json
"extends": ["eko"]
```

**Base + React set of rules**

```json
"extends": ["eko/react"]
```

### Step 5. If required. To properly support `eslint-plugin-import` please check [resolvers](https://github.com/benmosher/eslint-plugin-import#resolvers) docs.

## (Recommended) Setup project for auto-linting on commit:

```
npm i --save-dev husky lint-staged
```

In package.json:

```json
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

### Track performance of individual rules

In case you encounter slow eslint execution on your project try to use
[ESLint built-in CLI method](https://eslint.org/docs/developer-guide/working-with-rules#per-rule-performance)
to track performance of individual rules.

```
TIMING=1 eslint lib
```

### Root path synonym and import/no-unresolved

If you want to use root synonyms like:

```javascript
// from
import Example from '../../../some/example.js';

// to
import Example from '~/some/example.js';
```

#### Option 1

Install eslint-import-resolver-webpack

```
npm install --save-dev eslint-import-resolver-webpack

```

Add this to your webpack configuration:

```javascript
resolve: {
  alias: {
    // pattern
    '~': '<full_path_to_project_folder>',
    // example 1
    '~': path.resolve(process.cwd(), '<project_folder>'),
    // example 2
    '~': path.resolve(__dirname, '<project_folder>'),
  },
},
```

Add this to your eslint configuration:

```javascript
// For more options check https://www.npmjs.com/package/eslint-import-resolver-webpack
settings: {
  'import/resolver': {
    webpack: {
      config: '<path_to_webpack',
    },
  },
},
```

#### Option 2 (deprecated)

Run:

```
npm i --save-dev babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import
```

Add to `.babelrc`:

```json
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

```json
  "settings": {
    "import/resolver": "babel-plugin-root-import"
  },
```

## Thumb ups rules of editing this package subset:

- Make sure that this is not disabled by `eslint-config-prettier`. If you re-enable it then prettier and eslint might run into conflict.
- Provide reference to documentation.
- Provide Airbnb declaration (and they reasoning).
- Provide explanation why the decision to alter a rule was made.

## [CHANGELOG](https://github.com/EkoCommunications/EkoESLintConfig/blob/master/CHANGELOG.md)
