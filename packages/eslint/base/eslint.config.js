module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:import/recommended"],
  rules: {
    // eslint
    "comma-dangle": [2, "only-multiline"],
    "object-shorthand": "warn",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: ["^draft$", "Draft$"],
      },
    ],
    "no-shadow": "off",
    "no-return-await": "off",
    camelcase: ["warn", { allow: ["^\\w*_[A-Z]*$"] }],

    // import
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: [
          "**/*.test.*",
          "**/*.stories.*",
          "**/*.config.*",
          "**/*.spec.*",
        ],
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
  },
}
