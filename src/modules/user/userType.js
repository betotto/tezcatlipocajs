const JsonDB = require('../../database/json/jsonDb');

class UserType {
	getUserByName({name}) {
		return JsonDB.getUserByName(name);
	}

	getUserById({id}) {
		return JsonDB.getUserById(id);
	}

	getUsersByGroup({group}) {
		return JsonDB.getUsersByGroup(group);
	}

	getUserByEmail({email}) {
		return JsonDB.getUserByEmail(email);
	}
	
	addUser({user}) {
		return JsonDB.addUser(user);
	}

	getScreenPermisions({idUser, email}) {
		return JsonDB.getScreenPermisions(idUser, email);
	}

	getPermissions({idUser, email, screenOnly}) {
		return JsonDB.getPermissions(idUser, email, screenOnly);
	}

}

module.exports = new UserType();
