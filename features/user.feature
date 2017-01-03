Feature: User module
	The user module have to control all the operations related to manage users, like new User,
	update User or remove User.

	Scenario: adminUserScenario - Must exist an admin User.
		When I get the User "admin"
		Then User admin must exist
		Then User admin must have "admin" role

	Scenario: newUserScenario - Creates new User.
		
		The fields for a user are :
		- firstName
		- lastName 
		- email

		The next fields are required:

		- firstName
		- lastName
		- email 

		Given different Users information with:

		| firstName | lastName  | email              | message                                          |
		| Steve     | Richert   | roberto@mail.com   | Ok                                               |
		| Steve     |           | roberto@mail.com   | The last name is required                        |
		| Steve     | Richert   |                    | The email is required                            |
		| Juan      | Jones     | roberto@mail.com   | The user already exists, it can't be saved again |
		
		Then The application must return the according messages

	Scenario: updateUserScenario - Updates many fields or try to update if the user exists.
		only created users can be updated also the identification fiels can't be updated. 
		The identification fields are:

		- id
		- firstName
		- lastName
		- email

		Given a new User information with:

		| firstName | lastName  | email              | message                                          |
		| Steve     | Richert   | roberto@mail.com   | Ok                                               |

			And the next modifications for the created user, use its id

			| field     | value            | message                              |
			| id        | 10               | The id can't be modified             |
			| firstName | Jones            | The first name can't be modified     |
			| lastName  | Jones            | The last name can't be modified      |
			| email     | steve@mail.com   | The mail can't be modified           |

			And the next modification for a user with id 10000 than doesn't exists

			| field    | value            | message                              |
			| id       | 10               | The User doesn't exists              |
			| lastName | Jones            | The User doesn't exists              |
			| email    | steve@mail.com   | The User doesn't exists              |

		Then the application must return the according messages for update
