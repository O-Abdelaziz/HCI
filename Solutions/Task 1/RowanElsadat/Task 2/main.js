const Names = [];
    const Ages = [];

    const numberOfPersons = parseInt(prompt("Enter the number of persons:"));

    for (let i = 0; i < numberOfPersons; i++) {
        let name, age;

        do {
            name = prompt("Enter the name:");
            age = parseInt(prompt("Enter the age:"));
        } while (!(typeof name === "string" && name.length > 2 && name.length < 12 && typeof age === "number" && age > 18 && age < 60));

        Names.push(name);
        Ages.push(age);
    }

    console.log("Names:", Names);
    console.log("Ages:", Ages);

    const table = document.createElement('table');
    const thead = table.createTHead();
    const tbody = table.createTBody();

    const headerRow = thead.insertRow();
    const nameHeader = headerRow.insertCell();
    const ageHeader = headerRow.insertCell();
    nameHeader.textContent = 'Name';
    ageHeader.textContent = 'Age';

    for (let i = 0; i < Names.length; i++) {
        const row = tbody.insertRow();
        const nameCell = row.insertCell();
        const ageCell = row.insertCell();
        nameCell.textContent = Names[i];
        ageCell.textContent = Ages[i];
    }

    document.body.appendChild(table);