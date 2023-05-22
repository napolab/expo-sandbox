/** @type {import("eslint").Linter.Config} */
const config = {
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  extends: ['@naporin0624/eslint-config', '@naporin0624/eslint-config/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-restricted-imports': ['error', { patterns: ['src/'] }],
    camelcase: ['error', { ignoreImports: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.dev.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          './*.config.js',
          './*.config.cjs',
          './*.config.mjs',
          '**/*.dev.mjs',
          './*.config.ts',
          'vitest-*',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      },
    },
    {
      files: ['*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}

module.exports = config
