let flag = false;
let Person_No;
let table;
let tr = [];
let td1 = [];
let td2 = [];
let names = [] , ages = [];

do{
    if (flag) Person_No = prompt("Enter Persons Number \"Correctly\" \n(Choose a number between 1 and 50):")
    else Person_No = prompt("Enter Persons Number (Choose a number between 1 and 50):");
    flag = true
} while(isNaN(Person_No) || Number(Person_No)<1||Number(Person_No)>50);

for(i=0;i<Person_No;i++){
    let NameFlag = AgeFlag = false;
    do{
        if(NameFlag == false) names[i] = prompt("Enter Person "+(i+1)+" Name (between 3 and 12 characters)")
        else  names[i] = prompt("Enter Person "+(i+1)+" Name \"Correctly\" (between 3 and 12 characters)")
        NameFlag = true
    } while(!isNaN(names[i])||names[i].length<3||names[i].length>12);
    do{
        if(AgeFlag == false) ages[i] = prompt("Enter Person "+(i+1)+" Age (between 18 and 60 years old)")
        else ages[i] = prompt("Enter Person "+(i+1)+" Age \"Correctly\" (between 18 and 60 years old)")
        AgeFlag = true
    } while(isNaN(ages[i]) || ages[i]<18 || ages[i]>60);
}
table = document.querySelectorAll("table")[0]
for(i=0;i<Person_No;i++){
    tr[i] = document.createElement("tr");
    td1[i] = document.createElement("td");
    td2[i] = document.createElement("td");
    td1[i].textContent = names[i];
    td2[i].textContent = ages[i];
    tr[i].appendChild(td1[i]);
    tr[i].appendChild(td2[i]);
    console.log(tr[i])
    table.appendChild(tr[i]);
}
