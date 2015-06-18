var fs = require('fs');
var browserify = require('browserify');
var proxyquire = require('proxyquireify');

browserify()
.plugin(proxyquire.plugin)
.require(require.resolve('./main.spec'), { entry: true })
.bundle()
.pipe(fs.createWriteStream(__dirname + '/bundled.spec.js'));
