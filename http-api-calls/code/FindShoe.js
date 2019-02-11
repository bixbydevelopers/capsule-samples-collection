module.exports.function = function findShoe () {
  console.log("FindShoe without any parameter!)")
  // Read the remote.url value from capsule.properties
  var response = http.getUrl(config.get('remote.url') + '/shoes', { format: 'json' });
  return response;
}
