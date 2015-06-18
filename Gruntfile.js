'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		karma: {
			unit: {
				configFile: './karma.conf.js'
			}
		},
	});

};
