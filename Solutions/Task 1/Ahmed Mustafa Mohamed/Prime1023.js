const ArrayNames = [];
const ArrayAges = [];

function isValidName(name) {
    return typeof name === 'string' && name.length > 2 && name.length < 12;
}

function isValidAge(age) {
    return typeof age === 'number' && age > 18 && age < 60;
}

function main() {
    const numPersons = parseInt(prompt("Enter the number of persons:"));

    for (let i = 0; i < numPersons; i++) {
        let name = prompt(`Enter name for person ${i + 1}:`);
        let age = parseInt(prompt(`Enter age for person ${i + 1}:`));

        if (isValidName(name) && isValidAge(age)) {
            ArrayNames.push(name);
            ArrayAges.push(age);
        } else {
            console.log(`Invalid input for person ${i + 1}. Please try again.`);
            i--; 
        }
    }

    console.log("Names and Ages:");
    for (let i = 0; i < ArrayNames.length; i++) {
        console.log(`Name: ${ArrayNames[i]}, Age: ${ArrayAges[i]}`);
    }
}

main();