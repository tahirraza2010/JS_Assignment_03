// Chapter 10 (if statements)
// Q1
// var city = prompt("Enter your city")
// if (city === "karachi") { 
//   alert("Welcome user"); 
// } else {
//   alert("This site for only Karachi");
// }

// Q2
// var x = prompt("Enter the value of X"); // Example value for x
// var y = prompt("Enter the value of Y"); // Example value for y

// // Check if x is equal to y
// if (x === y) {
//   // If true, prompt the user for the value of z
//   var z = +prompt("x and y are equal. Please enter the value of z:");
  
//   // Assign the value of z to another variable (e.g., zValue)
//   var zValue = z;

//   // Optional: Display the value of z for confirmation
//   alert("You entered z = " + zValue);
// } else {
//   alert("x and y are not equal.");
// }




// Q3
// let ZipCode = prompt("Please enter your ZipCode " ); // you can change this value to test

// if (ZipCode === "10010") {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }

// Q4
// var x = 10;

// if (x === 10) {
//   x = 1;
//   alert("The new value of x is: " + x);
// } else {
//   alert("x is not 10, it remains: " + x);
// }


// Chapter 11 (Comparison Operators)
// Q1
// var x = prompt("Enter your X value"); 
// var y = prompt("Enter your y value"); 

// if (!(x === y)) {
//   alert("x (" + x + ") is not equal to y (" + y + ").");
// } else {
//   alert("x (" + x + ") is equal to y (" + y + ").");
// }

// Q2
// var x = prompt("Enter your x value");
// var y = prompt("Enter your y value");

// if (x >= y) {
//   alert("x (" + x + ") is greater than or equal to y (" + y + ").");
// } else {
//   alert("x (" + x + ") is less than y (" + y + ").");
// }

// // Q3
// var myVar = prompt("Enter your value"); // Example initial value for the variable

// if (myVar !== 10) { // Test if myVar is not equal to 10
//   myVar = 20; // Assign a new number (20) to the variable
// }
// alert(myVar); // This will print the new value of myVar if the condition was true

// Q4
// var num1 = prompt("Enter your num1"); // Example number
// var num2 = prompt("Enter your num2"); // Different number to compare with

// if (num1 !== num2) { // Test if num1 is not equal to num2
//   alert("Congratulations! The numbers are unequal.");
// }
// Q5
// var firstName = prompt("Please enter your first name:");

// if (firstName !== "John") {
//   alert("No match");
// } else {
//   alert("Match found!");
// }

// Chapter 12 (if…else and else if statements)
// Q1
// Q1
// var x = prompt("Enter your x value");
// var y = prompt("Enter your y value");

// // Test whether x is greater than or equal to y
// if (x >= y) {
//   alert("x is greater than or equal to y.");
// } else {
//   alert("x is less than y.");
// }
// Q2
// var totalMarks = 500;
// var marksObtained = +prompt("Enter the total marks you obtained out of " + totalMarks + ":");

// var percentage = (marksObtained / totalMarks) * 100;

// var grade;

// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F"; // Fail grade
// }

// // Display the result
// alert("Your Percentage: " + percentage.toFixed(2) + "%\nYour Grade: " + grade);
// Q1
// var x = prompt("Enter your x value");
// var y = prompt("Enter your y value");

// // Test whether x is greater than or equal to y
// if (x >= y) {
//   alert("x is greater than or equal to y.");
// } else {
//   alert("x is less than y.");
// }
// Q2
// var totalMarks = 500;
// var marksObtained = +prompt("Enter the total marks you obtained out of " + totalMarks + ":");

// var percentage = (marksObtained / totalMarks) * 100;

// var grade;

// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F"; // Fail grade
// }

// // Display the result
// alert("Your Percentage: " + percentage.toFixed(2) + "%\nYour Grade: " + grade);
// Q1
// var x = prompt("Enter your x value");
// var y = prompt("Enter your y value");

// // Test whether x is greater than or equal to y
// if (x >= y) {
//   alert("x is greater than or equal to y.");
// } else {
//   alert("x is less than y.");
// }
// Q2
// var totalMarks = 500;
// var marksObtained = +prompt("Enter the total marks you obtained out of " + totalMarks + ":");

// var percentage = (marksObtained / totalMarks) * 100;

// var grade;

// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F"; // Fail grade
// }

// // Display the result
// alert("Your Percentage: " + percentage.toFixed(2) + "%\nYour Grade: " + grade);
// Q3
// var a = +prompt("Enter your value"); // Example value for a, you can change this

// if (a === 10) {
//   alert("a is 10");
// } else {
//   alert("The correct value of a is " + a);
// }

// Q4
// var city = prompt("Please enter the name of your city:").toLowerCase(); // Convert input to lowercase for case-insensitive comparison

// // Check if the city is Karachi
// if (city === "karachi") {
//   alert("You entered Karachi. It's the city of lights!");
// } 
// // Check if the city is Lahore
// else if (city === "lahore") {
//   alert("You entered Lahore. It's the heart of Pakistan!");
// } 
// // If the city is neither Karachi nor Lahore
// else {
//   alert("You entered " + city + ". That's a nice city too!");
// }
// Chapter 13 (Testing sets of

//     conditions)
// Q1
// var a = prompt("Enter your a"); 
// var b = prompt("Enter your b"); 
// var c = prompt("Enter your c");
// var d = prompt("Enter your d");

// if (a === b && c === d) {
//   alert("Both conditions are true: a equals b and c equals d.");
// } else {
//   alert("One or both conditions are false.");
// }

// Q2
// var a = +prompt("Enter the value of a:");
// var b = +prompt("Enter the value of b:");
// var c = +prompt("Enter the value of c:");
// var d = +prompt("Enter the value of d:");

// // Test whether either a equals b OR c doesn't equal d
// if (a === b || c !== d) {
//   alert("Either a equals b, or c does not equal d (or both).");
// } else {
//   alert("Neither condition is true: a doesn't equal b and c equals d.");
// }

// Q3
// let name = "Hamza";  
// let age = prompt(`Enter hamza's age`);       

// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//     // Code to execute if the condition is true
//     alert("The name is either Hamza or Arsalan, and the age is less than 60.");
// } else {
//     alert("Either the name is not Hamza/Arsalan, or the age is 60 or above.");
// }

// Q4
// var num1 = prompt("Enter your num1");
// var num2 = prompt("Enter your num2");

// // Test whether x is greater than or equal to y
// if (num1 >= num2) {
//   alert("num1 is greater than or equal to num2.");
// } else {
//   alert("num1 is less than num2.");
// }

// Q5
// var firstName=prompt(`Enter your firstname`)
// var lastName=prompt(`Enter your lastname`)

// alert(`${firstName}  ${lastName}`)

// Chapter 14 (If statements nested)
// Q1
// let password = prompt("Enter your password:");  // Get the password input

// if (password !== "") {
//     if (password.length <= 5) {
//         alert("Password must be greater than 5");
//     } else {
//         alert("OK");
//     }
// } else {
//     alert("Password cannot be empty");
// }

// Q2
// var a = +prompt("Enter the value for a:");
// var c = prompt("Enter the value for c:");

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// } else {
//   alert("Either a is not 1 or c is not 'Max'.");
// }

// Q3
// var a = +prompt("Enter the value for a:");
// var c = prompt("Enter the value for c:");

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// } else {
//   alert("Either a is not 1 or c is not 'Max'.");
// }

// Q4
// var num1 = 5; // Example number value
// var num2 = 5; // Same number value as num1

// if (num1 === num2) { // Test if num1 equals num2
//   if (num1 <= num2) { // Test if num1 is less than or equal to num2
//     alert("Both conditions are true: num1 equals num2 and num1 is less than or equal to num2.");
//   }
// }




// section2
// chapter 11 (USER INPUT & CONDITIONAL STATEMENT)
// Q1
// var city = prompt("Enter your city")
// if (city === "karachi") { 
//   alert("Welcome in city of light"); 
// }
//  else {
//   alert("This site for only Karachi");
// }
// Q2
// var gender = prompt("Please enter your gender (male/female):");

// if (gender === "male") {
//   alert("Good Morning Sir");
// } else if (gender === "female") {
//   alert("Good Morning Ma’am");
// } else {
//   alert("Please enter a valid gender");
// }

// Q3
// var signalColor = prompt("Enter the color of the road traffic signal (Red, Yellow, Green):").toLowerCase();

// if (signalColor === "red") {
//   alert("Must Stop");
// } else if (signalColor === "yellow") {
//   alert("Ready to Move");
// } else if (signalColor === "green") {
//   alert("Move Now");
// } else {
//   alert("Invalid color. Please enter Red, Yellow, or Green.");
// }

// Q4
// var remainingFuel =(prompt("Enter the remaining fuel in your car (in liters):"));

// if (remainingFuel < 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("Fuel level is sufficient");
// }

// Q5
// // a
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// // b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// c
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// // e
// if (true) {
//     alert("True");
//   }
//   if (false) {
//     alert("False");
//   }
// // f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
//   }
  
// Q6
// var firstsubject = +prompt("Marks obtained in one subject")
// var secondsubject = +prompt("Marks obtained in second subject")
// var thirdsubject = +prompt("Marks obtained in third subject")
// var totalmarks = prompt("Totalmarks")
// var percentage = (firstsubject + secondsubject + thirdsubject) / totalmarks * 100
// if (percentage >= 80) {
//   document.write("Grade : A-one")
//   document.write("<br>Remarks: Excellent")
//   } else if (percentage >= 70) {
//     document.write("Grade : A")
//     document.write("<br>Remarks: Good")
//     } else if (percentage >= 60) {
//       document.write("Grade : B")
//       document.write("<br>Remarks: You need to improve")
//       } else {
//         document.write("Grade : Fail")
//         document.write("<br>Remarks: Sorry")
//         }

// Q7
// var ranging = 7;
// var num = +prompt("Guess the secret number (between 1 and 10)");

// if (num === ranging) {
//   alert("Bingo! Correct answer.");
// } else if (num + 1 === ranging || num - 1 === ranging) {
//   alert("Close enough to the correct answer.");
// } else {
//   alert("Sorry, wrong guess.");
// }

// Q8
// var num = +prompt("Enter a number to check if it's divisible by 3");

// if (num % 3 === 0) {
//   alert("The number " + num + " is divisible by 3.");
// } else {
//   alert("The number " + num + " is not divisible by 3.");
// }


// Q9
// var num = +prompt("Enter a any even number");

// if (num % 2 === 0) {
//   alert("The number " + num + " is even number");
// } else {
//   alert("The number " + num + " is not even number");
// }

// Q10
// var tem= prompt(`Enter your wether`)
// if (tem >= 40){
//     alert(`“It is too hot outside.”`)
// }

// else if (tem >= 30){
//     alert(`“The Weather today is Normal.”`)
// }
// else if (tem >= 20){
//     alert(`“Today’s Weather is cool.”`)
// }
// else{
//     alert(`“OMG! Today’s weather is so Cool.”`)
// }

// Q11
// let num1 = parseFloat(prompt("Enter the first number: "));


// let num2 = parseFloat(prompt("Enter the second number: "));


// let operation = prompt("Enter operation (+, -, *, /, %):");


// if (operation === '+') {
//     let result = num1 + num2;
//     alert(`The result of ${num1} + ${num2} is: ${result}`);
// } else if (operation === '-') {
//     let result = num1 - num2;
//     alert(`The result of ${num1} - ${num2} is: ${result}`);
// } else if (operation === '*') {
//     let result = num1 * num2;
//     alert(`The result of ${num1} * ${num2} is: ${result}`);
// } else if (operation === '/') {
    
//     if (num2 !== 0) {
//         let result = num1 / num2;
//         alert(`The result of ${num1} / ${num2} is: ${result}`);
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else if (operation === '%') {
//     if (num2 !== 0) {
//         let result = num1 % num2;
//         alert(`The result of ${num1} % ${num2} is: ${result}`);
//     } else {
//         alert("Error: Modulus by zero is not allowed.");
//     }
// } else {
//     alert("Invalid operation! Please choose from +, -, *, /, or %.");
// }

// section 3
// chapter(IF...ELSE & ELSE IF STATEMENT,
//     TESTING SET OF CONDITIONS)
// Q1
// var input = prompt("Enter a character (number, uppercase letter, or lowercase letter):");

// var asciiCode = input.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//   alert("The input is a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//   alert("The input is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//   alert("The input is a lowercase letter.");
// } else {
//   alert("The input is not a number or a letter.");
// }

// Q2
// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// // Compare the two integers
// if (num1 > num2) {
//   alert("The larger number is: " + num1);
// } else if (num2 > num1) {
//   alert("The larger number is: " + num2);
// } else {
//   alert("Both numbers are equal.");
// }

// Q3
// var num = +prompt("Enter a number:");

// // Check if the number is positive, negative, or zero
// if (num > 0) {
//   alert("The number is positive.");
// } else if (num < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }

// Q4
// var char = prompt("Enter a single character:").toLowerCase();

// // Check if the character is a vowel
// if (char.length === 1 && (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')) {
//   alert(true);
// } else {
//   alert(false);
// }

// Q5
// // a.
// var correctPassword = "mySecurePassword";

// // b.
// var userPassword = prompt("Please enter your password:");

// // c.
// if (!userPassword) {
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }

// Q6
// var greeting;
// var hour = prompt("Enter your hours");
// if (hour < 18) {
//   greeting = "Good day";
// } 
// else {
//   greeting = "Good evening";
// }

// alert(greeting);

// Q7
// var time = +prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):");

// if (time >= 0 && time < 1200) {
//   alert("Good morning! Time: " + formatTime(time) + " AM");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good afternoon! Time: " + formatTime(time % 1200) + " PM");
// } else if (time >= 1700 && time <= 2359) {
//   alert("Good evening! Time: " + formatTime(time % 1200) + " PM");
// } else {
//   alert("Invalid time entered. Please enter a valid time in 24-hour format.");
// }
// function formatTime(time) {
//     let hours = Math.floor(time / 100);
//     let minutes = time % 100;
    
//     if (hours === 0) hours = 12;
    
//     return hours + (minutes < 10 ? ":0" + minutes : ":" + minutes);}