// let name = "Clemence";
// name = "Angela";
// let age = 20;
// let country = "Rwanda";
// let Ilike= "True";


// const PI = 5
// PI = 8 
// console.log(PI)


// let firstname = "Clemence";
// let user_age = 20;
// let price = 100

// typeof "Clemence"   
// console.log(typeof "Clemence")  




// let isLoggedIn = True; 
// let isadmin = false;


// 1. Create Variables

let name = "Clemence";
let age = 21;
let country = "Rwanda";
let ILikeJavaScript = true;

// 2. Changing Values
let score = 10;
score = 20;
score = 50;

// 3. constant variables 
const PI = 3.14;
// PI = 3.14159; ❌ Error

// 4. Naming Variables
let firstName = "John";
let user_age = 20;
let $price = 50;

// 5. Identify Data Types
typeof "Hello"     
typeof 10          
typeof true        
typeof undefined   
typeof null        

// 6. Strings

let firstName = "Clemence";
let lastName = "Uw";
let fullName = firstName + " " + lastName;


// 7. Numbers

let price = 50;
let quantity = 3;
let total = price * quantity;

// 8. Booleans

let isLoggedIn = true;
let isAdmin = false;
let hasPermission = true;

// 9. Arrays

let foods = ["Rice", "Beans", "Pizza"];

foods.push("Burger");   // add
foods.pop();            // remove last

// 10. Object

let student = {
  name: "Clemence",
  age: 21,
  grade: "A",
  school: "UR"
};

student.course = "GIS"; 

// 11. Global Scope

let globalVar = "I am global";

function test() {
  console.log(globalVar);
}
test();

// 12. Function Scope

function demo() {
  let inside = "Hello";
}
console.log(inside); // ❌ Error

// 12. Function Scope

function demo() {
  let inside = "Hello";
}
console.log(inside); // ❌ Error

// 13. Block Scope

if (true) {
  let x = 10;
}
console.log(x); // ❌ Error

// 14. var vs let

{
  var a = 10;
  let b = 20;
}

console.log(a); // works
console.log(b); // ❌ error

// 15. Nested Scope

let global = "global";

function test() {
  let insideFunc = "function";

  if (true) {
    let insideBlock = "block";
    console.log(global);
    console.log(insideFunc);
    console.log(insideBlock);
  }
}
test();

// 16. Student Profile

let studentName = "Clemence";
let age = 21;
let course = "Urban Planning";
let isPresent = true;

console.log(`${studentName} is ${age} years old studying ${course}.`);

// 17. Shopping Cart

let item = "Shoes";
let price = 30;
let quantity = 2;

let total = price * quantity;

// 18. Movies Array

let movies = ["Avengers", "Titanic", "Inception", "Joker", "Avatar"];

console.log(movies[0]); // first
console.log(movies[movies.length - 1]); // last

// 19. Personal Object

let me = {
  name: "Clemence",
  age: 21,
  hobbies: ["Reading", "Music"],
  favoriteColor: "Blue"
};

// 20. Data Types

"Hello"   // string
100       // number
true      // boolean
[]        // object (array)
{}        // object
undefined // undefined
null      // object

// 21. Shadowing

let x = 5;

function test() {
  let x = 10;
  console.log(x); // 10
}

console.log(x); // 5

// 22. const in loop

for (let i = 0; i < 3; i++) {
  const x = i;
}
console.log(x); // ❌ error

// 22. const in loop

for (let i = 0; i < 3; i++) {
  const x = i;
}
console.log(x); // ❌ error

// 23. Function Scope

function one() {
  let secret = "hidden";
}

function two() {
  console.log(secret); // ❌ error
}

// 24. User Profile

let user = {
  username: "cleo22",
  password: "12345",
  email: "cleo@gmail.com",
  age: 21,
  hobbies: ["coding", "music"]
};

// 25. Weather

let city = "Kigali";
let temperature = 25;
let isRaining = false;
let weatherCondition = "Sunny";

// 26. Classroom

let students = ["A", "B", "C"];

students.push("D");
students.pop();

console.log(students.length);

// 27. Favorite Things

let favorites = {
  food: "Pizza",
  game: "FIFA",
  music: "Afrobeats",
  color: "Blue"
};


let user = {
  name: "Clemence",
  age: 21,
  status: true,
  favorites: ["Music", "Coding", "Travel"]
};
