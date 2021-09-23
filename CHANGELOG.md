# 3.0.0 / 2021-09 #13

- **[deps]** update: `eslint@7.32.0`, `eslint-config-airbnb-base@14.2.1`, `eslint-config-prettier@8.3.0`, `eslint-plugin-import@2.24.2`, `eslint-plugin-prettier@4.0.0`, `prettier@2.4.0`
- **[deps]** update instructions and support: `eslint-config-airbnb@18.2.1`, `eslint-plugin-jsx-a11y@6.4.1`, `eslint-plugin-react@7.25.1`, `eslint-plugin-react-hooks@4.2.0`

- **[config]** eslint - ecmaVersion: 2021
- **[config]** eslint - enable react hooks
- **[config]** prettier - define `"arrowParens": "avoid"` as default value changed
- **[config]** prettier - new config `"embeddedLanguageFormatting": "auto"`

- **[new rule]** default-case-last
- **[new rule]** no-loss-of-precision
- **[new rule]** no-promise-executor-return
- **[new rule]** no-unreachable-loop
- **[new rule]** no-unsafe-optional-chaining
- **[new rule]** import/no-relative-packages
- **[new rule]** import/no-import-module-exports
- **[new rule]** react/sort-prop-types
- **[new rule]** react/jsx-sort-props
- **[new rule]** react/no-unstable-nested-components
- **[new rule]** react/jsx-no-constructed-context-values
- **[new rule]** react/function-component-definition

- **[new option]** react/jsx-no-target-blank: { forms: true, warnOnSpreadAttributes: true }
- **[new option]** react/jsx-filename-extension: { allow: 'as-needed' }

- **[configuration]** react/sort-comp sorting extended with new pattern '/^handle.+$/'

- **[chore]** initiate CHANGELOG
