var fail = require('fail')
module.exports.function = function getResultHalt () {
  throw fail.checkedError('This error will cause a halt.', 'ErrorWhichHalts', {})
  return 'Not implemented';
}
