function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

for (const name of user) {
  console.log(greeter(name)); //Correct
}

//Alternative Solution using spread syntax for single function call

function greetAll(persons: string[]): string {
  return persons.map(person => `Hello, ${person}`).join('\n');
}
console.log(greetAll(user));