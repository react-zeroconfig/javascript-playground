module.exports = {
  extends: ['@lunit', 'prettier', 'prettier/react'],
  ignorePatterns: ['src/**/public/**/*', 'src/**/*.d.ts'],
  //overrides: [
  //  {
  //    files: ['**/*.ts?(x)'],
  //    rules: {
  //      '@typescript-eslint/typedef': [
  //        'error',
  //        {
  //          arrayDestructuring: false,
  //          arrowParameter: false,
  //          objectDestructuring: false,
  //          parameter: true,
  //          propertyDeclaration: true,
  //          memberVariableDeclaration: true,
  //          variableDeclaration: true,
  //        },
  //      ],
  //    },
  //  },
  //],
};
