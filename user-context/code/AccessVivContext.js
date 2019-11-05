// Request access to the $vivContext by declaring it as a parameter
module.exports.function = function accessVivContext ($vivContext) {  
  return JSON.stringify($vivContext, undefined, 1);
}
