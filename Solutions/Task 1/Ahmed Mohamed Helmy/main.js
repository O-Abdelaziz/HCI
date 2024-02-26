let names = [];
let ages = [];
let numPersons;

while (true) {
    numPersons = prompt('Enter Number Of Persons');
    if (!isNaN(numPersons)) {
        break;
    } else {
        alert("Please enter a valid number for persons.");
    }
}

for (let i = 0; i < numPersons; i++) {
    while (true) {
        let name = prompt(`Enter Name ${i + 1}`);
        let age = prompt(`Enter Age ${i + 1}`);
      //Ahmed      Helmy
        if (isNaN(name)&& name.length >= 2 && name.length <= 12 && !isNaN(age) && age >= 18 && age <= 60) {
            names.push(name);
            console.log(`Name${i + 1}: ` + names[`${i}`]);
            ages.push(age);
            console.log(`Age${i + 1}: ` + ages[`${i}`]);
            break;
        } else {
            alert("Please enter valid name and age. Name should be 2-12 characters long. Age should be a number between 18 and 60.");
        }
    }
}
