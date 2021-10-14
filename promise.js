// const isLegal = new Promise((resolve, reject) => {
//     let age = 20
//     if(age >= 18){
//         setTimeout(() =>  resolve("Major"), 1000 * 4)
//     } else {
//         reject("Minor");
//     }
// });

// console.log(isLegal);



//when the set timer is given the state will be pending upto 4 secs. IN PRACTICLE USE WE CANT USE SETTIMER FOR PROMISE

// const isLegal = new Promise((resolve, reject) => {
//     let age = 20
//     if(age >= 18) {
//         resolve("Major");
//     } else {
//         reject("Minor");
//     }
// });

// //console.log(isLegal);  <= To finding the sate whether it is fulfill, pending, rejected


// 1st 
// isLegal
// .then((msg) => console.log(msg))  //skip
// .catch((errMsg) => console.log(errMsg));

// 2nd
// isLegal
// .then((msg) => console.log(msg + "! Congratulations"))
// .catch((errMsg) => console.log(errMsg)); //skip

// 3 Chaining
// console.log(
//     [1, 2, 3]
//     .map( x => x * 2)                                          // map returns array it returns [2, 4, 6]
//     .map( y => y + 4)                                         //returnns [6, 8, 10]
// );


// isLegal
// .then((msg) => console.log(msg + "! Congratulations"))       // Returns promise object contain string   Prints- Major Congratulations
// .then((msg1) => console.log(msg1 +  "Nice"))                 //Returns promise object                   Prints- Undefined Nice
// .catch((errMsg) => console.log(errMsg));                     //Returns promise object

// isLegal
// .then((msg) => console.log(msg + "! Congratulations"))         // Returns promise object contain string Prints- Major Congratulations
// .then((msg1) => console.log(msg1 +  "Nice"))                   // Major congratulations - prints the major congratulations Nice        
// .then((msg2) => console.log(msg2 +  "Good"))                   // It prints - undefined Good
// .catch((errMsg) => console.log(errMsg));

// function x() {
//     console.log("Awesome");
// }
// var y = x();
// console.log(y);                                                  //it gives Undefined


// function x() {
//     return "Awesome";
// }
// var y = x();
// console.log("y is ", y);                                         //It returns y is Awesome




//How to catch the error 
// 1 example
// try{
//     const data = JSON.parse('{"x":4, "name": "Pratik"}');
//     console.log(data, '{"x":4, "name" "Pratik"}' );
// }catch(err){
//     console.log("Try again");                                // if there is a error in that it shows try again. If there is a no error it doesnt go in catch block
// }

// 2 example
// try{
//     console.log(x1);
// } catch {
//     console.log("May be your variable is not declered");
// }













const msg = (count) =>
  new Promise((resolve, reject) => {
      if (count >= 1) {
          setTimeout(() => {
              document.querySelector(".countdown").innerText = count;
              resolve(count);
          }, 1000);
      } else {
          setTimeout(() => {
              document.querySelector(".countdown").innerText = "Happy Independence Day";
              reject("Completed");
          }, 1000);
      }
  });

  msg(9)
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .then((ct) => msg(--ct))
  .catch((err) => console.log(err));




        

  



 




