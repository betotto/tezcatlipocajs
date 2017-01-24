const fs = require('fs');
const _ = require('lodash');
const {findNextId, getAllPermission} = require('./utils');

class JsonDb {

	constructor() {
		this.jsonData = JSON.parse(fs.readFileSync(__dirname +"/tezcatlipoca.json", "utf-8"));
	}

	getUsers() {
		return this.jsonData.users;
	}

	getUserByName(name) {
		return new Promise((resolve, reject) => {
			let user;
			try {
				user = _.find(this.jsonData.users, (user) => {
					return user.name === name;
				});
				resolve(user);
			} catch(err) {
				reject(err);
			}
		});
	}

	getUserByEmail(email) {
		return new Promise((resolve, reject) => {
			let user;
			try {
				user = _.find(this.jsonData.users, (user) => {
					return user.email === email;
				});
				resolve(user);
			} catch(err) {
				reject(err);
			}
		});
	}

	getUserById(id) {
		return new Promise((resolve, reject) => {
			let user;
			try {
				user = _.find(this.jsonData.users, (user) => {
					return user.id === id ;
				});
				resolve(user);
			} catch(err) {
				reject(err);
			}
		});
	}
	
	getUsersByGroup(group) {
		return new Promise((resolve, reject) => {
			let users = [];
			try {
				_.each(this.jsonData.users, (user) => {
					_.each(user.groups, (userGroup) => {
						if(userGroup === group) {
							users.push(user);
						}
					});
				});
				resolve(users);
			} catch(err) {
				reject(err);
			}
		});
	}

	addUser(user) {
		return new Promise((resolve, reject) => {
			this.getUserByEmail(user.email).then(user => {
				if(user === undefined) {
					user.id = findNextId(this.jsonData.users);
					this.jsonData.users.push(user);
					fs.writeFileSync(__dirname +'/tezcatlipoca.json', JSON.stringify(this.jsonData), {encoding: 'utf-8'});
					resolve(user);
				} else {
					reject('The user already exists');
				}
			}).catch(error => {
				reject(error);
			});
		});
	}

	getPermissions(idUser, email, permissionType) {
		return new Promise((resolve, reject) => {
			if(idUser === undefined || idUser === null) {
				if(email === undefined || email === null || email === "") {
					throw new Error('id or email of the user is required');
				} else {
					this.getUserByEmail(email).then(foundedUser => {
						resolve(getAllPermission(foundedUser, this.jsonData.groups, permissionType));
					}).catch(error => reject(error));
				}
			} else {
			  	this.getUserById(idUser).then(foundedUser => {
					resolve(getAllPermission(foundedUser, this.jsonData.groups, permissionType));
				}).catch(error => reject(error));
			}
		});	
	}
}

let jsonInstance;

if(jsonInstance === null || jsonInstance === undefined) {
	jsonInstance = new JsonDb();
}

module.exports = jsonInstance;
