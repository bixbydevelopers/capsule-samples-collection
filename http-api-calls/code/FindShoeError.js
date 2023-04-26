var http = require('http')
var console = require('console')
var fail = require('fail')
module.exports.function = function findShoeError () {
  try {
    // This call will throw a 404, and the http library will throw a JavaScript error that you can catch.
    var response = http.getUrl('https://my-json-server.typicode.com/bixbydevelopers/capsule-samples-collectio', { format: 'json' });
  } catch (e) {
    console.log(e);
    throw fail.checkedError('This error will cause a halt.', 'ErrorWhichHalts', {})
  }
  return 'Not implemented';
}
