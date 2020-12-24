require('dotenv').config()
const { graphqlHTTP } = require('express-graphql');
var Db  = require('./api/Database')
var express = require('express')
var Root  = require('./api/graphql/resolvers')
var schema = require('./api/graphql/schema')
var path = require('path')
const port = process.env.PORT;
const app = express();

app.use(
  '/api/',
  graphqlHTTP({
    schema: schema,
    rootValue: Root,
    graphiql: true
  })
)

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  // app.use(Secure);
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
} else {
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))