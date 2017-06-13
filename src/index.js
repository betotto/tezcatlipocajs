const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const { schema, root } = require('./schemaGraph');
const UserRoutes = require('./modules/user/routes');

const app = express();

app.use(bodyParser.json());

app.options('/graphql', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.status(200).send('OK');
});

app.get('/graphql', graphqlHTTP((req, res) => {

	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
/*
	const loaders = {
		colaborador: colaboradorLoader
	};
*/
	return {
		schema: schema,
		rootValue: root,
		graphiql: true
	};
}));

app.post('/graphql', graphqlHTTP((req, res) => {

	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
/*
	const loaders = {
		colaborador: colaboradorLoader
	};
*/
	return {
		schema: schema,
		rootValue: root,
		graphiql: false
	};
}));


app.use('/users', UserRoutes);

app.listen(4000);
