# eslint-config-amity

ESLint config for Amity orgnization.

## Install

```shell
yarn add --dev eslint-config-amity eslint prettier
# npm i --dev eslint-config-amity eslint prettier
```

## Usage

```js
// .eslintrc.js

// for javascript project
{
  "extends": "amity"
}

// for typescript project
{
  "extends": "amity/typescript"
}

// for react project
{
  "extends": "amity/react"
}

```

## Best practice:

### Add `.prettierrc` file at the root of your project

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "all",
  "quoteProps": "as-needed",
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "printWidth": 120
}
```

### For VS code developers, add `.vscode/settings.json` file at the root of your project

```json
// See VS Code settings in https: //code.visualstudio.com/docs/getstarted/settings#_default-settings
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.format.semicolons": "remove"
}
```

### Add package.json `scripts`

```json
"scripts": {
  "lint": "eslint . --ext .js,.ts",
  "lint:fix": "eslint . --ext .js,.ts --fix",
  "prettier": "prettier --write '{src,test}/**/*.{ts,json,md}'"
}
```

### Setup project for auto-linting on commit hooks:

```shell
yarn add --dev husky lint-staged
# npm i --dev husky lint-staged
```

In package.json:

```json
"husky": {
  "hooks": {
    "post-commit": "git update-index --again",
    "pre-commit": "lint-staged",
    "pre-push": "yarn test",
    "commit-msg": "commitlint -c .commitlintrc.json -E HUSKY_GIT_PARAMS"
  }
},
"lint-staged": {
  "*.{ts,js,jsx}": [
    "yarn prettier",
    "yarn lint"
  ],
  "*.{json,md}": [
    "yarn prettier"
  ]
}
```

### Use `commitlint`

```shell
yarn add --dev @commitlint/cli @commitlint/config-angular
# npm i --dev @commitlint/cli @commitlint/config-angular
```

add `.commitlintrc.json` at the root:

```json
{
  "extends": ["@commitlint/config-angular"],
  "rules": {
    "subject-case": [2, "always", ["sentence-case", "start-case", "pascal-case", "upper-case", "lower-case"]],
    "type-enum": [2, "always", ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "sample"]]
  }
}
```

In package.json:

```json
"husky": {
  "hooks": {
    ...
    "commit-msg": "commitlint -c .commitlintrc.json -E HUSKY_GIT_PARAMS"
  }
}
```
