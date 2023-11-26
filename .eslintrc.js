const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    // see source: https://github.com/bamlab/react-native-project-config/blob/main/packages/eslint-plugin/lib/configs/recommended.js
    "plugin:@bam.tech/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["import"],
  overrides: [
    {
      // config files that use CommonJS
      files: [".eslintrc.js", "prettier.config.js", "app.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  rules: {
    "react-native/no-raw-text": "off",
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
});
