const {defineSupportCode} = require('cucumber');
const expect = require('expect.js')

defineSupportCode(function({Given, When, Then}) {
	When('I get the User {arg1:stringInDoubleQuotes}', (role) => {
		return 'pending';
	});
	
	Then('User admin must exist', () => {
		return 'pending';
	});

	Then('User admin must have {arg1:stringInDoubleQuotes} role', (role) => {
		return 'pending';
	});
});
