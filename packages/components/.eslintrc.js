module.exports = {
  extends: "airbnb",
  plugins: ["jest"],
  env: {
    jest: true
  },
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
  }
};