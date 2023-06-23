// // //VARIABLES
// // //let,var,const

// // //console.log (name); // Print to the console

// // const name = "pizza";
// // const topping = "pineapple";
// // /* adding two stings;
// // concatenation */

// // console.log(name, topping);

// // // TEMPLATE LITERALS 
// // console.log(`${name} ${topping}`);

// // console.log("string" + 32);

// // // integer

// // // booleans

// // //falsey values, undefined, null, 0

// // let num = undefined;

// // console.log(Boolean(num));

// // let prompt1 = prompt("What is your name?");
// // let howOldAreYou = prompt("How old are you?");
// // let whatIsYourHobby = prompt("What is your Hobby?");
// // alert(`${prompt1} is ${howOldAreYou} and likes ${whatIsYourHobby}`);

// //CONDITIONALS////////////////********  THIS IS WHERE CODNTIONALS BEGIN

// //truthy values
// //faslsey values undefeined, null, 0

// //conditional operators
// // ==; 1===1 is true
// // ==; loose equals; 1 == '1'
// // losse equals; checks if value is the same regardless of datatype
// // 1 !==2; is true
// // <, >, !== ( means not euals), <=, >=
// //more than or equal to

// // if statements : a way to compare two things to see f

// // if (this is true) { then run this }

// // if ( 'collin' === 'collin') {
// //     console.log("hello world");
// // // }

// // // = ; assignment operator
// // // == ; loose equals
// // //===; strict equals

// // //LOGICAL OPERATOR
// // //|| && ??
// // //|| OR
// // // && AND checks to see if all condions are true
// // // ?? NULLISH

// // // does x equal 0 and y = 1 is what
// // let x = 0;
// // let y = 0;

// // if (x === 0 && y === 0) {
// //   console.log("hello world");
// // }

// // // OR OPERATOR

// // let questComplete = false;
// // let questComplete2 = false;
// // let slimesDefeated = 0;
// // if (slimesDefeated === 10) {
// //   questComplete = true;
// // }

// // // if (i===1 || k===1) {
// // //     console.log('hello world')
// // // }

// // //if this happens or this happens

// // //ELSE; if this statement is false

// // let v = 10;
// // let u = 8;

// // if (v === 9) {
// //   console.log("hello world");
// // } else {
// //   console.log("goodbye world");
// // }

// // ///ways to use for log in page

// // let login = false;

// // //redirect to page
// // if (login == true) {
// // } else {
// //   alert("user doesn't exist");
// // }

// // // else if is a code that would run if the conditions before it are false and specifies a new condition

// // // if (login === true){

// // // } else if ()
// // let q = 0;
// // if (q === 1) {
// //   console.log("hello world");
// // } else if (q === 0) {
// //   console.log("goodbye world");
// // } else {
// //   console.log("something");
// // }

// // let user = "guest";

// // if (user === "admin") {
// //   //redirects to admin page
// // } else if (user === "user") {
// //   //redirect page to user page
// // } else {
// //   alert("account not found");
// // }

// // let username = prompt("Enter your user name ");

// if (username === "leyanna123") {
//   alert("logged in!");
// } else if (userName === "tyanna321") {
//   alert("logged in!");
// } else {
//   alert("no account found");
// }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr =  ['liv', 'kanar', 'derrick']

// console.log(arr[randomNumber])

// if (arr[randomNumber] === 'liv') {
//     console.log("Hello world")
// } else if ()
//  else {
//     console.log(" tech youre wrong")
// }

let randomnumber = Math.floor(Math.random() * 10);
console.log(randomnumber);
let prompt2 = prompt("guess the random number");
if (randomnumber === prompt2) {
  alert("congrats you got it");
} else {
  alert("sorry try again");
}
