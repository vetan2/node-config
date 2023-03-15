module.exports = {
  extends: [
    "@vetan2/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // react
    "react/display-name": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-brace-presence": [
      1,
      {
        props: "never",
        children: "never",
      },
    ],
    "react/prop-types": "off",
    "react/require-default-props": "off",
  },
}
