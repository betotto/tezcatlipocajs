const JsonDB = require('../../database/json/jsonDb');
const {emailIsValid} = require('./utils');

class UserType {

	addUser({newUser}) {
		if(emailIsValid(newUser.email)) {
			return JsonDB.getUserByEmail(newUser.email).then(user => {
				if(user === undefined) {
					return JsonDB.addUser(newUser);
				} else {
					throw new Error('The user already exists');
				}
			});
		} else {
			throw new Error('The email is not valid');
		}
	}

	getAllUsers() {
		return JsonDB.getAllUsers();
	}

	getUserById({userId}) {
		return JsonDB.getUserById(userId);
	}

}

module.exports = new UserType();
