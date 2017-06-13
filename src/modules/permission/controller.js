const JsonDB = require('../../database/json/jsonDb');

class PermissionType {

	addPermission({newPermission}) {
		return JsonDB.getPermissionByPath(newPermission.path).then(permission => {
			if(permission === undefined) {
				return JsonDB.addPermission(newPermission);
			} else {
				throw new Error('The permission already exists');
			}
		});
	}

	getAllPermissions() {
		return JsonDB.getAllPermissions();
	}
}

module.exports = new PermissionType();
