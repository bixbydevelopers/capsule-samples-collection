var http = require('http')
var console = require('console')
module.exports.function = function findShoeReturnHeaders () {

  // This call will throw a 404, but since we are using returnHeaders: true,
  // we must check for the error ourselves.
  var errorResponse = http.getUrl('https://my-json-server.typicode.com/bixbydevelopers/capsule-samples-collectio', { format: 'json', returnHeaders: true });
  
  console.log(errorResponse);
  
  if (errorResponse.status === 404) {
    console.log("There was an error.");
  }

  var successResponse = http.getUrl('https://my-json-server.typicode.com/bixbydevelopers/capsule-samples-collection/shoes', { format: 'json', returnHeaders: true });
  
  console.log(successResponse);
  
  return successResponse.parsed;

}
