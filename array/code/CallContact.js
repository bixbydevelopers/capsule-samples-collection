module.exports.function = function callContact (contact) {
  // this handles only a single contact
  return 'Dialing ' + contact.number + ' for ' + contact.name;
  // when linked contact (input property in action) set max (One), the follow code does NOT work
  // return 'Dialing [0] ' + contact[0].number + ' for ' + contact[0].name;
}
