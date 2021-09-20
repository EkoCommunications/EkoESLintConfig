# 3.0.0 / 2021-09 #13

- **[deps]** update: `eslint@7.32.0`, `eslint-config-airbnb-base@14.2.1`, `eslint-config-prettier@8.3.0`, `eslint-plugin-import@2.24.2`, `eslint-plugin-prettier@4.0.0`, `prettier@2.4.0`
- **[deps]** update instructions and support: `eslint-config-airbnb@18.2.1`, `eslint-plugin-jsx-a11y@6.4.1`, `eslint-plugin-react@7.25.1`, `eslint-plugin-react-hooks@4.2.0`

- **[config]** eslint - ecmaVersion: 2021
- **[config]** eslint - enable react hooks
- **[config]** prettier - define `"arrowParens": "avoid"` as default value changed
- **[config]** prettier - new config `"embeddedLanguageFormatting": "auto"`

- **[new rule]** 'default-case-last': 'error'
- **[new rule]** 'no-loss-of-precision': 'error'
- **[new rule]** 'no-promise-executor-return': 'error'
- **[new rule]** 'no-unreachable-loop': ['error', { ignore: [] }]
- **[new rule]** 'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }]
- **[new rule]** 'import/no-relative-packages': 'error'
- **[new rule]** 'import/no-import-module-exports': ['error', { exceptions: [] }]

- **[chore]** initiate CHANGELOG
