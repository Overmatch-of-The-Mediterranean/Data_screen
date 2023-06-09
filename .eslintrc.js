module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      '@vue/typescript/recommended'
    ],
    parserOptions: {
    //   parser: '@babel/eslint-parser'
        ecmaVersion: 2020
    },
    rules: {
      indent: ['off', 2],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'space-before-function-paren': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }