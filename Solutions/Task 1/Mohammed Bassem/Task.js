let noOfPersons = parseInt(prompt("Enter the number of persons:"));
let ArrayNames = [];
let ArrayAges = [];

for (let i = 0; i < noOfPersons; i++) {
  let name = "";
  let age = 0;

  while (true) {
    name = prompt("Enter the name of person " + (i + 1) + ":");
    if (name.length > 2 && name.length < 12) {
      break;
    } else {
      alert("Invalid name. Name should be a string with length more than 2 and less than 12.");
    }
  }
  ArrayNames.push(name);

  // take ages of persons
  while (true) {
    age = prompt("Enter the age of person " + (i + 1) + " (must be between 19 and 60):");
    if (age > 18 && age < 60) {
      break;
    } else {
      alert("Invalid age. Age should be a number with value more than 18 and less than 60.");
    }
  }
  ArrayAges.push(age);
}

// show all names & ages in console
console.log("Names: " + ArrayNames);
console.log("Ages: " + ArrayAges);