const people = [
  {
    firstName: 'Joe',
    lastName: 'Smith',
    gender: 'Male',
  },
  {
    firstName: 'Meg',
    lastName: 'Ana',
    gender: 'Female',
  },
];

export default function findPersons({ searchTerm }) {
  if (!searchTerm) {
    return people;
  }

  return people.filter((person) => {
    return (
      person.firstName.toLowerCase().includes(searchTerm) ||
      person.lastName.toLowerCase().includes(searchTerm)
    );
  });
}
