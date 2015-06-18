'use strict';

var proxyquire = require('proxyquireify')(require);
var overrides = {};
overrides.mithril = {
	startComputation: function () {}
};
var spy = sinon.spy(overrides.mithril, 'startComputation');
var main = proxyquire('./main', overrides);

describe('Main Spec', function () {
	it('should have mounted the view', function () {
		main.go();
		expect(spy.called).to.equal(true);
	});
});
