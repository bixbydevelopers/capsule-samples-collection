module.exports.function = function callManyContacts (contacts) {
  // when linked contacts (input property in action) set max (Many), contacts is an array even if it has only ONE element
  var result = "";
  for (var i=0; i<contacts.length; i++) {
    result += 'Dialing ' + contacts[i].number + ' for ' + contacts[i].name + '\n'
  }
  return result;
}
