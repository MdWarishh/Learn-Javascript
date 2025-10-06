                                   //! FUNCTION

// A function is a block of code that performs a specific task.
// Functions are reusable and can be called multiple times throughout your code.
// They can take inputs (arguments) and return outputs (results).
// Functions help organize code and make it more readable and maintainable.
// In JavaScript, functions are defined using the `function` keyword followed by a name, parentheses for parameters, and curly braces for the code block.


//* Definiton
// function myFunction(){
//     console.log("Hello mf!");
//     console.log("WHat are you doing:");
// }
// myFunction();


                     //* Examples of a simple function:


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

                                                //! types of function 


                                        //* 1. function statement

                                        // function greet(){
                                        //     console.log("Hello, World!");
                                        // }
                                        // greet();

                                        // * 2. function expression

                                        // var abcd = function(){
                                        //     console.log("Hello, World!");
                                        // }
                                        // abcd();


                    //* 3. arrow function
                    //* 4. IIFE (Immediately Invoked Function Expression)
                    //* 5. generator function
                    //* 6. async function
                    //* 7. callback function
                    //* 8. recursive function
                    //* 9. higher-order function
                    //* 10. pure function
                    //* 11. impure function
                    //* 12. first-class function





//* Parameters
// function myName(msg){
//     //* Parameter -> input
//     console.log(msg);
// }
// myName("I Love JS"); //* Argument

         //! function Sum of 2 numbers


         //* Method->1
        //  function sum(x, y){
        //     console.log(x + y);
        //  }
         
        //  sum(2333, 3454);

        //* Method -> 2

        // function sum(x, y){
        //     s = x + y;
        //     return s;
        // }
        // let val = sum(34, 23);
        // console.log(val);
        


        //! Arrow Function  (Modern JavaScript)


        //* For sum
    //    const sum = (a,b) => {
    //         console.log(a + b);
    //     };
    //     sum(3, 5);
        // no need to call

        //* For Multiplication

        // const mul = (a, b) => {
        //     console.log(a * b);
        // };
        // mul(4, 9);



           //! Practice Question -1 
           
           //* Create a function usng the "function" keyword that takes a string as an argument & returns the number of vowels in the string,

           //! Answer 1

        //    function countVowels(str){
        //     let count = 0;
        //     for(const char of str){
        //         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        //             count++;
        //         }
        //     }
        //     console.log("count =",count);
        //    };
        //    countVowels("aopmanhgdgueeeiioouuaaeiouioreadgtresagjuioeir");


        //! Practice Question 2

        //* Create an arrow function to perform the same task.

        //! Answer - 2

        // const countVowels = (str) => {
        //     let count = 0;
        //     for(const char of str){
        //         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        //             count++;
        //         }
        //     };
        //     console.log("count =",count);
        // };
        // countVowels("apna College");



        //! forEach Loop in Arrays :-

        // let arr = [1, 2, 3, 4, 5];
        // arr.forEach(function printValue(val){
        //     console.log(val);
        // });

        // let name = [1, 2, 3, 4, 5];
        // name.forEach((val) => {
        //     console.log(val);
        // })



        //! Practice Question - 3

        //* For a given array of numbers, print the square of each value using the forEach Loop.

        //! Answer -3 

        // let arr = [1, 2, 3, 4, 5];
        // arr.forEach((num) => {
        // console.log("square of each arr =", num * num);
        // }) 

        //* (OR)

        // let nums = [23, 54, 78, 98, 69];
        // let calcSquare = (num) => {
        //     console.log(num * num);
        // };
        // nums.forEach(calcSquare);

        //! Some More Important Methods of Arrray

        //* Map Method

        // let nums = [1, 2, 3, 4, 5, 6];

        // let newarr = nums.map((val) => {
        //     return val * val;
        // });
        // console.log(newarr);

        // let num = [ 12, 23, 56, 87 ,45 , 12];
        // let newNum = num.map((val) => {
        //     return val * val - val;
        // })
        // console.log(newNum);

        //* Filter Method

        // let arr = [1, 2, 3, 4, 5, 6, 7, 8];

        // let newArr = arr.filter((val) => {
        //     // return val < 3;
        //     return val % 2 === 0;
        // })
        // console.log(newArr);

        //* Reduce Method

    //     let arr = [1, 2, 3, 4, 88, 545, 34 ,23, 12, 76];

    //    const output = arr.reduce((prev, curr) => {
    //         return prev > curr ? prev : curr;
    //         // age prev curr se bda hai to prev print kar do nhi to curr print krdo
    //     });
    //     console.log(output);


    //! Practice Questions

    //! question -1 

    //* We are given array of marks of students. Filter oout of the marks of the students that scored 90+.
    // let marks = [ 23, 90, 99, 93, 54, 76, 43, 67, 91, 46];

    // let newMarks = marks.filter((val) => {
    //     return val > 90;
    // });
    // console.log(newMarks);

    //! Question - 2

    // let n = prompt("Enter number to make n number of array");
    // let arr = [];

    // for(let i = 1; i<=n; i++){
    //     arr[i-1] = i;
    // };
    // console.log(arr);

    // let sum = arr.reduce((prev, curr) => {
    //          return prev + curr;
    // });
    // console.log("Sum is:",sum);

    // let factorial = arr.reduce((res, curr) => {
    //     return res * curr;
    // });
    // console.log("product is :",factorial);