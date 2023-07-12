import planets from './lib/planets.js';

export default function findPlanets( { name, color, sortType } ) {

  var result = planets;

  if (name) {
    result = result.filter(function (planet) {
      return planet.name.toLowerCase() == name.toLowerCase();
    });
  }
  if (color) {
    color = String(color);
    result = result.filter(function (planet) {
      var colors = [].concat(planet.colors);
      return colors.indexOf(color) != -1;
    });
  }

  if (sortType) {
    sortType = String(sortType);
    result.sort(function (a, b) {
      return b.size - a.size;
    });
  }

  return result;
}
