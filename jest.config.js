module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/pages/(.*)$': '<rootDir>/pages/$1',
      '^@/lib/(.*)$': '<rootDir>/lib/$1',
      '^@/styles/(.*)$': '<rootDir>/styles/$1',
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  