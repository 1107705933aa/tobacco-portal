module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],

  rules: {
    'max-len': ['error', { code: 10240, ignoreStrings: true }],
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-expressions': 'off',
    'vue/attributes-order': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/this-in-template': 'error',
    'vue/order-in-components': 'error',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'consistent-return': 'off',
    'vue/html-self-closing': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'import/no-mutable-exports': 'off',
    "global-require": 'off',
    "quotes": [1, "double"],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off"
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};