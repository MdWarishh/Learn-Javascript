                        //! DOM Lecture Part - 1


                         //! Window Object
                         
          //* The window object represents the browser's window.
          //* window object is a global object in JavaScript, representing the browser's window.
          //* It provides access to browser-specific properties and methods.
          //* The window object is automatically created when a web page is loaded.
          //* window object is not a constructor function, it's an ordinary object.
          //* window object has properties and methods for managing the browser window, navigating the browser, and executing JavaScript code.
          //* window object is the global object in a web page, and it's the default object that

          //! example

          // console.log("hello");
          // window.console.log("hello2");
          //means window global object hai jo already js me define hai browser ko pta hai window kya hai islea usko likhte nhi hai

          
                   //! Document Object Model (DOM) :-

          //* DOM is a tree like structure where every element/document is a node.
          //* It provides methods to manipulate HTML elements.
          //* DOM is a standard interface to HTML and XML documents.
          //* DOM is used to create, manipulate, and delete HTML elements.
          //* DOM is not a programming language. It's a specification.
          //* DOM is a living standard. It will be supported by all modern browsers.
          //* DOM is a cross-platform and language-independent interface that allows programs and scripts to dynamically access and modify the content, structure, and style of documents.

                  
                      //! DOM Manipulation :-

              //* DOM manipulation is the process of adding, removing, or modifying HTML elements, attributes, styles, and text content.
              //* DOM manipulation allows you to dynamically change the content, structure, and style of a web page.
                 //! ---------
              //! Dynamically change means :-
              //* html css me js dom ke help se change krna like-
              //* Change the content of an HTML element
              //* Change the attributes of an HTML element
              //* Change the styles of an HTML element
              //* Add or remove an HTML element
              //* Change the order of HTML elements
              //* Add or remove event listeners to HTML elements
                  //! --------
              //* DOM manipulation is a powerful tool for web developers to create interactive and dynamic web pages.
              //* DOM manipulation is done using JavaScript.
              //* DOM manipulation is not limited to HTML elements. It can also be used to manipulate SVG elements, CSS styles, and other web technologies.


              //! for changing first select that id, class or tag etc :-

              //* Selecting with id -

              //  let h2 = document.getElementById("select");
              //  console.dir(h2);
              //  console.log(h2);

               //* Selecting with class -

              //  let box = document.getElementsByClassName("box");
              //  console.log(box); // its behave like an array
              //  console.dir(box);

              //* Selecting with tag -
              //  let h2 = document.getElementsByTagName("h2");
              //  console.log(h2);
              //  console.dir(h2);

              //* Query Selector -
               
              //! for first element
              // let div = document.querySelector("div");
              // console.log(div);

              //! for all
              // returns node list
              //! easy definition of Node list :
              //* NodeList is a live collection of nodes that can change over time, as nodes are added, removed, or changed.
              //* NodeList is an array-like object that represents a collection of nodes.
              //* NodeList objects are returned by methods like querySelectorAll(), getElementsByTagName(), and document.querySelectorAll().
              //* NodeList objects are not live, meaning they do not reflect the current state of the document.
              //* To make NodeList objects live, you can convert them to an Array object using the Array.from() method.
              
              // let sele = document.querySelectorAll(".box");
              // console.log(sele);


                     //! DOM Properties :-

     //* DOM properties are properties of HTML elements that can be accessed and modified using JavaScript.

                 //! 1) tagName :
 
 //* tagName property returns the tag name of an HTML element / nodes.

//  let tag = document.querySelector(".box");
//  console.log(tag);
//  console.log(tag.tagName);

// let idTag = document.querySelector("#select");
// console.log(idTag);
// console.log(idTag.tagName);

                    //! 2) innerText :

 //* innerText property returns the text content (including HTML) of an HTML element.

   //* Example -

  //  let div = document.querySelector("div");
  //  console.log(div.innerText);
  //  div.innerText = "and";

                    //! 3) inner.HTML :

//* innerHTML property returns the HTML content (including tags) of an HTML element.

  // let div1 = document.querySelector("div");
  // console.log(div1.innerHTML);

                    //! 4) textContent :

  //* textContent property returns the text content (excluding HTML) of an HTML element.

  // let div3 = document.querySelector("div");
  // console.log(div3.textContent);


                   //! 5) style :
   
  //* style property returns the inline styles of an HTML element.
 
  //* Example -
 
  //  let h2 = document.querySelector("h2");
  //  console.log(h2.style);
  //  h2.style.color = "red";
  //  h2.style.fontSize = "20px";
  //* Note : style property is not a standard property, it's a property of the HTML element itself. It doesn't have a corresponding property in the DOM specification. It's a property of the HTML element that can be manipulated using JavaScript.
  //  console.log(h2.style.color);
  //  console.log(h2.style.fontSize);


              //! Practice Questions :-

  //! 1) Create a h2 heading element with text "Hello Js" Append "From Apna college" to this text using js.

  //* Answer :

    // let h2 = document.querySelector("h2");
  // h2.innerText = h2.innerText + "from Apna College";
  // console.log(h2);

  //! 2) Create 3 divs with common class-name "box". Access them & add some unique text to each of them.
  
  //! Answers:-

  //* aam jindagi
  // let divs = document.querySelectorAll(".box");
  // divs[0].innerText = "New 1";
  // divs[1].innerText = "New 3";
  // divs[2].innerText = "New 2";

  //* mentos jindagi using forof loop

  // let divs = document.querySelectorAll(".box");

  // let idx = 1;

  // for(let ques2 of divs){
  //   ques2.innerText = `New value ${idx}`;
  //   idx++;
  // };
  // console.log(divs);
  

  //! For of Loop introduction
  //* For of loop is used to iterate over iterable objects like arrays, strings, etc.
  //* For of loop is a modern way to loop over arrays and other iterable objects in JavaScript.
  //* For of loop iterates over each element in the iterable object (like an array or a string) and executes a specified statement for each element.
  //* The loop variable (in this case, "div") takes on the value of each element in the iterable object in turn.
  //* Example -


  // for of loop me for('yha let const kuch bhi likh skte hai not important', 'yha (of) hi likhna hai', 'aur last me jo let kiye hoge like arr, str, div, number, marrks jo bhi uska naam likhdoge bss'){
  //   aur yhaconsole.log(for ke ander let ke baad jo bhi likhe hoge wo likh dena bss);
  // }

  


              //! Attributes

    //* Attribute is whatever we write under tag like id class etc....

// let div = document.querySelector("div");
// console.log(div);

//* see Attribute name - get.Attribute()
// let id = div.getAttribute("id");
// console.log(id);

//* change attribute name - set.Attribute()
// let ids = div.setAttribute("id", "newid");
// console.log(ids);


    //! for Insert Elements

    //* for inserting first create element then add..

    //create

    // let btn = document.createElement("button");
    // btn.innerText = "Click me!";
    // console.log(btn);

    //add or insert
    // first select then add
    // let div = document.querySelector("div");
    // div.append(btn);
    // div.prepend(btn);
    // div.after(btn);
    // div.before(btn);

    //* for remove

    // div.remove();
    // btn.remove();


      //! Practice 1

  //* Create a button element with text "Click me!" and append it to the body of the document. Set the background color of the button to red and the text color to white.

      // let newBtn = document.createElement("button");
      // newBtn.innerText = "Click me!";
      // newBtn.style.backgroundColor = "red";
      // newBtn.style.color = "white";

      // document.querySelector("body").prepend(newBtn);


      //* Practice 2

      //* Create a <p> tag in html give it a class & some styling. Now create a new class in css and try to append this class in <p> element. solve using ClassList.
     //* Answer 2

      // let para = document.querySelector(".para");
      // let addClass = document.querySelector(".newClass");
      // para.classList.add("newClass");

              
      