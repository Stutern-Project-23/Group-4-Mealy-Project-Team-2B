module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "react-app",
    "react-app/jest",
    "airbnb",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./jsconfig.json",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-shadow": "off",
    "react/jsx-uses-react": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/react-in-jsx-scope": "off",
    quotes: ["warn", "double", { avoidEscape: true }],
    "no-unused-vars": "warn",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".js"] }],
  },
};
