'use strict';
module.exports = function (config) {
	config.set({
		// Karma configuration

		// base path, that will be used to resolve files and exclude
		basePath: './',

		frameworks: ['mocha', 'sinon-chai'],

		// test results reporter to use
		// possible values: dots || progress || growl
		reporters: ['progress'],
		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome', 'PhantomJSCustom'], //, 'Safari', 'Firefox'],
		customLaunchers: {
			PhantomJSCustom: {
				base: 'PhantomJS',
				options: {
					viewportSize: {
						width: 1024,
						height: 600
					}
				}
			}
		},

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// list of files / patterns to load in the browser
		files: [
			'./bundled.spec.js'
		]

	});
};
