// function add() {
//     let a = 10;
//     let b = 20;
//     let sum =  a + b;
//     console.log(sum);
// }

// add();

// function add (a , b) {
//     let sum1 = a + b;
//     console.log(sum1);
// }

// add(5,9);


// function add ( ){
//     let c = 10;
//     let d = 20;
//     return c + d;
// }

// console.log(add());

// function add (a , b){
//     return a + b;
// }
// // let sum = add3(77 , 33);
// // console.log(sum);
// console.log(add(77 , 33));


// // let square = function (num) {
// //     return num * num;
// // }
// // console.log(square(4));


// let square =  (num) => num * num;
// console.log(square(4));

// let greet = () => "hello bhai";
// console.log(greet()); 

// let adding =  (a, b) => {
//     let sum = a + b;
//     console.log(sum);
// }
// // console.log();
// adding(4,8);


// var square1 = (num) =>  num * num ;
// console.log(square1(4));
// console.log(square1(10));
// console.log(square1(5));

// const greet1 = (name) => console.log("Good Evening " + name);
// greet1("Gamana");

// var add = (a, b) => {
//     let c = a + b;
//     console.log(c);
// }
// add(10 , 10);

function add() {
    if (arguments.length == 0) {
        return "No argument";
    }
    else if (arguments.length == 1) {
        return arguments[0];
    }
    else if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    }
    else {
        return "Invalid input";
    }
}

console.log(add(2));