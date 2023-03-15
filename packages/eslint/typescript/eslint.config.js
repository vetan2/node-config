module.exports = {
  extends: [
    "@vetan2/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // @typescript-eslint
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
}
