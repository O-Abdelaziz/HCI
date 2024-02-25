let ArrayNames = [];
let ArrayAges = [];

for (let i = 0; i < 3; i++) {
    let name, age;
    do {
        name = prompt(`Enter name for person ${i + 1}:`);
    } while (name.length < 3 || name.length > 11);

    do {
        age = prompt(`Enter age for person ${i + 1}:`);
    } while (isNaN(age) || age < 19 || age > 59);

    ArrayNames.push(name);
    ArrayAges.push(parseInt(age));
}

console.log("Names:", ArrayNames);
console.log("Ages:", ArrayAges);
