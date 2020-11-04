var http = require('http')
var console = require('console')
var config = require('config')
module.exports.function = function findShoe () {
  // Instead of hard coding the URL, you can read the remote.url value
  // from capsule.properties, this would look like this
  // var response = http.getUrl(config.get('remote.url') + '/shoes', { format: 'json' });

  var response = http.getUrl('http://shoe.bixby.pro/shoes', { format: 'json' });
  console.log ("response = " + response)
  return response;
}
