let nameOfPersone = [];
let ageOfPersone = [];
let numberPersons;

while (true) {
    numberPersons = prompt('enter number Persons');
    if (!isNaN(numberPersons)) {
        break;
    } else {
        alert("please enter a valid number.");
    }
}
for (let i = 0; i < numberPersons; i++) {
    while (true) {
        let name = prompt(`Enter Name ${i + 1}`);
        let age = prompt(`Enter Age ${i + 1}`);
        if (isNaN(name)&& name.length >= 2 && name.length <= 12 && !isNaN(age) && age >= 18 && age <= 60) {
            nameOfPersone.push(name);
            console.log(`Name${i + 1}: ` + nameOfPersone[`${i}`]);
            ageOfPersone.push(age);
            console.log(`Age${i + 1}: ` + ageOfPersone[`${i}`]);
            break;
        } else {
            alert("should be 2-12 characters long. Age should be a number between 18 and 60.");
        }
    }
}
