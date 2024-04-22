
let arrayNames = [];
let arrayAges = [];


function getValidNumberOfPersons() {
    let num;
    do {
        num = parseInt(prompt("Enter the number of persons:"));
    } while (isNaN(num) || num < 1);
    return num;
}


function getValidName(index) {
    let name;
    do {
        name = prompt(`Enter name for person ${index + 1}:`);
    } while (!name || name.length <= 2 || name.length >= 12);
    return name;
}


function getValidAge(index) {
    let age;
    do {
        age = parseInt(prompt(`Enter age for person ${index + 1}:`));
    } while (isNaN(age) || age <= 18 || age >= 60);
    return age;
}

function collectAndDisplayData() {
    const numberOfPersons = getValidNumberOfPersons();
    for (let i = 0; i < numberOfPersons; i++) {
      
        const name = getValidName(i);
        const age = getValidAge(i);

        arrayNames.push(name);
        arrayAges.push(age);
    }

    
    console.log("Collected Names: ", arrayNames.join(', '));
    console.log("Collected Ages: ", arrayAges.join(', '));
}


collectAndDisplayData();
