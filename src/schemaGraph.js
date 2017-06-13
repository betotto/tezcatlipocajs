const { buildSchema } = require('graphql');
const UserController = require('./modules/user/controller');
const PermissionController = require('./modules/permission/controller');
const GroupController = require('./modules/groups/controller');

const schema = buildSchema(`

	type User {
		id: ID,
		userName: String!,
		email: String!,
		groups: [Group],
		screenPermissions : [Permission],
		businessPermissions: [Permission]
	}

	type Permission {
		path: String!,
		description: String
	}
	
	type Group {
		name: ID,
		description: String!
		screenPermissions : [Permission],
		businessPermissions: [Permission]
	}

	input UserInput {
		userName: String!, 
		email: String!,
		groups: [GroupInput]!,
		screenPermissions : [PermissionInput]!,
		businessPermissions: [PermissionInput]!
	}

	input GroupInput {
		name: ID,
		description: String!,
		screenPermissions : [PermissionInput]!,
		businessPermissions: [PermissionInput]!
	}

	input PermissionInput {
		path: String!,
		description: String
	}

	enum PermissionType {
		SCREEN,
		BUSINESS,
		ALL
	}

	type Query {
		getAllUsers: [User],
		getUserById(userId: Int!): User,
		getAllPermissions: [Permission],
		getAllGroups: [Group]
	}
	
	type Mutation {
		addUser(newUser: UserInput!): User,
		addPermission(newPermission: PermissionInput!): Boolean,
		addGroup(newGroup: GroupInput): Boolean
	}
`);

const root = {
	getAllUsers: UserController.getAllUsers,
	getUserById: UserController.getUserById,
	getAllPermissions: PermissionController.getAllPermissions,
	getAllGroups: GroupController.getAllGroups,
	addUser: UserController.addUser,
	addPermission: PermissionController.addPermission,
	addGroup: GroupController.addGroup
};

module.exports = {
	schema,
	root
};
