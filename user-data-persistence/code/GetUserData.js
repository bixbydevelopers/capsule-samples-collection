var http = require('http')
var properties = require('./lib/properties.js')
var remoteDB = require('./lib/remoteDB.js')

module.exports.function = function ($vivContext) {
  const bixbyUserId = $vivContext.userId
  return remoteDB.getUserData(bixbyUserId)
}
