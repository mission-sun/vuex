class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName, public age) {
      this.fullName = firstName + " " + middleInitial + " " + lastName + " " + age;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName + person.age;
}

let user = new Student("Jane", "M.", "User", 1212);

document.body.innerHTML = greeter(user);
