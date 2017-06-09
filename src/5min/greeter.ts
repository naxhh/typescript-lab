class Student {
  fullName: string
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullName = [firstName, middleName, lastName].join(' ')
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

var user = new Student('John', 'M', 'Doe')

console.log(greeter(user))
