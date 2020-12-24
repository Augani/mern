var { buildSchema } = require("graphql");

var schema = buildSchema(`
  
  type Query {
    Test: String
  }
  
`);

module.exports = schema;
