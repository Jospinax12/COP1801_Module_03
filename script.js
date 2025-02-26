// JavaScript Program for Module 3

// 1️⃣ For Loop: Count from 0 to 10 and check if odd or even
let countMessage = "";
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        countMessage += `Count ${i} is even<br>`;
    } else {
        countMessage += `Count ${i} is odd<br>`;
    }
}
document.getElementById("countResult").innerHTML = countMessage;

// 2️⃣ Do While Loop: Ask user for a number and count up to it
let myNum;
do {
    myNum = parseInt(prompt("Enter a number between 5 and 20:"));
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

let counter = 1;
let doWhileMessage = "";
do {
    doWhileMessage += `Counter: ${counter}<br>`;
    counter++;
} while (counter <= myNum);
document.getElementById("doWhileResult").innerHTML = doWhileMessage;

// 3️⃣ Array of Subjects
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display array values in a readable format using foreach()
let subjectsFormatted = "<ul>";
subjects.forEach(subject => {
    subjectsFormatted += `<li>${subject}</li>`;
});
subjectsFormatted += "</ul>";
document.getElementById("subjectsList").innerHTML = subjectsFormatted;

// Display array values separated by commas in one statement
document.getElementById("subjectsComma").innerHTML = subjects.join(", ");
