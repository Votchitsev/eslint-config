import tsparser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginImport from 'eslint-plugin-import';

/** @type {import("eslint").Linter.Config[]} */

export default [
  { ...tseslint.configs.recommendedTypeChecked },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        createDefaultProgram: true,
        tsconfigPath: './tsconfig.json',
        tsconfigRootDir: '.',
        projectService: true,
      }
    },
    settings: {
      'import/resolver': {
        typescript: {}, // обязательно для корректного порядка
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'import': pluginImport,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'import/order': ['warn', {
        'groups': [
          'builtin',     // встроенные модули Node.js: fs, path, etc
          'external',    // внешние зависимости из node_modules
          'internal',    // ваши абсолютные импорты (если настроен alias)
          ['parent', 'sibling', 'index'], // относительные импорты
          'object',      // импорты типа import * as foo from 'bar'
          'type'         // импорты типов (TypeScript)
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }],
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',
      '@typescript-eslint/consistent-type-exports': ['error', {
        fixMixedExportsWithInlineTypeSpecifier: true
      }]
    }
  }
];

