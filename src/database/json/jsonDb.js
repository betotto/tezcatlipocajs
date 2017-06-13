const fs = require('fs');

class JsonDb {

	constructor() {
		this.jsonData = JSON.parse(fs.readFileSync(__dirname + '/tezcatlipoca.json', 'utf-8'));
	}

	getAllUsers() {
		return this.jsonData.users;
	}

	getUserByEmail(email) {
		return new Promise((resolve) => {
			resolve(this.jsonData.users.find((user) => {
				return user.email === email;
			}));
		});
	}

	getUserById(userId) {
		return new Promise((resolve) => {
			resolve(this.jsonData.users.find((user) => {
				return user.id === userId;
			}));
		});
	}

	getAllPermissions() {
		return this.jsonData.permissions;
	}

	getPermissionByPath(path) {
		return new Promise((resolve) => {
			resolve(this.jsonData.permissions.find((permission) => {
				return permission.path === path;
			}));
		});
	}

	getAllGroups() {
		return this.jsonData.groups;
	}

	getGroupByName(groupName) {
		return new Promise((resolve) => {
			resolve(this.jsonData.groups.find((group) => {
				return group.name === groupName;
			}));
		});
	}

	addUser(newUser) {
		return new Promise((resolve) => {
			let nextId = this.jsonData.currentUserId;
			newUser.id = ++nextId;
			this.jsonData.users.push(newUser);
			this.jsonData.currentUserId = nextId;
			saveFile(this.jsonData);
			resolve(newUser);
		});
	}

	addPermission(newPermission) {
		return new Promise((resolve) => {
			this.jsonData.permissions.push(newPermission);
			saveFile(this.jsonData);
			resolve(true);
		});
	}

	addGroup(newGroup) {
		return new Promise((resolve) => {
			this.jsonData.groups.push(newGroup);
			saveFile(this.jsonData);
			resolve(true);
		});
	}
}

let jsonInstance;

function saveFile(data) {
	fs.writeFileSync(__dirname + '/tezcatlipoca.json', JSON.stringify(data), {encoding: 'utf-8'});
}

if(jsonInstance === null || jsonInstance === undefined) {
	jsonInstance = new JsonDb();
}

module.exports = jsonInstance;
