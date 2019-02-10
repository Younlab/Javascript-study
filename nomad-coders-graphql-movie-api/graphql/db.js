export const people = [
  {
    id: 1,
    name: "Nicolas1",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "Nicolas2",
    age: 18,
    gender: "female"
  },
  {
    id: 3,
    name: "Nicolas3",
    age: 18,
    gender: "female"
  },
  {
    id: 4,
    name: "Nicolas4",
    age: 18,
    gender: "female"
  },
  {
    id: 5,
    name: "Nicolas5",
    age: 18,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
};
