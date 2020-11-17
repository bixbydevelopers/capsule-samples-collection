module.exports = {
  GetContactNumber: GetContactNumber,
}

var contact_table = [
  {
    name: 'simon',
    number: 1010020001,
  },
  {
    name: 'paul',
    number: 1010020002,
  },
  {
    name: 'admin',
    number: 1112224444,
  },
  {
    name: 'emily',
    number: 1020020011,
  },
  {
    name: 'sarah',
    number: 1020020012,
  },
]

function GetContactNumber(single_name) {
  // the search is only for demo purpose
  for (var i=0; i<contact_table.length; i++) {
    if (single_name == contact_table[i].name)
      return contact_table[i].number;
  }
  // return a default when not found
  return 9999999999;
}
