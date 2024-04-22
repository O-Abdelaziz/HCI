const names = [];
const ages = [];
const numPeople = parseInt(prompt("Enter number of people: "));

if (isNaN(numPeople)) {
    prompt("Please Enter A Number ")
}

function entry() {
    console.log(numPeople);
    for (let i = 1; i <= numPeople; i++) {
        let name, age;
        do {
            name = prompt("Enter Name: ");
            age = prompt("Enter Age: ");
        } while (!isNaN(name) || isNaN(age) || (age < 18 || age > 60) || name.length < 2 || name.length > 12)

        names.push(name);
        ages.push(age);
    }

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const ageHeader = headerRow.insertCell(1);
    nameHeader.textContent = "Name";
    ageHeader.textContent = "Age";

    for (let i = 0; i < numPeople; i++) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = names[i];
        cell2.textContent = ages[i];
    }

    document.body.appendChild(table);

    console.log("Names Entered: ", names);
    console.log("Ages Entered: ", ages);
}

entry();
