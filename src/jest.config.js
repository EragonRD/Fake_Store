module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['/jest.setup.ts'],
	moduleNameMapper: {
	  '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
	},
  };
  