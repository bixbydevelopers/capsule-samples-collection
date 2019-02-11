module.exports.function = function checkRideShareStatus (activity) {
  console.log("activity", activity)
  return {
    countdown: activity.countdown - 5,
    rideShare: activity.rideShare
  }
}
