const _ = require('lodash');

exports.getAllPermission = (user, groups, permissionType) => {
	let screenPermissions = [];
	let businessPermissions = [];
	if(permissionType === 'SCREEN' || permissionType === 'ALL') {
		screenPermissions = user.screenPermissions;
	}
	if(permissionType === 'BUSINESS' || permissionType === 'ALL') {
		businessPermissions = user.businessPermissions;
	}
	_.each(user.groups, (userGroup) => {
		_.each(groups, (group) => {
			if(userGroup === group.id) {
				if(permissionType === 'SCREEN' || permissionType === 'ALL') {
					screenPermissions = screenPermissions.concat(group.screenPermissions);
				} 
				if(permissionType === 'BUSINESS' || permissionType === 'ALL') {
					businessPermissions = businessPermissions.concat(user.businessPermissions);
				}
			}
		});
	});
	return {
		screenPermissions,
		businessPermissions
	};
};
