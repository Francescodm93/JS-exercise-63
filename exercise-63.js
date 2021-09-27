const persons = [
  {
    id: 1,
    name: 'Mario',
    surname: 'Rossi',
    age: 22
  },
  {
    id: 2,
    name: 'Maria',
    surname: 'Verdi',
    age: 21
  },
  {
    id: 3,
    name: 'Giovanni',
    surname: 'Rossi',
    age: 32
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id)
      if (person) {
        return resolve(JSON.stringify(person))
      }
      return reject(`Person with id: ${id} doesn't exist`)
    }, 1000);
  }) 
}

async function fetchPersonId() {
  try {
    let personId = await fetchPersonById(4)
    console.log(JSON.parse(personId));
  } catch (err) {
    console.log(err);
  }
}
fetchPersonId();