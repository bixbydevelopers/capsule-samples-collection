var console = require('console')
var lib = require('lib/lib.js')

module.exports.function = function getContactByName (name) {
  var result = []
  console.log('name.length = ' + name.length)
  for (var i=0; i<name.length; i++) {
    result.push({name: name[i], number: lib.GetContactNumber(name[i])})
  }
  return result;
}
