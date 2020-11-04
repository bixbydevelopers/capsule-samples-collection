var http = require('http')
var console = require('console')
module.exports.function = function createShoe () {
  var shoe = {
    "name": "Test Shoes",
    "description": "Test shoes that get POSTed to the server. They will not persist.",
    "price": {
      "value": 65,
      "currencyType": {
        "currencyCode": "USD",
        "prefixSymbol": "$"
      }
    },
    "type": "Boot"
  };
  
  var options = {
    passAsJson: true, 
    returnHeaders: true,
    format: 'json'
  };

  var response = http.postUrl('http://shoe.bixby.pro/shoes', shoe, options);

  console.log(response);
  return response.parsed;
}
