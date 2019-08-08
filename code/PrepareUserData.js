module.exports.function = function ($vivContext, previousUserData) {
  if (previousUserData) {
    previousUserData.state="5"
    return previousUserData
  } else {
    return {
      state: 0
    }
  }
}
