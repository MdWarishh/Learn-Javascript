                                //! Arrays 

  //Ek se jyada values ko ek sath store krne wala data structure hai array.
//Array ko define krne ke liye square brackets ka use hota hai.
// var a = [];

                          //* What is  array
//* Array is a data structure which is used to store multiple values in a single variable.

                      //var a = [12,12, 34, 54];

                          //* Creating an Array  
                          
                //   let marks = [12, 21, 12, 33, 34];
                //   console.log(marks);        
                //   console.log(marks.length);      
                  
                                //! Notes--->>
    //* js me arrays me hum value to store kar skte hai par chahe to alag data types ki values ko bhi store kar skte hai

// var arr = [12, "hello", true, null, undefined, {}];    


 
                    //! Looping over Arrays

                    // let heroes = ["ironman", "antman", "superman", 22, 223, 443, 56, 1, 2, 3, 4, 5, 6, 7,8, 9, 45, 56 ];
                    
                    //* for loop
                    // for(let idx = 0; idx < heroes.length; idx++){
                    //     console.log(heroes[idx]);
                    // }

                    //* for of loop

                    // for(let el of heroes){
                    //     console.log(el);
                    // }

                    //! Practice 1


                    // let marks = [85, 97, 44, 37, 76, 60];

                    // let sum = 0;
                    // for(let val of marks){
                    //     sum = sum + val;
                    // }
                    // let avg = sum / marks.length;
                    // console.log(`The average marks is ${avg}`);


                    //! Practice 2

                    // let items = [250, 645, 300, 900, 50];
                    // for(let i = 0; i < items.length; i++){
                    //     let offer = items[i] / 10;
                    //     items[i] = items[i] - offer;
                    // }
                    // console.log(items);


                    //! Arrays Methods

            //* 1. Push()
            
            // let items = [1, 2, 3, 4, "car", "bus"];
            //   items.push(23, 45);
            //   console.log(items);

            //* 2. Pop()  
            // let item = [1, 2, 3,4];
            // console.log(item);
            // item.pop();
            // console.log(item);
            // let deletedItem = item.pop();
            // console.log("deleted", deletedItem);

            //* 3. toString()         

            // let marks = [1, 23, 34 ,43, 32];
            // console.log(marks.toString());

            //* concat()

            // let marvelHeroes = ["antman", "thor", "ironman"];
            // let dcHeroes = ["superman", "batman"];
            // let indianHeroes = ["kriss", "shaktiman"];

            // let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
            // console.log(heroes);

            //* slice()

            let item = ["cars", "bus", 12, 122];
            // console.log(item.slice(1,1));

            //* splice(startidx, delcount, newelem...)

            // item.splice(2, 1, 23);

            // Add item
            // item.splice(2, 0, 102);

            //delet item
            // item.splice(2, 1);

            // Replace item
            // item.splice(3, 1, 101, 103);
            // console.log(item);


                    //! Practice - Create an Array to store Companies:-
                    //! "Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".

           //* (a) - Remove the first company from the Array.
        //    let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
        //    companies.shift();
        //    console.log(companies);


           //* (b) - Remove "Uber" and Add " OLA" in its place.
        //    let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
        //    companies.splice(2, 1, "OLA");
        //    console.log(companies);

           //* (c) - Add Amazon at the end.
            // let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
            // companies.push("Amazon");   
            // console.log(companies);