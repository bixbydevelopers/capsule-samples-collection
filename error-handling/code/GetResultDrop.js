var fail = require('fail')
module.exports.function = function getResultDrop (integer) {
  if (integer) {
    throw fail.checkedError('This error will cause a drop.', 'ErrorWhichDrops', {})
  }
  return "This succeeded after the drop.";
}
