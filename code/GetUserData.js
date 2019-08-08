var http = require('http')
var properties = require('./lib/properties.js')

module.exports.function = function ($vivContext) {
  const bixbyUserId = "user3" // TODO: $vivContext.userId
  const url = properties.get("config", "base-url") + properties.get("config", "collection")
  const query = {
    apikey: properties.get("secret", "api-key"),
    q: "{\"" + properties.get("config", "user-id-field") + "\":\"" + bixbyUserId + "\"}"
  }
  const options = {
    format: "json",
    query: query,
    cacheTime: 0
  }
  const response = http.getUrl(url, options)
  if (response && response.length === 1) {
    const userData = response[0][properties.get("config", "user-data-field")]
    userData.$id = response[0]["_id"]
    return userData
  }
}
