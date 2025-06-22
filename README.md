# @votchitsev/eslint-config
![NPM Version](https://img.shields.io/npm/v/@votchitsev/eslint-config)

This package provides a modular and extensible ESLint configuration for modern JavaScript and TypeScript projects. It’s structured into three separate configs, each addressing a specific concern:

### 🔧 recommended

This is the base configuration that includes:
* General best practices and warnings (no-unused-vars, no-console, etc.)
* Code style rules powered by @stylistic/eslint-plugin
* Prettier integration via eslint-plugin-prettier and eslint-config-prettier
* Consistent formatting for spacing, quotes, indentation, semicolons, and line padding

Use this config to enforce a clean and consistent codebase across JavaScript and TypeScript files.

### 🟦 typescript
This config extends the base recommended rules with TypeScript-specific linting:

* Powered by @typescript-eslint

* Enables type-aware rules by reading from your tsconfig.json

* Enforces clear and consistent import order using eslint-plugin-import

* Encourages proper type export style via @typescript-eslint/consistent-type-exports

* Detects duplicate imports and enforces newlines between them

This config is intended for use in TypeScript projects where strong typing and code organization are critical.

### ⚛️ react
This config adds support for React projects:

Based on eslint-plugin-react and eslint-plugin-react-hooks

Automatically detects the installed React version

Disables the legacy react-in-jsx-scope rule (not needed in modern React)

It’s designed to be used alongside recommended and typescript configs to fully lint React + TypeScript projects.

## Installation
To start using this ESLint config package, make sure you have ESLint installed in your project:

```bash
npm install --save-dev @votchitsev/eslint-config
```

Or with yarn:

```bash
yarn add -D @votchitsev/eslint-config
```
## How to use
Each config is exposed as a separate export:
```json
"eslintConfig": {
  "extends": [
    "@votchitsev/eslint-config/recommended",
    "@votchitsev/eslint-config/typescript",
    "@votchitsev/eslint-config/react"
  ]
}
```

Or with flat config:

```js
import recommended from '@votchitsev/eslint-config/recommended'
import typescript from '@votchitsev/eslint-config/typescript'
import react from '@votchitsev/eslint-config/react'

export default [
  ...recommended,
  ...typescript,
  ...react,
]
```

## 🔧 Customization

You can easily extend or override rules from this ESLint config in your project setup. Below are some common ways to customize the configuration to fit your needs.

### 1. Extend a Specific Config
To start with one of the provided presets (recommended, typescript, or react), extend it in your local ESLint config file:

```js
// eslint.config.js
import config from '@votchitsev/eslint-config/recommended'

export default [
  ...config
]
```

You can also combine multiple configs:

```js
import recommended from '@votchitsev/eslint-config/recommended'
import typescript from '@votchitsev/eslint-config/typescript'
import react from '@votchitsev/eslint-config/react'

export default [
  ...recommended,
  ...typescript,
  ...react,
]
```

### 2. Override or Add Rules

You can override specific rules by appending a custom config at the end of your ESLint config:

```js
import recommended from '@votchitsev/eslint-config/recommended'

export default [
  ...recommended,
  {
    rules: {
      'no-console': 'off',              // Disable warning for console.log
      'max-len': ['error', { code: 80 }] // Stricter line length
    }
  }
]
```

### 3. Add Custom File Matchers
Want to apply rules only to certain file types? Add a files matcher:

```js
export default [
  {
    files: ['scripts/**/*.js'],
    rules: {
      'no-var': 'error',
    },
  }
]
```

### 4. Customize TypeScript Project Path
If you're using the TypeScript config and your tsconfig.json is in a different location, you can pass it manually:

```js
import typescript from '@votchitsev/eslint-config/typescript'

export default typescript.map(config =>
  config.languageOptions?.parserOptions
    ? {
        ...config,
        languageOptions: {
          ...config.languageOptions,
          parserOptions: {
            ...config.languageOptions.parserOptions,
            tsconfigPath: './path/to/tsconfig.json',
          },
        },
      }
    : config
)
```

### 5. Combine with Prettier or Format with Editor
This config includes Prettier support. Make sure your editor formats code on save using ESLint (see VSCode setup section for details).

# Rules

## Recommended Rules

### `prettier/prettier`
- Level: **warn**

### `no-unused-vars`
- Level: **warn**

### `no-console`
- Level: **warn**

### `max-len`
- Level: **warn**
- Options: `{'code': 100, 'ignoreUrls': True, 'ignoreStrings': True, 'ignoreTemplateLiterals': True, 'ignoreRegExpLiterals': True, 'ignoreComments': True}`

### `@stylistic/indent`
- Level: **warn**
- Options: `2`

### `key-spacing`
- Level: **warn**
- Options: `{'beforeColon': False, 'afterColon': True}`

### `keyword-spacing`
- Level: **warn**
- Options: `{'before': True, 'after': True}`

### `padding-line-between-statements`
- Level: **warn**
- Options: `[{'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'}, {'blankLine': 'always', 'prev': '*', 'next': ['return']}]`

### `prefer-arrow-callback`
- Level: **warn**

### `no-multi-str`
- Level: **warn**

### `no-empty`
- Level: **warn**

### `eqeqeq`
- Level: **warn**
- Options: `always`

### `@stylistic/quotes`
- Level: **warn**
- Options: `single`

### `@stylistic/jsx-quotes`
- Level: **warn**
- Options: `prefer-double`

### `space-in-parens`
- Level: **warn**
- Options: `never`

### `no-var`
- Level: **warn**

### `comma-dangle`
- Level: **warn**
- Options: `{'arrays': 'always-multiline', 'objects': 'always-multiline', 'imports': 'always-multiline', 'exports': 'always-multiline', 'functions': 'never'}`

### `semi`
- Level: **warn**

## TypeScript Rules

### `import/order`
- Level: **warn**
- Options: `{'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'], 'newlines-between': 'always', 'alphabetize': {'order': 'asc', 'caseInsensitive': True}}`

### `import/no-duplicates`
- Level: **error**

### `import/newline-after-import`
- Level: **warn**

### `@typescript-eslint/consistent-type-exports`
- Level: **error**
- Options: `{'fixMixedExportsWithInlineTypeSpecifier': True}`

## React Rules

### `react/react-in-jsx-scope`
- Level: **off**

