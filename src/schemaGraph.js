const { buildSchema } = require('graphql');
const UserType = require('./modules/user/userType');

const schema = buildSchema(`
	
	type User {
		id: ID,
		name: String!,
		email: String!
	}
	
	type Group {
		id: ID,
		description: String!
		screenPermissions : [Permission],
		businessPermissions: [Permission]
	}

	type Permission {
		path: String!,
		description: String
	}

	type UserPermissions {
		screenPermissions: [Permission],
		businessPermissions: [Permission]
	}

	enum PermissionType {
		SCREEN,
		BUSINESS,
		ALL
	}

	type Query {
		getUserByName(name: String!): User,
		getUserByEmail(email: String!): User,
		getUserById(id: Int!): User,
		getUsersByGroup(group: String!): [User],
		getPermissions(idUser: Int, email: String, screenOnly: PermissionType!): UserPermissions 
	}
`);

const root = {
	getUserByName: UserType.getUserByName,
	getUserByEmail: UserType.getUserByEmail,
	getUserById: UserType.getUserById,
	getUsersByGroup: UserType.getUsersByGroup,
	getPermissions: UserType.getPermissions
};

module.exports = {
	schema,
	root
};
