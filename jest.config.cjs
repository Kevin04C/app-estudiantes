/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'],
};

module.exports = config;
