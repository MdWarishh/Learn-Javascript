// what is a function?
// A function is a block of code that performs a specific task.
// Functions are reusable and can be called multiple times throughout your code.
// They can take inputs (arguments) and return outputs (results).
// Functions help organize code and make it more readable and maintainable.
// In JavaScript, functions are defined using the `function` keyword followed by a name, parentheses for parameters, and curly braces for the code block.
// Example of a simple function:
// function greet(){
//     console.log("Hello, World!");
// }
// greet();
 // Calling the function to execute it

 // funtion with parameters
// function greet(a, b, c){
//     console.log(a, b, c);
// }
// greet("hello", "world", "how are you?");
// function greet(a, b, c, d){
//     console.log(a, b, c);
// }
// greet("hello", "world", "how are you?");
// function greet(a, b, c){
//     console.log(a, b, c);
// }
// greet("hello", "world");

// types of function 
// 1. function statement
// function greet(){
//     console.log("Hello, World!");
// }
// greet();
// 2. function expression
// var abcd = function(){
//     console.log("Hello, World!");
// }
// abcd();
// 3. arrow function
// 4. IIFE (Immediately Invoked Function Expression)
// 5. generator function
// 6. async function
// 7. callback function
// 8. recursive function
// 9. higher-order function
// 10. pure function
// 11. impure function
// 12. first-class function

// let str = "hello Javascript!";
// console.log(str.includes("java"));

// console.log(myfun());
// function myfun(){
//     return "hoisting works!";
// }

// const greet = function(){
//     console.log("Hello");
// };
// greet();

// greet = function(){
//     console.log("hii");
// };

// function outer (){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     };
// }
//     const counter = outer();
//     counter();
//     counter();



//! Hoisting
//js mein variables aur functions unko js declaration wala part top pe move kar deta hai, aur ise hi kehte hai hoisting.
//! IIFE : Immediately Invoked Function Expression
// function ko bina call kiye hi use karne ka tareeka hai. ise IIFE kehte hai. ise use karne se global scope mein koi variable nahi aata hai. 
// ise use karne se variable ka naam global scope mein nahi aata hai.


// (function myfun(){
//     console.log("hoisting works!");
// })();

//! Hofs (Higher Order Functions)
// ek aisa function jo ya to return karega function ya phir kisi function ko parameter ke roop mein lega. ya to dono

// function ko return me le liya
// function abcd (){
//     return function(){

//         return function(){
//             console.log("ddd");
//         };
//     };
// }
// abcd()()();

// function ko parameter ke roop mein le liya
//   function abcd (fnc){
// fnc();
//   };
//   abcd(function(){
//     console.log("hello world!");
//   });

//! Call Back function
//kisi function me ek function jo pass hota hai call krte waqt usi ko callback function kehte hai.
// callback function ko kisi dusre function ke andar call kiya jata hai.
//* aisa function jo parameter me accept kare fnc use higher order fnc khte hai aur jo parameter me fnc ja rha hai use kehte hai callback fnc.
// function abcd (fnc){  //--> higher order function
//    fnc();
//      };
//      abcd(function(){ //--> callback function
//        console.log("hello world!");
//      });
  
//! First Class Function
// first class function ek darja hai jo js me function ko mila hia, iss darje me kha jata hai ki aap fncs ko value ki trh treet kar skte ho

//! pure function
// pure function wo function hote hai jo kisi bhi external variable ko change nahi karte hai aur ye same input pe same output dete hai.
// example
// function add(a, b){
//     return a + b;
// }
// console.log(add(2, 3)); // 5

//! impure function
// impure function wo function hote hai jo kisi bhi external variable ko change karte hai ya phir ye same input pe different output dete hai.

//! global scope
// global scope wo scope hota hai jo poore program me available hota hai. global scope me jo bhi variable ya function define kiya jata hai wo poore program me available hota hai. global scope me jo bhi variable ya function define kiya jata hai wo window object ke andar store hota hai. 

//! local scope
// local scope wo scope hota hai jo function ke andar define kiya jata hai. local scope me jo bhi variable ya function define kiya jata hai wo function ke andar available hota hai.

//! closure
// closure ek consept hai jisme function return krta hai ek aur function aur returned function me aap use krte ho parent function ka koi data.

// function abcd(){
//   var a = 12;
//   return function(){
//     console.log(a);
//   }
// };
// var ans = abcd();
// ans();
// or
// abcd()(); // ye bhi chalega