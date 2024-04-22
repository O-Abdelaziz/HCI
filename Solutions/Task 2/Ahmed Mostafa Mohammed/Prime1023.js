const ArrayNames = [];
const ArrayAges = [];

function isValidName(name) {
    return typeof name === 'string' && name.length > 2 && name.length < 12;
}

function isValidAge(age) {
    return typeof age === 'number' && age > 18 && age < 60;
}

function displayData() {
    const table = document.getElementById("dataTable");
    
    for (let i = 0; i < ArrayNames.length; i++) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = ArrayNames[i];
        cell2.textContent = ArrayAges[i];
    }
}

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function changeColor(element) {
    element.style.backgroundColor = getRandomColor();
}

function addSquare() {
    var newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.style.backgroundColor = getRandomColor();
    newSquare.onclick = function() {
        changeColor(this);
    };
    document.querySelector('.container').appendChild(newSquare);
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

    displayData();
}

main();