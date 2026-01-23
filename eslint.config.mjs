import js from "@eslint/js";
import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

// ESLint flat config for Next.js with TypeScript
// This configuration provides Next.js recommended rules and TypeScript support
const eslintConfig = [
  // Use recommended JavaScript rules
  js.configs.recommended,
  
  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      // Allow unused vars that start with underscore
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      // Disable rules that conflict with Next.js
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  
  // React configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Browser globals (window, document, etc.)
        ...globals.node, // Node.js globals (process, Buffer, etc.)
        // React is available globally in Next.js
        React: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Next.js specific: allow jsx in .js files and no need for React import
      "react/react-in-jsx-scope": "off",
      // Allow prop-types to be missing (using TypeScript instead)
      "react/prop-types": "off",
      // Allow unescaped entities in JSX (common in Next.js)
      "react/no-unescaped-entities": "warn",
      // Next.js core web vitals rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Allow unused vars that start with underscore
      "no-unused-vars": "off", // Turn off base rule, use TypeScript version instead
    },
  },
  
  // Ignore patterns
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "*.config.{js,mjs,cjs,ts}",
      "public/**",
      "pnpm-lock.yaml",
    ],
  },
];

export default eslintConfig;
