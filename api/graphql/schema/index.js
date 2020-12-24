var { buildSchema } = require('graphql');




var schema = buildSchema(`
  input UserInput {
    username: String
    password: String,
    email: String
  }
  input UserData {
    id: String
    username: String
    email: String
  }
  input siteInput {
    siteUrl: String
    pagename: String
    ftpUsername: String
    ftpPassword: String
    ftpUrl: String
    username: String
  }
  type ownerData {
    id: String
    username: String
    email: String
  }
  type SiteData {
    _id: String
    siteUrl: String
    pagename: String
    ftpUrl: String
    owner: ownerData
  }
  type siteEditable {
    class: String
    value: String
    page: String
  }
 
  type User {
    _id: String
    username: String
    password: String
    email: String
    userType: Int
    sites: [String]
  }
  input siteEditInput {
    username: String
    pagename: String
  }
  type siteSource{
    tags: [siteEditable]
    src: String
  }
  type Query {
    getUser(username: String): User
    getAllUsers:[User]
    getSitesByUser(username: String):[SiteData]
    getEditable(data: siteEditInput): [String]
  }
  input userWithSite{
    username: String
    password: String
    pagename: String
    email: String
    url: String
    ftp: String
    ftpUsername: String
    ftpPassword: String
  }
  type Mutation {
    register(user: UserInput): User
    login(username: String, password: String): User
    addSite(data: siteInput): SiteData
    removeSite(id:String): String
    registerWithSite(user: userWithSite): String
    updatePageData(pageData: String,page: String, username: String, pagename: String): String
    publishSite(username: String, site: String):String
    
    
  }
`);

module.exports = schema;