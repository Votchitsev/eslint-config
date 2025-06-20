import stylistic from '@stylistic/eslint-plugin';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import("eslint").Linter.Config[]} */

export default [
  {
    ignores: ["**/dist/**", "**/node_modules/**"]
  },
  {
    plugins: {
      "@stylistic": stylistic,
      "prettier": pluginPrettier,
    },
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "prettier/prettier": "warn",
      "no-unused-vars": "warn",
      "no-console": "warn",
      "max-len": ["warn", {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true
      }],
      "@stylistic/indent": ["warn", 2],
      'key-spacing': ['warn', {
        beforeColon: false,
        afterColon: true,
      }],
      'keyword-spacing': ['warn', { before: true, after: true }],
      "padding-line-between-statements": [
        "warn",
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'always', prev: '*', next: ['return'] }
      ],
      "prefer-arrow-callback": ["warn"],
      "no-multi-str": "warn",
      'no-empty': "warn",
      "eqeqeq": ['warn', 'always'],
      '@stylistic/quotes': ['warn', "single"],
      "@stylistic/jsx-quotes": ["warn", "prefer-double"],
      'space-in-parens': ['warn', 'never'],
      'no-var': 'warn',
      'comma-dangle': ['warn', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never'}],
      'semi': 'warn',
    },
  },
  prettier,
]
