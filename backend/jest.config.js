// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  coveragePathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "node",
  verbose: true,
};

module.exports = config;
