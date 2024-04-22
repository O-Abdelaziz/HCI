const Names = [];
const Ages = [];
const num_people = parseInt(prompt("Enter number of people: "));

if (isNaN(num_people)){
    prompt("Please Enter A Number ")
}

function entry(){
console.log(num_people);
for ( i = 1 ; i <= num_people ; i++){
    let name, age ;
    do {
     name = prompt("Enter Name: ");
     age = prompt("Enter Age: ");
    } while(!isNaN(name) || isNaN(age) || (age < 18 || age > 60 ) || name.length < 2 || name.length > 12)
 

    Names.push(name);
    Ages.push(age);

}

var table = document.createElement('table');
        var headerRow = table.insertRow();
        var nameHeader = headerRow.insertCell(0);
        var ageHeader = headerRow.insertCell(1);
        nameHeader.textContent = "Name";
        ageHeader.textContent = "Age";

        for (var i = 0; i < num_people; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.textContent = Names[i];
            cell2.textContent = Ages[i];
        }

        document.body.appendChild(table);

console.log ("Names Entered: ", Names);
console.log ("Ages Entered: ", Ages);
}

entry();