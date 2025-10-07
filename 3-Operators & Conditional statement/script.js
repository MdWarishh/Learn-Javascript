                                  //! Operators
// Arithemetic Operators 

//* Addition 

// let a = 5;
// let b = 2;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ^ b =", a ** b);

//* unary Operators 

// console.log("a++ =",a++);
// console.log("a-- =",a--);

//* for printing a & b value 

// console.log("a =", a);
// console.log("b =", b);

//* post & pre 

// console.log("++a =",++a);
// console.log("a =",a);
// console.log("b++ =",b++);
// console.log("b =",b);



//!   Next Method 

// let c = 24;
// let d = 39;
// let e = c + d;
// console.log("c + d =",e);

// for printing value 

// console.log("c =",c, "& d =",d);

//* unary  Operator 

// c++;
// console.log("c =",c);

// d--;
// console.log("d =",d);


//! Assignment Operators

// let a = 5;
// let b = 2;

// console.log("a =",a, "& b =",b);
//  a += 4;  //* a = a + 4
//  console.log("a =",a);

//  a -= 3;
//  console.log("a =",a);

//  b *= 5;
//  console.log("b =",b);

//! Comparison Operators 

// let a = 6;
// let b = 7;

// console.log("a == b", a == b);
// console.log("a != b", a != b);
// console.log("a >= b", a >= b);
// console.log("a > b", a > b);
// console.log("a <= b", a <= b);
// console.log("a < b", a < b);

// let c = 3; // number
// let d = "8"; // string -> number

// console.log("c === d", c === d);
// console.log("c !== d", c !== d);


//! Logical Operator

//* Logical AND && 

// let a = 6;
// let b = 3;

//  let cond1= a > b;
//  let cond2 = a == b;
//  console.log("cond1 && cond2", cond1 && cond2);
//  console.log("cond1 || cond2", cond1 || cond2);
//  console.log("cond1 ! cond2", !(cond1 && cond2)); // ! ye false ka true true ka false krta hai

// //*  method 2

// console.log("a && b", a > b && a == b);
// console.log("cond1 && cond2", a > b && a != b);

// console.log("!(6<3) =", !(6<3));


                                     //! Conditional Statement

//* if Statement 

// let age = 8;
// if(age >+ 18){
//     console.log("You are eligible to vote");
// }
// if(age < 18){
//     console.log("You are not eligible to vote");
// }

// dark mode example

// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }
// if(mode === "light"){
//     color = "white";
// }
// console.log(color);

//* if-else Statement 

// let mode = "darkf";
// let color;

// if(mode === "dark"){
//     color = "black";
// }else{
//     color = "white";
// }
// console.log(color);

// //* age examp... 
// let age = 13;
// if(age >= 18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

//* finding odd even Number 

// let num = 1;
// if(num % 2 === 0){
//     console.log("Number is Even");
// }else{
//     console.log("Number is Odd");
// }

//* else-if Statement

// let mode = "red";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else if (mode === "pink"){
//     color = "pink";
// } else if (mode === "red"){
//     color = "red";
// } else {
//     color = "white";
// }
// console.log(color);

//! Ternary Operators (simpler,compact if-else)

// let age = 152;
// let result = age > 18 ? "adult" : "not adult";
// console.log(result);

//* 2nd method 
// age > 18 ? console.log("adult") : console.log("not adult");


 
                          //! Practice Question 1
 
 //* Get user to input a number using prompt ("Enter a number:"). Check if the number is a multiple of 5 or not.
                    
                         //!  Answer 1

                        //  let num = prompt("Enter a number:");
                        //  if(num % 5 === 0){
                        //     console.log(num,"is multiple of 5");
                        //  } else {
                        //     console.log(num,"is not multiple of 5");
                        //  }


                        //! Practice Question 2 
             
//* Write a code which can give grades to students according to their scores:
 
                        // 80-100, A 
                        // 70-79, B 
                        // 60-69, C 
                        // 50-59, D 
                        // 0-49, F 

                        //! Answer 2

                        
                        let score = 79;
                        let grade;

                        if(score > 79 && 100 <= score){
                            grade = "A";
                        } else if (score > 69 && 79 <= score){
                            grade = "B";
                        }else if (score > 59 && 69 <= score){
                            grade = "C";
                        }else if (score > 49 && 59 <= score){
                            grade = "D";
                        }else{
                            grade = "F";
                        }

                        console.log(grade);
                        