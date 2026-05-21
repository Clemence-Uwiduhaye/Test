
// let a = ;
// let b = 2;

// if ( a == b) {
//     console.log("a is equal to b");
//     } else {
//         console.log("a is not equal to b");
//     }
 
// let age = 20;

// if (!(age >= 18)) {
//     console.log("you are not allowed");
// } else {
//     console.log("youre allowed");
// }

let age = 10;

if (!(age >= 18)) {
    console.log("you are not allowed");
} else {
    console.log("you are allowed");
}


let age = 10;
let password = true;

if (age >= 18 && password === true) {
    console.log("Access granted");
} else {

    if (age < 18) {
        console.log("Your age is not allowed");
    } else {
        console.log("Your age is allowed");
    }

    if (password === true) {
        console.log("Your password is valid");
    } else {
        console.log("Your password is invalid");
    }
}

let flour = 500; 
let sugar = 200;
let total = flour + sugar;
console.log("total")    



let cartTotal = 120;
let isPremiumMember = true;
let hasDiscountCode = false;
let isFraudulent = false;

if ((isPremiumMember || cartTotal > 100) && !isFraudulent) {
    console.log("Free shipping granted");
} else {
    console.log("No free shipping");
}

