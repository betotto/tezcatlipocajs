const UserType = require('./src/modules/user/userType');


UserType.addUser(
	{
		user: {
			"id": 0,
			"name": "admin",
			"email": "admin@site.com",
			"groups": [
				"admin"
			],
			"screenPermissions": [],
			"businessPermissions": []
		}
	}
).catch(error => {
	console.log(error);
});

UserType.getScreenPermisions({idUser: 0}).then((permissions) => {
	console.log(permissions);
}).catch(error => {
	console.log(error);
});