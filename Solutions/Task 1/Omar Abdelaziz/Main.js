const ArrayNames = [];
const ArrayAges = [];

const noOfPersons = parseInt(prompt("Enter the number of persons:"));

for (let i = 0; i < noOfPersons; i++) {
    let name, age;

    do {
        name = prompt("Enter the name:");
        age = parseInt(prompt("Enter the age:"));
    } while (!(typeof name === "string" && name.length > 2 && name.length < 12 && typeof age === "number" && age > 18 && age < 60));

    ArrayNames.push(name);
    ArrayAges.push(age);
}

console.log("Names:", ArrayNames);
console.log("Ages:", ArrayAges);
