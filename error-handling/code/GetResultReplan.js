var fail = require('fail')
module.exports.function = function getResultReplan () {
  throw fail.checkedError('This error will cause a replan.', 'ErrorWhichCausesReplan', {})
  return 'Not implemented';
}
