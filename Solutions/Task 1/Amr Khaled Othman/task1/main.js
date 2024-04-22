let flag = false
let Person_No
do{
    if (flag) Person_No = prompt("Enter Persons Number \"Correctly\" \n(Choose a number between 2 and 10):")
    else Person_No = prompt("Enter Persons Number (Choose a number between 2 and 10):")
    flag = true
} while(isNaN(Person_No) || Number(Person_No)<2||Number(Person_No)>10)
let names = [] , ages = []
for(i=0;i<Person_No;i++){
    let NameFlag = AgeFlag = false
    do{
        if(NameFlag == false) names[i] = prompt("Enter Person "+(i+1)+" Name (between 3 and 12 characters)")
        else  names[i] = prompt("Enter Person "+(i+1)+" Name \"Correctly\" (between 3 and 12 characters)")
        NameFlag = true
    } while(!isNaN(names[i])||names[i].length<3||names[i].length>12)
    do{
        if(AgeFlag == false) ages[i] = prompt("Enter Person "+(i+1)+" Age (between 18 and 60 years old)")
        else ages[i] = prompt("Enter Person "+(i+1)+" Age \"Correctly\" (between 18 and 60 years old)")
        AgeFlag = true
    } while(isNaN(ages[i]) || ages[i]<18 || ages[i]>60)
}
console.log("Persons Number : "+Person_No)
for(i=0;i<Person_No;i++){
    console.log("Person "+(i+1)+" IS Named : "+names[i]+" And Is : "+ages[i]+" Years OLd")
}
