module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  roots: ["src"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      diagnostics: true,
    },
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/serviceWorker.ts",
    "!src/setupTests.ts",
    "!src/index.tsx",
  ],
  coveragePathIgnorePatterns: ["./src/*/*.types.{ts,tsx}"],
  coverageReporters: ["json", "lcov", "text-summary", "clover"],
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"],
  automock: false,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  modulePaths: [],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
