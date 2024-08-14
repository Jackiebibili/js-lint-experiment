// import globals from "globals";
// import pluginJs from "@eslint/js";

// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];

// import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
  // js.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: true,
          // presets: ['@babel/preset-env'],
        },
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-dupe-class-members': 'error',
    },
  },
];
