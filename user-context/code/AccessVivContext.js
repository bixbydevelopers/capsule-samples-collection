// The $vivContext below is not part of your AccessVivContext.model.bxb,
// but it will be provided as input to the accessVivContext function
module.exports.function = function accessVivContext (dummyInput, $vivContext) {
  
  // In the Debug Console panel, this logs to 
  // Actions -> vivContext.AccessVivContext -> functions -> vivContext.AccessVivContext -> logs
  console.log($vivContext);
  
  return $vivContext.locale;
}
