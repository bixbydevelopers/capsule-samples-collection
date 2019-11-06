/**  
 * restDB Implementation of Remote Database CRUD Interface
 * 
 * In the remote DB Collection, a UserData Document looks like this:
 * {
 *   _id: <dbUserId>
 *   userIdField: <bixbyUserId>
 *   userDataField: {
 *     <property1>: <bixbyConceptValue1>
 *     <property2>: <bixbyConceptValue2>
 *     ...
 *   }
 * }
 **/
var http = require('http')
var properties = require('./../properties.js')

module.exports = {
  /**
   * DELETE UserData
   * params: userData
   **/
  deleteUserData: deleteUserData,
  /**
   * READ UserData if exists, otherwise return nothing
   * params: bixbyUserId
   **/
  getUserData: getUserData,
  /**
   * UPDATE UserData if exists, otherwise CREATE UserData
   * params: bixbyUserId, userData
   */
  putUserData: putUserData
}

function createUserData(bixbyUserId, userData) {
  const url = properties.get("config", "baseUrl")
  const query = {
    apikey: properties.get("secret", "apiKey")
  }
  const body = {}
  body[properties.get("config", "userIdField")] = bixbyUserId
  body[properties.get("config", "userDataField")] = JSON.stringify(userData)
  const options = {
    format: "json",
    query: query,
    cacheTime: 0
  }
  const response = http.postUrl(url, body, options)
  if (response) {
    userData = response[properties.get("config", "userDataField")]
    userData.$id = response["_id"]
    return userData
  }
}

function deleteUserData(userData) {
  const dbUserId = userData.$id
  if (dbUserId) {
    // Exists. Delete
    const url = properties.get("config", "baseUrl") + "/" + dbUserId
    const query = {
      apikey: properties.get("secret", "apiKey")
    }
    const options = {
      format: "json",
      query: query,
      cacheTime: 0
    }
    const response = http.deleteUrl(url, {}, options)
    if (response) {
      return true
    } else {
      return false
    }
  } else {
    // Doesn't exist.
    return
  }
}

function getUserData(bixbyUserId) {
  const url = properties.get("config", "baseUrl")
  const query = {
    apikey: properties.get("secret", "apiKey"),
    q: "{\"" + properties.get("config", "userIdField") + "\":\"" + bixbyUserId + "\"}"
  }
  const options = {
    format: "json",
    query: query,
    cacheTime: 0
  }
  const response = http.getUrl(url, options)
  if (response && response.length === 1) {
    const userData = response[0][properties.get("config", "userDataField")]
    userData.$id = response[0]["_id"]
    return userData
  } else {
    // Doesn't exist
    return
  }
}

function putUserData(bixbyUserId, userData) {
  const dbUserId = userData.$id
  delete userData.$id
  delete userData.$type
  if (dbUserId) {
    // Already exists. Update
    return updateUserData(bixbyUserId, dbUserId, userData)
  } else {
    // New user. Create
    return createUserData(bixbyUserId, userData)
  }
}

function updateUserData(bixbyUserId, dbUserId, userData) {
  const url = properties.get("config", "baseUrl") + "/" + dbUserId
  const query = {
    apikey: properties.get("secret", "apiKey")
  }
  const body = {}
  body[properties.get("config", "userIdField")] = bixbyUserId
  body[properties.get("config", "userDataField")] = JSON.stringify(userData)
  const options = {
    format: "json",
    query: query,
    cacheTime: 0
  }
  const response = http.putUrl(url, body, options)
  if (response) {
    userData = response[properties.get("config", "userDataField")]
    userData.$id = response["_id"]
    return userData
  }
}
