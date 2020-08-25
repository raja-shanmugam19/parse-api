module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-base',
  ],
  // Below is for AIRBNB
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never'
    }],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.tests.ts', '**/*.tests.tsx']}],
    'linebreak-style': 0
    
  },
  // Below is required to correctly resolve .ts files
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        paths: ['./src']
      }
    }
  },
};