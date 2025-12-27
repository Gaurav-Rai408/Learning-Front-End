
// Array
// let arr = [4,5,5,8,4,6];
// console.log(arr);
// console.log(arr[3]);

// splie and slice 
// allow us to delete or replace the array
// arr.splice(1,2,"red",10.5,true);
// console.log(arr);

// give the sliced part of the array
// const num = [1,2,3,4,5,6];
// const new_num = num.slice(1,4);
// console.log(new_num);


// const color = ["Pink","Blue","Green","Yellow"];
// console.log(color);
// console.log(color[0]);
// console.log(color[5]);
// console.log(color);

// color.push("black");
// color.unshift("White");
// console.log(color);

// color.pop();
// color.shift("White");
// console.log(color);



const letters = ['d','e','a','c','b'];
console.log(letters.indexOf('a'));
console.log(letters.indexOf('d'));
console.log(letters.indexOf('f'));  // If no element it will return -1;
console.log(letters.includes('d'));
console.log(letters.includes('f'));

console.log(letters.sort());
console.log(letters.reverse());

let fruits = new Array("Apple","Banana","Grapes","Guava");
console.log(fruits);
console.log(fruits[2])
fruits.forEach(i => console.log(i));
fruits.forEach(i => process.stdout.write(i + " "));
console.log();

let arr = [4,0,-4,8,-55,6];
console.log(arr.sort());

/*
The unexpected output [-4, -55, 0, 4, 6, 8] occurs because JavaScript's 
default sort() method converts array elements to strings and sorts them based on 
their Unicode values. It does not perform a numerical sort out of the box.
*/

/*
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // ascending order
console.log(numbers); // [1, 5, 10, 25, 40, 100]
*/

let ar = [5,4,66,33,5,2]
let newArr = ar.map(i => i*i);
console.log(newArr);

let evenNumber = ar.filter(i => i % 2 === 0);
console.log(evenNumber);

let sum = ar.reduce((acc,num) => acc + num,0);
console.log(sum);

// Concat
let abcd = [1,2];
let xyz = [3,4];
let combinedArr = abcd.concat(xyz);
console.log(combinedArr);


// join
let word = ["hello" , "World","!"];
console.log("Original Array : " + word);
let combinedWord = word.join(" ");
console.log("Modified Array : " + combinedWord);


// destrucion 
let fruits1 = ["Apple" , "Banana" , "Cherry"];
console.log(fruits1);
const [a, b , c] = fruits1;
console.log(a);
console.log(b);
console.log(c);