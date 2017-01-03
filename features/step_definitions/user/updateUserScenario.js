const {defineSupportCode} = require('cucumber');
const expect = require('expect.js');
let newUser;

defineSupportCode(function({Given, When, Then}) {
	
	Given('a new User information with:', (users) => {
		users.raw().map((element, index) => {
			if(index !== 0) {
				let [firstName, lastName, email, message] = element;

			}
		});
		return 'pending';
	});

	Given('the next modifications for the created user, use its id', (fields) => {
		fields.raw().map((element, index) => {
			if(index !== 0) {
				let [field, value, message] = element;
				console.log('field   ' + field);
			}
		});
		return 'pending';
	});

	Given('the next modification for a user with id {arg1:int} than doesn\'t exists', (userId, fields, callback) => {
		fields.raw().map((element, index) => {
			if(index !== 0) {
				let [field, value, message] = element;
				console.log('value   ' + value);
			}
		});
		return 'pending';
	});

	Then('the application must return the according messages for update', () => {
		console.log('Dentro de updateUser');
		return 'pending';
	});
});
