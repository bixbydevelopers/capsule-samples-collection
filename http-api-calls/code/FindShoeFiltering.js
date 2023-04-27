var http = require('http')
var console = require('console')
module.exports.function = function findShoe (type) {
  console.log("FindShoe filter by a specific type")
  var options = { 
    format: 'json',
    query: {
      type: type
    }
  };
  // makes a GET call to /shoes?type=Formal
  var response = http.getUrl('https://my-json-server.typicode.com/bixbydevelopers/capsule-samples-collection/shoes', options);
  return response;
}
