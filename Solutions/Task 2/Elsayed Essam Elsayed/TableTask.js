let userNo = parseInt(prompt("No. of users:"));
let arrayNames = [];
let arrayAges = [];



while (isNaN(userNo))
{
    userNo = parseInt(prompt("Please Enter a valid answer"));
}

for(i=0;i<userNo;i++)
{
    let user ="";
    let age = 0;

    user = prompt("Enter name of user " + (i + 1) + ":");

    
    while ((user.length < 2 || user.length > 12) )
    {
        alert("Invalid Name! Name should be a string with length 1 to 13 character.");
        user = prompt("Enter name of user " + (i + 1) + ":");

    }

    arrayNames.push(user);

    age = prompt("Enter age of user " + (i + 1) + ":");
    while (( age < 18 || age > 60) )
    {
        alert("Invalid age! Age should be between 17 and 61.");
        age = prompt("Enter age of user " + (i + 1) + ":");
    }

    arrayAges.push(age);
}

function displayData() {
    const table = document.getElementById("contentTable");
    
    for (let i = 0; i < arrayNames.length; i++) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = arrayNames[i];
        cell2.textContent = arrayAges[i];
    }
}

displayData();

console.log("Names: " + arrayNames);
console.log("Ages: " + arrayAges);