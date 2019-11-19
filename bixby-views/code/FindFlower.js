const data = require('./lib/flowers.js')
var console = require('console')
module.exports.function = function findFlower () {
  console.debug(data[0])
  return data[0];
}
