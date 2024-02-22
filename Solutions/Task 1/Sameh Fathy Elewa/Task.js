let NumberOfPerson = parseInt(prompt("Number of person:"));
let NamesArray = [];
let AgesArray = [];

while (isNaN(NumberOfPerson))
{
    NumberOfPerson = parseInt(prompt("Please Enter a correct number of person"));
}

for(n=0;n<NumberOfPerson;n++)
{
    let Person ="";
    let Age = 0;

    Person = prompt("Enter name of Person " + (n + 1) + ":");

    
    while ((Person.length < 3 || Person.length > 14) )
    {
        alert("Name should be a string with length 2 to 15 character.");
        Person = prompt("Enter name of Person " + (n + 1) + ":");

    }

    NamesArray.push(Person);

    Age = prompt("Enter age of Person " + (n + 1) + ":");
    while (( Age < 17 || Age > 59) )
    {
        alert("Age should be between 16 and 60.");
        Age = prompt("Enter Age of Person " + (n + 1) + ":");
    }

    AgesArray.push(Age);
}


console.log("Names: " + NamesArray);
console.log("Ages: " + AgesArray);