const readline = require('readline');

const ArrayNames = [];
const ArrayAges = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isValidName(name) {
  return typeof name === 'string' && name.length > 2 && name.length < 12;
}

function isValidAge(age) {
  return !isNaN(age) && age > 18 && age < 60;
}

function takeInput() {
  rl.question("Enter the number of persons: ", (numPersons) => {
    numPersons = parseInt(numPersons);

    function askPersonDetails(index) {
      if (index === numPersons) {
        rl.close();
        console.log("Names:", ArrayNames);
        console.log("Ages:", ArrayAges);
        return;
      }

      rl.question(`Enter name for person ${index + 1}: `, (name) => {
        rl.question(`Enter age for person ${index + 1}: `, (age) => {
          age = parseInt(age);

          if (isValidName(name) && isValidAge(age)) {
            ArrayNames.push(name);
            ArrayAges.push(age);
          } else {
            console.log(`Invalid input for person ${index + 1}. Please try again.`);
          }

          askPersonDetails(index + 1);
        });
      });
    }

    askPersonDetails(0);
  });
}

takeInput();
