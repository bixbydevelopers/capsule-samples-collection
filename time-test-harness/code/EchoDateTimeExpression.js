var dates = require('dates');
module.exports.function = function echoDateTimeExpression(dateTimeExpression, $vivContext) {
  let context = {};
  if ($vivContext.testToday) {
    let testToday = new dates.ZonedDateTime($vivContext.timezone, $vivContext.testToday);
    context.testToday = testToday.getDateTime();
  }

  let resultList = [];
  for (var i in dateTimeExpression) {
    let myDateTimeExpression = dateTimeExpression[i];
    myDateTimeExpression.context = context;
    myDateTimeExpression.$type = "example.timeTestHarness.MyDateTimeExpression";
    resultList.push(myDateTimeExpression);
  }
  return resultList;
}
