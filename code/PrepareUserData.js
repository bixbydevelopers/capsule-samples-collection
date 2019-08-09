module.exports.function = function ($vivContext, previousUserData, boss, minions) {
  // Use previous data or default init
  const userData = previousUserData || { version: 1, minions: []}

  // Example of replacing single property with a new one
  if (boss) {
    userData.boss = boss
  }

  // Example of appending multiple values to a property
  if (minions) {
    userData.minions = userData.minions.concat(minions)
  }

  return userData
}
