// If Statement - A student is eligible for voting if age ≥ 18.
console.log("If Statement:");
let age = 18;
if (age >= 18) {
    console.log("Student is eligible to vote");
} else {
    console.log("Student is not eligible to vote");
}
console.log("Thank You");
console.log("If-Else Statement:");
//If-Else Statement - Write a program to check if a number is positive or negative.
let number = 0;
if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is positive");
}

//If-Else Ladder- Check if a number is positive, negative, or zero.
console.log("If-Else Ladder:");
let num = 0;
if (num === 0) {
    console.log("The number is zero");
}
else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is positive");
}

//Nested If - A student passes if marks ≥ 40. If marks ≥ 80, show “Distinction”.
console.log("Nested If:");
let marks = 35;
if (marks >= 40) {
    if (marks >= 80) {
        console.log("Distinction");
    }
} else {
    console.log("Fail hai bhai fail hai!!");
}

//Switch Case 1. Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).
console.log("Switch Case :");
let letter = 'A';
switch (letter) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    default :
        console.log("Invalid Grade");
}

//2. print the season based on months in the year (3,4,5 - summer) (11,12,1,2 - winter) (6,7,8,9 - rainy)
let months = 1;
switch (months) {
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("summer");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("rainy");
        break;
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("winter");
        break;
    default :
        console.log("Invalid Month");
}





//---------- Looping constructs ---------------------
console.log("---------- Looping constructs ---------------------")
//For Loop - Print the first 10 natural numbers.
console.log("For Loop ")
for (let i = 0; i < 10; i++) {
    console.log(i+1);
}
//While Loop - Print numbers from 1 to 5 using while loop.
console.log("While Loop ")
let j = 1;
while (j <= 5) {
    console.log(j * 5);
    j++;
}
//Do-While Loop: ATM machine: Keep asking PIN until the user enters 1234.
// console.log("do While Loop ")
// let pin;
// do {
//     pin = Number(prompt("Enter the first number: "));
//     if (pin === 1234) {
//         document.writeln("PIN correct. Access Granted");
//     }
// } while (pin !== 1234);


//For…of Loop - Print all fruits in a basket.
console.log("For…of Loop")
let fruits = ["Apple", "Banana", "DragonFruit", "Mango"];
console.log(fruits);
for (let fruit of fruits) {
    console.log(fruit);
} 
//For…in - Print all student details from an object.

let person = {name: "Gaurav" , age: 22 , Graduation: "BSC CS"}
for (let key in  person) {
    console.log(key + " : " + person[key]);
}
//forEach Loop - Print the squares of all numbers in an array.









// ------------------ control flow modifiers------------------------

//Break Statement - Question: Stop printing when number reaches 3.

//Continue Statement -Question: Skip printing number 3.


