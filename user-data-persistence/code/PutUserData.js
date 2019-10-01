var remoteDB = require('./lib/remoteDB.js')

module.exports.function = function ($vivContext, userData) {
  const bixbyUserId = $vivContext.userId
  return remoteDB.putUserData(bixbyUserId, userData)
}
