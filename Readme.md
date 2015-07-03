# The Proxyquireify PhantomJS Menace

This repo is intended to prove an existing problem with PhantomJS that affects proxyquirify (and possibly other libraries that use 'callee'). Original discussion here: https://github.com/thlorenz/proxyquireify/issues/35

It can now be fixed with this module: https://github.com/bendrucker/phantom-ownpropertynames

This repo remains here for posterity, in case anyone else stumbles on this problem

1. run `node browersrifySpec.js`
2. run `grunt karma`
3. should suceed in Chrome but fail in PhantomJS
