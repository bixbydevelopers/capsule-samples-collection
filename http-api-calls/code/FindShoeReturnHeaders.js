var http = require('http')
var console = require('console')
module.exports.function = function findShoeReturnHeaders () {

  // This call will throw a 500, but since we are using returnHeaders: true,
  // we must check for the error ourselves.
  var errorResponse = http.getUrl('http://shoe.bixby.pro/error', { format: 'json', returnHeaders: true });
  
  console.log(errorResponse);
  
  if (errorResponse.status === 500) {
    console.log("There was an error.");
  }

  var successResponse = http.getUrl('http://shoe.bixby.pro/shoes', { format: 'json', returnHeaders: true });
  
  console.log(successResponse);
  
  return successResponse.parsed;

}
