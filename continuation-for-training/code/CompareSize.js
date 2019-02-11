module.exports.function = function compareSize (planet, targetPlanet) {
  return Math.abs(10 * planet.size / targetPlanet.size) / 10;
}
