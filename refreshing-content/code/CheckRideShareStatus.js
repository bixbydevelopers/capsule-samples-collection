import console from 'console';
export default function checkRideShareStatus({ activity }) {
  //console.log("activity", activity)
  return {
    countdown: activity.countdown - 5,
    rideShare: activity.rideShare,
  };
}
