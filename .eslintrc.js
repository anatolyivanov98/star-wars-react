module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'linebreak-style': ['off'],
    'import/extensions': ['off'],
    'no-plusplus': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/no-shadow': ['error'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'space-before-function-paren': ['error'],
    'no-console': ['off'],
    'no-param-reassign': [
      'error', {
        props: true,
        ignorePropertyModificationsForRegex: ['^state'],
        ignorePropertyModificationsFor: ['acc']
      }
    ],
    'no-return-await': ['off'],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'max-len': ['error', { code: 140 }],
    'no-undef': 'off'
  }
}
