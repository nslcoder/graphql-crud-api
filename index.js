require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const connectDB = require('./config/db');

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}.`);
});
