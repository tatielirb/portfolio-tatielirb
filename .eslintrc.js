module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    VUFile: 'readable'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript'],
  rules: {
    camelcase: 1,
    'vue/custom-event-name-casing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
