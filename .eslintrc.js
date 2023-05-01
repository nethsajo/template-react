module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@Assets', './src/assets'],
          ['@Modules', './src/modules'],
          ['@Pages', './src/pages'],
          ['@Shared', './src/shared'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['./jsconfig.eslint.json'],
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': ['off', 'as-needed'],
    'no-prototype-builtins': 'off',
    'no-param-reassign': [2, { props: false }],
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-undef': 'error',
    'prefer-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['index', 'internal', 'sibling', 'parent', 'external', 'builtin', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': 'error',
    'require-await': 'off',
  },
};
