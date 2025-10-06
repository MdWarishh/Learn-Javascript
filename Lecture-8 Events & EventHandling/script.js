//! using js enent handling

// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//     console.log("clicked");
// }

//* Event object

// btn.onclick = (q) => {
//     console.log("click");
//     console.log(q.type);
//     console.log(q.target);
//     console.log(q.clientX);
// }

// let box = document.querySelector(".box");
// box.onmouseover = (a) => {
//     console.log("click");
//     console.log(a.type);
//     console.log(a.target);
//     console.log(a.clientX);
// };
 
          //! Event Listeners :

   //* best for use:
   //* 1. when you want to attach multiple event handlers to the same element.
   //* 2. when you want to attach event handlers dynamically.
   //* 3. when you want to decouple event handlers from the element.
   
   //! for adding: node.addEventListener(event, callback);
//    let btn = document.querySelector("#btn");
//    btn.addEventListener("click", (e) => {
//        console.log("clicked");
//    });
   
//    let btn1 = () => {
//     console.log("clicked33");
//    };

//    btn.addEventListener("click", btn1);
   
//    btn.addEventListener("click", (e) => {
//        console.log("mouse out");
//    });
   
//    //* for removing event listeners:
   
//    btn.removeEventListener("click", btn1);


       //! Practice Ques 1)

   //* Change light mode to dark and dark to light using toggle button.    

// let btn = document.querySelector("#btn");
// let body = document.querySelector("body");
// let mode = "light";


// btn.addEventListener("click", () => {
// if(mode === "light"){
//    mode = "dark";
//   body.classList.add("dark");
//   body.classList.remove("light");
// } else {
//     mode ="light";
//     body.classList.add("light");
//     body.classList.remove("dark");
// }

// console.log(mode);

// });

//* change color on mouse move.
// let box = document.querySelector(".box");
// let move = "light";
// box.addEventListener("mousemove", () => {
//     if(move === "light"){
//         move = "dark";
//         box.classList.add("dark");
//         box.classList.remove("light");
        
//     } else {
//         move = "light";
//         box.classList.add("light");
//         box.classList.remove("dark");
//     }
//     console.log(move);
// });