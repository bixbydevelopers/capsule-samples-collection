import console from 'console';
import ZonedDateTime from './lib/zoned-date-time-polyfill.js';
export default function echoDateTimeExpression({ dateTimeExpression, $vivContext }) {
  ZonedDateTime.setVivContext($vivContext);
  let context = {};

  // To handle datetime override in simulator
  if ($vivContext.testToday) {
    let testToday = new ZonedDateTime(
      $vivContext.timezone,
      $vivContext.testToday
    );
    context.testToday = testToday.getDateTime();
  }

  // Sample code to get datetime info in your JS code
  let first = dateTimeExpression[0];
  if (first.date) {
    console.log('date: ' + JSON.stringify(first.date));
    console.log('ISO date string: ' + inflateDate(first.date, $vivContext).toIsoString());
  } else if (first.dateInterval) {
    console.log(
      'dateInterval start: ' +
        JSON.stringify(first.dateInterval.start) +
        ', end: ' +
        JSON.stringify(first.dateInterval.end)
    );
  } else if (first.dateTime) {
    console.log('dateTime: ' + JSON.stringify(first.dateTime));
  } else if (first.dateTimeInterval) {
    console.log(
      'dateTimeInterval start: ' +
        JSON.stringify(first.dateTimeInterval.start) +
        ', end: ' +
        JSON.stringify(first.dateTimeInterval.end)
    );
  }

  let resultList = [];
  for (var i in dateTimeExpression) {
    let myDateTimeExpression = dateTimeExpression[i];
    myDateTimeExpression.context = context;
    myDateTimeExpression.$type = 'example.timeTestHarness.MyDateTimeExpression';
    resultList.push(myDateTimeExpression);
  }
  return resultList;
}

function inflateDate(date, $vivContext) {
  ZonedDateTime.setVivContext($vivContext);
  if (date) {
    return ZonedDateTime.fromDate(date);
  }
}

function inflateDateTime(dateTime, $vivContext) {
  ZonedDateTime.setVivContext($vivContext);
  if (dateTime) {
    return ZonedDateTime.fromDateTime(dateTime);
  }
}
