const Names = [];
const Ages = [];

const numberOfPersons = parseInt(prompt("Enter the number of persons:"));

for (let i = 0; i < numberOfPersons; i++) {
    let name, age;

    do {
        name = prompt("Enter the name:");
        age = parseInt(prompt("Enter the age:"));
    } while (!(typeof name === "string" && name.length > 2 && name.length < 12 && typeof age === "number" && age > 18 && age < 60));

    Names.push(name);
    Ages.push(age);
}

console.log("Names:", Names);
console.log("Ages:", Ages);