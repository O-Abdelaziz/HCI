let numberOfPersons = parseInt(prompt("Enter the number of persons:"));
let ArrayNames = [];
let ArrayAges = [];

for (let i = 0; i < numberOfPersons; i++) {
  let name = "";
  let age = 0;

  while (true) {
    name = prompt("Enter the name of person " + (i + 1) + ":");

    if (name.length > 2 && name.length < 12) {
      ArrayNames.push(name);
      break;
    } else {
      alert("Invalid name. Please enter a name with length more than 2 and less than 12.");
    }
  }

  while (true) {
    age = parseInt(prompt("Enter the age of person " + (i + 1) + ":"));

    if (!isNaN(age) && age > 18 && age < 60) {
      ArrayAges.push(age);
      break;
    } else {
      alert("Invalid age. Please enter an age between 18 and 60.");
    }
  }
}

console.log("Names: " + ArrayNames);
console.log("Ages: " + ArrayAges);
