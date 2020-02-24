//Here is the schema to create uri for app-launch to make call using phone app
const scheme = "bixby";
const host = "com.samsung.android.incallui";
const actionId = "MakeCall";
const uriType = "punchOut";

// Mocked data or we can use API instead
const contactEntries = require('lib/ContactEntries.js');

module.exports.function = function MakeCall(name, callMode) {

  // Get correct name, we can also use fuzzy match from textLib 
  // https://bixbydevelopers.com/dev/docs/reference/JavaScriptAPI/textLib
  let contact = contactEntries[name];

  var number = "phoneNumber" + "=" + contact.phone;
  var mode = "callMode" + "=" + callMode;
  var uri = scheme+"://"+host+"/" + actionId + "/" + uriType + "?" + number + "&" + mode;
  
  return {
    uri : uri
  }
}