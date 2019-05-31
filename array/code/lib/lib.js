module.exports = {
  GetContactNumber: GetContactNumber,
}

var g_table = [
  {
    name: 'simon',
    number: 6696691234,
  },
  {
    name: 'paul',
    number: 6796792222,
  },
  {
    name: 'admin',
    number: 1112224444,
  },
  {
    name: 'emily',
    number: 4808883388,
  },
  {
    name: 'sarah',
    number: 4808883389,
  },
]

function GetContactNumber(single_name) {
  // the search is only for demo purpose
  for (var i=0; i<g_table.length; i++) {
    if (single_name == g_table[i].name)
      return g_table[i].number;
  }
  // return a default when not found
  return 9119119911;
}
