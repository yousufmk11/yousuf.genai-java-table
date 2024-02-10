let inputNumber = prompt("Enter Table No:");

// Input ki validation
if (inputNumber !== null && !isNaN(inputNumber)) {
    inputNumber = parseInt(inputNumber);

    for (let i = inputNumber; i <= 20; i++) {
        document.write("<h2>" + i + " Table</h2>");
        document.write("<table border='1'>");
        document.write("<tr><th>Multiplier</th><th>Result</th></tr>");

        for (let j = 1; j <= 10; j++) {
            let result = i * j;
            document.write("<tr><td>" + i + " x " + j + "</td><td>" + result + "</td></tr>");
        }

        document.write("</table>");
    }
} else {
    alert("Please enter a valid number.");
}