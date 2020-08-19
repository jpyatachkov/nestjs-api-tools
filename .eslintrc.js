module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit'}],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': [
      'error',
      {'allows': ['public', 'public readonly', 'private readonly']},
    ],
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'indent': 'off',
    'lines-between-class-members': ['error', 'always'],
    'no-useless-constructor': 'off',
    'quotes': 'off',
    'sort-imports': [2, {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
    }],
    'object-curly-spacing': ['error', 'never'],
  },
  overrides: [
    {
      files: [
        'test/**/*.ts',
        '**/*.spec.ts',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'max-nested-callbacks': 'off',
        'no-undef': 'off',
      },
    },
    // Т.к. дата-классы определяют свои свойства в конструкторе, и таких свойств может быть много,
    // ограничение на максимальное количество параметров функции отключается.
    {
      files: [
        '**/entities/*.ts',
        '**/*.entity.ts',
      ],
      rules: {
        'max-params': 'off',
      },
    },
  ],
};
