module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    "browser": true,
    "node": true,
    "es6": true,
  },
  rules: {
    "react/prop-types": 0,
  }
};
