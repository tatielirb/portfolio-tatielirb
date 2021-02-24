module.exports = {
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/src/**/*.spec.(ts|js)'],
  transformIgnorePatterns: [
    'node_modules/(?!(@warrenbrasil/nebraska-tokens-web|@warrenbrasil/nebraska-web)/)'
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      babelConfig: true
    }
  },
  setupFiles: ['<rootDir>/jest.setup.js']
};
