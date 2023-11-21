[auto-save](https://velog.io/@kcs0702/VSC-%EC%9E%90%EB%8F%99%EC%A0%95%EB%A0%AC-auto-save-prettier-%EC%84%A4%EC%A0%95%EB%B2%95)

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto' /* 필수 */
      }
    ],
  },
};
```

```javascript
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine:": "crlf"
}
```