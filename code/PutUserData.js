var http = require('http')
var properties = require('./lib/properties.js')

module.exports.function = function ($vivContext, userData) {
  const bixbyUserId = "user3" // TODO: $vivContext.userId
  const dbUserId = userData.$id
  delete userData.$id
  delete userData.$type
  if (dbUserId) {
    // Already exists. Update
    return updateUser(bixbyUserId, dbUserId, userData)
  } else {
    // New user. Create
    return createUser(bixbyUserId, userData)
  }
}

function createUser(bixbyUserId, userData) {
  const url = properties.get("config", "base-url") + properties.get("config", "collection")
  const query = {
    apikey: properties.get("secret", "api-key")
  }
  const body = {}
  body[properties.get("config", "user-id-field")] = bixbyUserId
  body[properties.get("config", "user-data-field")] = JSON.stringify(userData)
  const options = {
    format: "json",
    query: query
  }
  const response = http.postUrl(url, body, options)
  if (response) {
    userData = response[properties.get("config", "user-data-field")]
    userData.$id = response["_id"]
    return userData
  }
}

function updateUser(bixbyUserId, dbUserId, userData) {
  const url = properties.get("config", "base-url") + properties.get("config", "collection") + "/" + dbUserId
  const query = {
    apikey: properties.get("secret", "api-key")
  }
  const body = {}
  body[properties.get("config", "user-id-field")] = bixbyUserId
  body[properties.get("config", "user-data-field")] = JSON.stringify(userData)
  const options = {
    format: "json",
    query: query
  }
  const response = http.putUrl(url, body, options)
  if (response) {
    userData = response[properties.get("config", "user-data-field")]
    userData.$id = response["_id"]
    return userData
  }
}
