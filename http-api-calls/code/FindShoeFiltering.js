var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function findShoe (type) {
  console.log("FindShoe filter by a specific type")
  var options = { 
    format: 'json',
    query: {
      type: type
    }
  };
  // If type is "Formal", then this makes a GET call to /shoes?type=Formal
  var response = http.getUrl(config.get('remote.url') + '/shoes', options);
  return response;
}
