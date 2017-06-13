const JsonDB = require('../../database/json/jsonDb');

class GroupType {

	addGroup({newGroup}) {
		return JsonDB.getGroupByName(newGroup.name).then(group => {
			if(group === undefined) {
				return JsonDB.addGroup(newGroup);
			} else {
				throw new Error('The Group already exists');
			}
		});
	}

	getAllGroups() {
		return JsonDB.getAllGroups();
	}
}

module.exports = new GroupType();
