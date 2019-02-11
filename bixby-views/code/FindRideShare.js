const data = require ('./lib/rideShares.js')
module.exports.function = function findRideShare () {
  return data[0];
}
