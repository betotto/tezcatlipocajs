const crypto = require('crypto');

const secretForPassword = 'nuevo';

exports.createHash = (password) => {
	const hash = crypto.createHmac('sha256', secretForPassword)
					.update(password)
					.digest('hex');
	return hash;
};

exports.emailIsValid = (email) => {
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(email);
};
