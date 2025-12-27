var a = 10;
console.log(a);

var a = 13;
console.log(a);

a = 20;
console.log(a);

// Var is avoided in js as it allow to redeclare the variable.


function ex() {
    var z = 45;
    console.log(z);
}
ex();
// console.log(z); // Error as it is accessed outside its function declaration.
{
    var z1 = 45;
    console.log(z1);
}
console.log(z1);// It will be accessed as it is not function but block.



// let

let x = 11;
console.log(x);


// let a = 22;
// console.log(a);  // You cannot declare it again in "let" keyword

x = 33;
console.log(x);

// Block Scope
{
    let y = 44;
    console.log(y);
}
// console.log(y); // cannot be be accessed outside the block



// const
const pi = 3.14;
console.log(pi);

// Block Scope
{
    let c = 55;
    console.log(c);
}

// console.log(c);  // Cannot be accessed outside the block