//! Loops 

//* For Loop
// for (let i = 1; i<=8; i++){
//     console.log("Warish");
// } 
// console.log("Loop End");

//* Calculate sum of 1 to 5,

// let sum = 0;
// for(i = 1; i<=5; i++){
//     sum = sum + i;
// }
// console.log("sum =",sum);

// //* Print 1 to 5

// for(i =1; i<=5; i++ ){
//     console.log("i =",i);
// }

//! For-of Loop

// let str = "ApnaCollege";

// let size = 0;
// for(let i of str){
//     console.log("i =",i);
//     size++;
// }
// console.log("Size =",size);

//! For-in Loop

// let student ={
//     name: "Warish",
//     age: 20,
//     course: "Computer Science",
//     cgpa: 8,
//     isPass:true,
// }

// for(let key in student){
// console.log("key =",key, " Value =",student[key]);
// }


                             //! Question 1
                
              //* Print all the even numbers from 0 to 100                          

                             //! Answer 1

        //  let i = o;
        //  for(let i = 0; i <= 100; i++){
        //     // console.log("i =",i);
        //     if(i % 2 === 0){
        //         console.log("even Numbers is ", i)
        //     }
        //     else if(i % 2 !== 0){
        //         console.log("Odd Numbers is ", i)
        //     }
        //  }                    

                             //! Question 2

 //* Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
       
                             //! Answer 2
                             
    //    let gameNum = 20;
    //    let userNum = prompt("Guess the game number: ");
    //    while(userNum != gameNum){
    //     userNum = prompt("You guess wrong number. Guess again: ");
    //    }                      
    //    console.log("Congratulations, you guessed the correct number!");



                            //! STRINGS IN JAVASCRIPT 

    //*   FOR CREATE STRING 
    
    // let str = "New String";
    // let name = "Apna College";

    //* template literals special string    
    // console.log(str[4]);
    // console.log(name[5]);

    // let obj = {
    //     name: "pen",
    //     price: 10,
    // }

    // let output = `The price of the ${obj.name} is ${obj.price} rupees`
    // console.log(output);

        //* String Methods
// UpperCase, LowerCase, Trim these three are same example
    //  let str = 'Apna college';
    //  str = str.toUpperCase();
    //  console.log(str);

//    str slice  

// let str = "012345678";
// console.log(str.slice(2,9));

//     str concat

let str1 = 'Apna';
let str2 = 'College';

// method 1
// console.log(str1.concat(str2));

//method 2 easy

// let res = str1 + str2;
// let res = "I am learning JavaScript from " + str1 + str2;
// console.log(res);

//     str replace

// console.log(str1.replace("na", "sara"));

//   str charAt(idx)

// console.log(str1.charAt(3));


                          //! Praction question String

//* Prompt the user to enter their full name. Genarate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.                       

    //  let fullName = prompt("Enter your fullName without spaces:");
    //  let userName = "@" + fullName + fullName.length;
    //  console.log(userName);     
