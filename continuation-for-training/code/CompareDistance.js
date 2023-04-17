export default function compareDistance({ planet, targetPlanet }) {
  return Math.abs(planet.distance - targetPlanet.distance);
}
