module.exports.function = function submitSurvey (fullName, email, comments, isSigningUp, favoriteColors, funMeter, age) {
  // Simply construct an object from the inputs and return it.
  // This is where your API call to submit a survey will be (if desired).
  return {
    fullName: fullName,
    email: email,
    comments: comments,
    isSigningUp: isSigningUp,
    favoriteColors: favoriteColors,
    funMeter: funMeter,
    age: age,
  };
}
