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

console.log ("Names Entered: ", Names);
console.log ("Ages Entered: ", Ages);
}

entry();