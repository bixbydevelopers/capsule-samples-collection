// Data from https://www.infoplease.com/science-health/solar-system/basic-planetary-data
// Color data from http://curious.astro.cornell.edu/about-us/58-our-solar-system/planets-and-dwarf-planets/planet-watching/249-what-color-is-each-planet-intermediate
// TODO move images to assets/images
module.exports = [
  {
    name: "Mercury",
    distance: 36.0, // millions of miles
    periodOfRevolution: 88, // days
    size: 3032.4, // diameter in miles
    atmosphere: "Virtually none",
    moons: 0,
    colors: "gray",
    imageSet: {
      images: [
        {
          url: "/images/mercury.jpg"
        }
      ]
    },
  },
  {
    name: "Venus",
    distance: 67.24, // millions of miles
    periodOfRevolution: 224.7, // days
    size: 7519, // diameter in miles
    atmosphere: "Carbon dioxide",
    moons: 0,
    colors: "yellow",
    imageSet: {
      images: [
        {
          url: "/images/venus.jpg"
        }
      ]
    },
  },
  {
    name: "Earth",
    distance: 92.9, // millions of miles
    periodOfRevolution: 365.2, // days
    size: 7926.2, // diameter in miles
    atmosphere: "Nitrogen oxygen",
    moons: 1,
    colors: ["blue", "white"],
    imageSet: {
      images: [
        {
          url: "/images/earth.jpg"
        }
      ]
    },
  },
  {
    name: "Mars",
    distance: 141.71, // millions of miles
    periodOfRevolution: 687, // days
    size: 7519, //diameter in miles
    atmosphere: "Carbon dioxide",
    moons: 2,
    colors: ["red", "brown"],
    imageSet: {
      images: [
        {
          url: "/images/mars.jpg"
        }
      ]
    },
  },
  {
    name: "Jupiter",
    distance: 483.88, // millions of miles
    periodOfRevolution: 4331.272, // days
    size: 88736, // diameter in miles
    atmosphere: "Hydrogen helium",
    moons: 63,
    colors: ["orange", "white"],
    imageSet: {
      images: [
        {
          url: "/images/jupiter.jpg"
        }
      ]
    },
  },
  {
    name: "Saturn",
    distance: 887.14, // millions of miles
    periodOfRevolution: 10758.792, // days
    size: 120660, // diameter in miles
    atmosphere: "Hydrogen helium",
    moons: 56,
    colors: "gold",
    imageSet: {
      images: [
        {
          url: "/images/saturn.jpg"
        }
      ]
    },
  },
  {
    name: "Uranus",
    distance: 1783.98, // millions of miles
    periodOfRevolution: 30676.8, // days
    size: 32193, // diameter in miles
    atmosphere: "Helium hydrogen methane",
    moons: 27,
    colors: "blue",
    imageSet: {
      images: [
        {
          url: "/images/uranus.jpg"
        }
      ]
    },
  },
  {
    name: "Neptune",
    distance: 2796.46, // millions of miles
    periodOfRevolution: 60258, // days
    size: 30775, // diameter in miles
    atmosphere: "Hydrogen helium methane",
    moons: 13,
    colors: "blue",
      imageSet: {
      images: [
        {
          url: "/images/neptune.jpg"
        }
      ]
    },
  },
  {
    name: "Pluto",
    distance: 3666, // millions of miles
    periodOfRevolution: 90569.6, // days
    size: 1423, // diameter in miles
    atmosphere: "None detected",
    moons: 3,
    colors: "brown",
    imageSet: {
      images: [
        {
          url: "/images/pluto.jpg"
        }
      ]
    },
  },
]
