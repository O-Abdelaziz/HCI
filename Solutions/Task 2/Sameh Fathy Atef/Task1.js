var NumberOfPerson = prompt("How many persons?");
        var NamesArray = [];
        var AgesArray = [];

        for (var n = 0; n < NumberOfPerson; n++) {
            var Person = "";
            var Age = 0;

            // Prompt for name
            Person = prompt("Enter name of Person " + (n + 1) + ":");

            // Validate name length
            while (Person.length < 3 || Person.length > 14) {
                alert("Name should be a string with length 3 to 14 characters.");
                Person = prompt("Enter name of Person " + (n + 1) + ":");
            }

            NamesArray.push(Person);

            // Prompt for age
            Age = parseInt(prompt("Enter age of Person " + (n + 1) + ":"));

            // Validate age
            while (isNaN(Age) || Age < 17 || Age > 59) {
                alert("Age for " + Person + " should be between 17 and 59.");
                Age = parseInt(prompt("Enter age of Person " + (n + 1) + ":"));
            }

            AgesArray.push(Age);
        }

        // Display user data in a table
        var table = document.createElement('table');
        var headerRow = table.insertRow();
        var nameHeader = headerRow.insertCell(0);
        var ageHeader = headerRow.insertCell(1);
        nameHeader.textContent = "Name";
        ageHeader.textContent = "Age";

        for (var i = 0; i < NumberOfPerson; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.textContent = NamesArray[i];
            cell2.textContent = AgesArray[i];
        }

        document.body.appendChild(table);

        // Log user data to console
        console.log("Names: " + NamesArray.join(", "));
        console.log("Ages: " + AgesArray.join(", "));