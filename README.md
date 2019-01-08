# EkoESLintConfig

## To install:

`npm i --save-dev eslint-config-eko`

In .eslintrc.json:
`
{
  "extends": "eslint-config-eko"
}
`

## Setup project for auto-linting on commit:
`npm i --save-dev husky lint-staged`

In package.json:
`
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
`
