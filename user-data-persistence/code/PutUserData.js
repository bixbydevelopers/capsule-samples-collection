var remoteDB = require('./lib/remoteDB.js')

module.exports.function = function ($vivContext, userData) {
  const bixbyUserId = $vivContext.bixbyUserId
  return remoteDB.putUserData(bixbyUserId, userData)
}
