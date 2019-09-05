var remoteDB = require('./lib/remoteDB.js')

module.exports.function = function ($vivContext, userData) {
  return remoteDB.deleteUserData(userData)
}
