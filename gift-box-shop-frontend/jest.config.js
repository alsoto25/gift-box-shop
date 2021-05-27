module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@pages(.*)$': '<rootDir>/pages$1',
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
}
