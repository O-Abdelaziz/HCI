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


console.log("Names: " + arrayNames);
console.log("Ages: " + arrayAges);