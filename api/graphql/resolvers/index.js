const {
    Login,
    FindUser,
    findByEmail,
    FindAllUsers,
    updateUserSites
  } = require('../models/users')
  
  const LoginUser = input => {
    return Login(input)
      .then(d => {
        return d
      })
      .catch(e => {
        return e
      })
  }
  
  var root = {
    
  }
  
  module.exports = root