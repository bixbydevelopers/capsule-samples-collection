var http = require('http')
var properties = require('./lib/properties.js')

module.exports.function = function ($vivContext, userData) {
  const bixbyUserId = "user3" // TODO: $vivContext.userId
  const dbUserId = userData.$id
  console.debug(JSON.stringify(userData), dbUserId)
  if (dbUserId) {
    // Already exists. Delete
    return deleteUser(bixbyUserId, dbUserId, userData)
  } else {
    // Doesn't exist
    return true
  }
}

function deleteUser(bixbyUserId, dbUserId, userData) {
  const url = properties.get("config", "base-url") + properties.get("config", "collection") + "/" + dbUserId
  const query = {
    apikey: properties.get("secret", "api-key")
  }
  const options = {
    format: "json",
    query: query
  }
  const response = http.deleteUrl(url, {}, options)
  if (response) {
    return true
  } else {
    return false
  }
}
