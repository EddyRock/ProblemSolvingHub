import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    extends: ["prettier"],
    rules: {
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      'no-void': 'off',
      'no-nested-ternary': 'off',
      'max-classes-per-file': 'off',
      'no-shadow': 'off',
      'import/first': 'off',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'prefer-promise-reject-errors': 'off',
      quotes: ['warn', 'single', { avoidEscape: true }],
      'no-unused-vars': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'max-len': 'off',
      'class-method': 'off',
      'class-methods-use-this': 'off',
      'no-return-await': 'off',
      'no-tabs': 'off',
      camelcase: 'off',
      'func-names': 'off',

      // Enable Prettier-specific rules
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          endOfLine: 'auto',
          semi: false,
          tabWidth: 2,
          printWidth: 80,
        },
      ],
    }
  },
  pluginJs.configs.recommended,
];
