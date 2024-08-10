module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard',
    'prettier', "plugin:jest/recommended"],
  overrides: [
    {
      env: {
        node: true,
        jest: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        "**/*.test.js",
        "**/*.test.jsx"
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
  plugins: ["jest"]
}
