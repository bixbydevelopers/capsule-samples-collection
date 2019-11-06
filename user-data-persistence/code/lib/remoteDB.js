/**  
 * Remote Database CRUD Interface for a Bixby UserData Structure
 * 
 * The functions here pass the UserData back and forth between the remote DB and Bixby.
 * In doing so, they perform the transformations required to map how the UserData is stored in each system.
 * 
 * In Bixby, the UserData Structure looks like this:
 * {
 *   $id: <dbUserId> // Convenience key in Bixby to store provider specific ids (see https://bixbydevelopers.com/dev/docs/dev-guide/developers/actions.js-actions#provider-specific-identifiers)
 *   $type: <bixbyConceptType> // Bixby automaticaly adds this labeling to all Concepts, but we don't need to save it to the remote DB
 *   <property1>: <bixbyConceptValue1>
 *   <property2>: <bixbyConceptValue2>
 *   ...
 * }
 * The bixbyUserId resides in `$vivContext.bixbyUserId=<bixbyUserId>`, so we pass it in as a separate param.
 **/
var http = require('http')
var properties = require('./properties.js')
var remoteDB = require('./services/restdb.js')

module.exports = {
  /**
   * DELETE UserData
   * params: userData
   **/
  deleteUserData: remoteDB.deleteUserData,
  /**
   * READ UserData if exists, otherwise return nothing
   * params: bixbyUserId
   **/
  getUserData: remoteDB.getUserData,
  /**
   * UPDATE UserData if exists, otherwise CREATE UserData
   * params: bixbyUserId, userData
   */
  putUserData: remoteDB.putUserData
}
