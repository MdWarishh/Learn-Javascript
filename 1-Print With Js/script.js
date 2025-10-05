// console.log("Warish");
// console.warn("Warish");
// console.error("Warish");
// console.info("Warish");
// alert("You are in wrong way");
// let ur = prompt("Enter your name");
// console.log('Your name is', ur)
// confirm("Are you sure?");

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");

// console.log("sum of two numbers is", num1 + num2);

//* string print kr rha ye isko number me change krne ke lea neeche wala step follow kro

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// let num1real = Number(num1);
// let num2real = Number(num2);
// console.log("Sum of two numbers are: ",num1real + num2real);

//* the simple way is

// let num1 = Number(prompt("Enter first number"));
//  let num2 = Number(prompt("Enter second number"));
//  console.log("Sum of two numbers are: ",num1 + num2);

//* ask a user his bijli ke units and if it is greater than 100 units than calculate on the basis of 10rs per unit if more than 50 units then calculate on the basis of 8rs per unit and if less calculate on 5rs per unit

// let unit = Number(prompt("Enter your units"));

// let bill;

// if(unit>=100){
//     bill = unit*10;
// }else if(unit >50){
//     bill = unit * 8;
// } else{
// bill = unit * 5;
// };
// console.log(bill);

//! Ternary Operator

// let a = 10;
// let b = 12;
//  a>b? console.log("hello"):console.log("not hello");
 // ye check krta hai a>b? a, b se bda hai ya nhi agar condition true huyi to left side wala print krega false hui to right side print krega
//  a>b? (left side) : (right side);

//! Strings
// let str = `Hey, my age is ${20 + 1}`; using template literals...

// String split

// let str = "Hello, my name is Arpit";
// let ans = str.split("e");
// let ans = str.split(" ");
// console.log(str.split(","));

//! loops 
// for(let i = 10; i < 25; i++){
//     if(i === 21) continue; 
//     console.log(i);
// }
// ye 21 ko skip krega
// continue aur break ka ye hi kaam hota hai ki ye loop ko skip ya break karke next iteration pe le jata hai 
// for(let i = 10; i < 25; i++){
//     console.log(i);
//     if(i === 21) break; 
// }
// ye 21 pe aa k loop ko break krega