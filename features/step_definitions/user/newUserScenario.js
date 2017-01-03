const {defineSupportCode} = require('cucumber');
const expect = require('expect.js');
let newUser;

defineSupportCode(function({Given, When, Then}) {
	
	Given('different Users information with:', (users) => {
		users.raw().map((element, index) => {
			if(index !== 0) {
				let [firstName, lastName, email, message] = element;
				console.log('firstName   ' + firstName);
			}
		});
		return 'pending';
	});

	Then('The application must return the according messages', () => {
		console.log('Dentro de newUser');
		return 'pending';
	});
});
