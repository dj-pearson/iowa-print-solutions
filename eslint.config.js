import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',

      // Off deliberately. 302 of the 794 errors in this config's first honest
      // measurement were prop-types on a JavaScript-only marketing site with no
      // TypeScript and no shared component library. Documenting every prop of
      // 39 components buys little here, and the volume was burying real
      // findings: react/jsx-no-undef, which is an error and would have caught
      // two pages that crashed into the ErrorBoundary in production, was
      // invisible in the noise for as long as this file reported 794 problems.
      'react/prop-types': 'off',

      // Narrowed, not disabled. The characters worth catching in JSX text are
      // the ones that break parsing or read as markup - > and } - not the
      // apostrophes in ordinary prose, which accounted for essentially all 192
      // reports and made the rule pure noise.
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
