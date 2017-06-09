interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

var user = { firstName: 'John', lastName: 'Doe'}

console.log(greeter(user))
