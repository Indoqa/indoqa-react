module.exports = {
  extends: 'eslint-config-react-app',
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // opinionated rules by Indoqa
        'semi': ['error', 'never'],
        'comma-dangle': ['warn', {
          'arrays': 'always-multiline',
          'objects': 'always-multiline',
          'imports': 'always-multiline',
          'exports': 'always-multiline',
          'functions': 'always-multiline'
        }],
        'react-hooks/exhaustive-deps': 'error',
        // end of Indoqa rules
      },
    },
  ],
}

