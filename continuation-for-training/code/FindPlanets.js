var console = require('console')
const planets = require('./lib/planets.js')

module.exports.function = function findPlanets (name, color, sortType) {

  console.log("sortType", sortType)
  var result = planets

  if (name) {
    result = result.filter (function(planet) {
      return planet.name.toLowerCase() == name.toLowerCase()
    });
  }

  if (color) {
    color = String(color)
    result = result.filter (function(planet) {
      colors = [].concat(planet.colors)
      return colors.indexOf(color) != -1;
    });
  }
  
  if (sortType) {
    sortType = String(sortType)
    console.log("sortType", sortType)
    result.sort(function(a, b){return b.size - a.size});
  }

  return result
}
