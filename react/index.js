import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

/** @type {import("eslint").Linter.Config[]} */

export default [
  {
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      }
    },
    settings: {
      react: {
        version: "detect",
      }
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off"
    }
  }
]
