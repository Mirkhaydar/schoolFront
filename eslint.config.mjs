import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintParser from "@typescript-eslint/parser";
import importAccess from "eslint-plugin-import-access/flat-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    // set up typescript-eslint
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: true,
        sourceType: "module",
      },
    },
  },
  {
    plugins: {
      "import-access": importAccess,
    },
  },
  { files: ["src/**/*.tsx", "src/**/*.ts"],
    rules: {
      "import-access/jsdoc": ["error"],
    },
  },
  ...compat.config({
    plugins: ["import"],
    rules: {
      "react/no-unescaped-entities": "warn",
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // shared
            {
              target: "./src/shared/**",
              from: "./src/entities/**",
              message: "Shared не может импортировать что-либо из entities",
            },
            {
              target: "./src/shared/**",
              from: "./src/features/**",
              message: "Shared не может импортировать что-либо из features",
            },
            {
              target: "./src/shared/**",
              from: "./src/widgets/**",
              message: "Shared не может импортировать что-либо из widgets",
            },
            {
              target: "./src/shared/**",
              from: "./src/pages/**",
              message: "Shared не может импортировать что-либо из pages",
            },

            // entities
            {
              target: "./src/entities/**",
              from: "./src/features/**",
              message: "Entities не может импортировать что-либо из features",
            },
            {
              target: "./src/entities/**",
              from: "./src/widgets/**",
              message: "Entities не может импортировать что-либо из widgets",
            },
            {
              target: "./src/entities/**",
              from: "./src/pages/**",
              message: "Entities не может импортировать что-либо из pages",
            },

            // features
            {
              target: "./src/features/**",
              from: "./src/widgets/**",
              message: "Features не может импортировать что-либо из widgets",
            },
            {
              target: "./src/features/**",
              from: "./src/pages/**",
              message: "Features не может импортировать что-либо из pages",
            },

            // widgets
            {
              target: "./src/widgets/**",
              from: "./src/pages/**",
              message: "Widgets не может импортировать что-либо из pages",
            },
          ],
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
        },
      ],
      "no-unused-vars": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  }),
];

export default eslintConfig;