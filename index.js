const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema, root } = require('./src/schemaGraph');

const app = express();
/*
   Class: index
   The principal class of the program.
*/
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

app.listen(4000);


const _ = require('lodash');

console.log(_.find([], data => {
	return data !== null;
}));
