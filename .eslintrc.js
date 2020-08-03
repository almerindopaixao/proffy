module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globais: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: ['@typescript-eslint/parser', 'babel-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};
