var findPlanets = require('./FindPlanets')
module.exports.function = function findThatPlanet (name, color) {
  return findPlanets.function(name, color, null)
}
