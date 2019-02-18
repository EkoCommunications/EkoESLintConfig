# TODOs:

Enable when moved to prettier-eslint package instead of current config "prettier-eslint" package ensure this flow (So there will be no more conflict):

#### *Code ==> Prettier ==> Eslint ==> Formatted Code*

NOTE: This is how *Visual Studio Code* do the formatting when enabling prettier
integration with eslint as formatting rule. And the code will more likely looks
much better and closer to AirBnB style guideline.

#### 1. array-element-newline

Reference: https://eslint.org/docs/rules/array-element-newline

**AirBnB**

```javascript
'array-element-newline': ['off', { multiline: true, minItems: 3 }],
```

**Proposed:**

```javascript
'array-element-newline': ['error', 'consistent', { multiline: true, minItems: 3 }],
```

#### 2. multiline-ternary

Reference: https://eslint.org/docs/rules/multiline-ternary

**AirBnB**

```javascript
'multiline-ternary': ['off', 'never'],
```

**Proposed:**

```javascript
'multiline-ternary': ['error', 'always-multiline']
```

#### 3. object-curly-newline

Reference: https://eslint.org/docs/rules/object-curly-newline

**AirBnB**

```javascript
'object-curly-newline': [
  'error',
  {
    ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  },
],
```

**Proposed:**

Ensure object doesn't being squeezed into 1 line of code

```javascript
'object-curly-newline': [
  'error',
  {
    ObjectExpression: { minProperties: 2, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 2, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 2, multiline: true, consistent: true },
  },
]
```

#### 4. whitespace--implicit-arrow-linebreak

Reference: https://github.com/airbnb/javascript#whitespace--implicit-arrow-linebreak

**Not Found in AirBnB rules**

**Proposed:**

To better align arrow function body

```javascript
'implicit-arrow-linebreak': 'error'
```

#### 5. jsx-max-props-per-line

Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md

**AirBnB**

```javascript
'react/jsx-max-props-per-line': [
  'error',
  {
    maximum: 1,
    when: 'multiline',
  },
],
```

Set to "always" so that new props will always on new line if there are more than 1 prop.

BAD:

```
<Component isSingle life={isProgrammer ? undefined : 'hard'} />
```

GOOD:

```javascript
<Component
  isSingle
  life={isProgrammer ? undefined : 'hard'}
/>
```
**Proposed:**

```javascript
'react/jsx-max-props-per-line': [
  'error',
  {
    maximum: 1,
    when: 'always',
  },
],
```

#### 6. More rules
