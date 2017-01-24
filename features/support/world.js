const {defineSupportCode} = require('cucumber');

defineSupportCode(function({setWorldConstructor}) {
	setWorldConstructor(CustomWorld)
});
