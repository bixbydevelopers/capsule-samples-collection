module.exports.function = function callOneContact (contact) {
  // this handles only a single contact
  return 'Dialing ' + contact.number + ' for ' + contact.name;
  // since in action CallOneContact set max (One), the following code does NOT work
  // return 'Dialing [0] ' + contact[0].number + ' for ' + contact[0].name;
}
