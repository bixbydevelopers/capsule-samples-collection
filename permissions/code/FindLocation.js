import console from 'console';

export default function findLocation({ myLocation, profile }) {
  //console.log ("myLocation = " + JSON.stringify(myLocation))
  //console.log ("profile = " + JSON.stringify(profile))

  // If either null, simple no-result shown. A production capsule would typically
  // have more logic here
  if (!myLocation || !profile) {
    return null;
  }

  return {
    myFullName: profile.structuredName,
    myLocation: myLocation,
  };
}
