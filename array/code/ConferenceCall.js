module.exports.function = function conferenceCall (contacts) {
  // when linked contacts (input property in action) set max (Many), contacts is an array even if it has only ONE element
  var rslt = "";
  for (var i=0; i<contacts.length; i++) {
    rslt += 'Dialing ' + contacts[i].number + ' for ' + contacts[i].name + '\n'
  }
  return rslt;
}
