var flag = false
do{
    if (flag) Person_No = prompt("Enter Persons Number \"Correctly\" \n(Choose a number between 2 and 10):")
    else var Person_No = prompt("Enter Persons Number (Choose a number between 2 and 10):")
    flag = true
} while(isNaN(Person_No) || Number(Person_No)<2||Number(Person_No)>10)
var names = [] , ages = []
for(i=0;i<Person_No;i++){
    var NameFlag = AgeFlag = false
    do{
        if(NameFlag == false) names[i] = prompt("Enter Person "+(i+1)+" Name")
        else  names[i] = prompt("Enter Person "+(i+1)+" Name \"Correctly\"")
        NameFlag = true
    } while(!isNaN(names[i])||names[i].length<3)
    do{
        if(AgeFlag == false) ages[i] = prompt("Enter Person "+(i+1)+" Age (between 18 and 45 years old)")
        else ages[i] = prompt("Enter Person "+(i+1)+" Age \"Correctly\" (between 18 and 45 years old)")
        AgeFlag = true
    } while(isNaN(ages[i]) || ages[i]<18 || ages[i]>45)
}
console.log("Persons Number : "+Person_No)
for(i=0;i<Person_No;i++){
    console.log("Person "+(i+1)+" Name : "+names[i]+" And His Age : "+ages[i])
}
