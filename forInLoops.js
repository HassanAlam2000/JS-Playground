// For in loops in JS
// These loops are mostly used to iterate over object.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    occupation: 'Programmer',
}

for (key in person)
    console.log(`${key}: ${person[key]}`);
