var remoteDB = require('./lib/remoteDB.js')

module.exports.function = function ($vivContext) {
  const bixbyUserId = $vivContext.bixbyUserId
  return remoteDB.getUserData(bixbyUserId)
}
