export default function constructActivity({ countdown }) {
  return {
    countdown: countdown,
    rideShare: {
      sourcePoint: {
        longitude: -121.890735,
        latitude: 37.334282,
      },
      destinationPoint: {
        longitude: -121.8942,
        latitude: 37.334291,
      },
    },
  };
}
