// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hellooooooooooo");

// //npm install --save package-name // for eaxitng folder
// //npm install -g pacakage name// for global
// //npm install -D pacakage name// for dev dependency

// //for running nodemon = nodemon filename
// //for exit nodemon = control C

// // js is loosely coupled language
// //word vs keyword
// //statement vs expression
// //statement - multiple line + single output a = 2,b = 4, a+b=c
// //expression - single line + single output c = 5 + 6
// //case sensitivity

// //number system...............
// // 0 1 2 3 4 5 6 7 8 9 = decimal number
// // 0 1 - binary

// //ascii code = ............................

// //A B C
// //! # ^ &
// //a -97
// //A - 65
// //1 - 49
// //" " - 32

// // output method...................
// // console.log();


// // comments.........................
// // single line comments
// // this is a singke line comment


// // multiple line comments
// // this
// // is 
// // a multiline
// // comment


// // variables...........
// // variable nothing but a container which is used to store values..
// // var varname = "value";

// // var varname -- declaration
// // var varname = "value" -- intialization
// // var varname = "10" -- reintialization/updation


// // scope............................

// {
//   // var a = "2";      global scopic variable
//   // let b = "5";    local scopic variable
//   // const c = "34"  local scopic constant variable

// }



// // datatypes....................
// // number - 12 ,-12 ,.12 ,-12.12
// // string = "" , ''
// // Boolean = true/false
// // null - null(Object)
// // undefined - undefined
// // Symbol - homework

// //naming convention for variables......................
// //1. relatablem | age = 23
// //2. starts with lower/upper case,_
// //3. never start with number or special character other than \
// //4. must be single word
// //5. in case of multiple words we use sperators/patterns like:

//    //1. camelCasePattern = childAge = 23
//   //2. snake_case_pattern = parent_age = 34
//   //3. pascalCasePattren = GrandParentAge = 45
//   //4. kebab-case-pattern = child-age = 42 (not allowed)


//   // oprators................................................
//   // 1. arithematic operator = +,-,*,/,( % modulo),(++ increment, --decremrnt)
//   // 2.assignment/shorthand operators =, +=, -=, *=, /=, %=
//   // let a = 4
//   // let b = 6
//   // a = a + b
//   // a += b


//   // let a = 45;
//   // let b = 10;
//   // let b = ++a; pre increament
//   // let b = a++; post increament

//   // console.log(a);
//   // console.log(b);

// //  let res = ++a + --b + a-- - b++ + a + --a - b-- + a++ - ++b;
// //  let res = 46 + 9 + 46 - 9 + 45 + 44 - 10 + 44 - 10;
// // console.log(res); 205
// // console.log(a); 45
// // console.log(b); 10




//   //3. comparison oprators(results boolean only- true/false) ==,===(type equality check oprator), !=, !==, >, <, >=, <=
//   // let a = "20";
//   // let b = 20;
//   // console.log(a==b); true
//   // console.log(a===b); false


// //   let a = "hello";
// //   let b = "world";

// //   console.log(a>b); false
// //   Compare the first characters of a and b:
// // 'h' (Unicode value 104) in "hello"
// // 'w' (Unicode value 119) in "world"

//   // 4. logical oprators &&, ||, !
//   // falsy value: false, 0 , null, undefined, '', NaN

//   // let a = 0;
//   // let b = 6;
//   // let c = 3;
//   // console.log(a && b && c); jaha glt value milti hai vhi ruk jata hai. 0
//   // console.log(a || b || c); jaha tak shi value milti rhti hai vha tak chlta hai 6
//   // console.log(!(1>-1));

//   // Control flow / coditional statements...........................................

// // if(condition){
// // code
// // }

// // let n = 10;
// // if(n>0){
// // console.log("Number is positive")
// // }

// //  if -else

// // if(n>0){

// // console.log("Number is positive")
// // }
// // else{
// //     console.log("Number is negative")
// // }

// // mutiple /ladder if else
// // if(condition){
// // code
// // }
// // else if(condition){
// // code
// // }
// // else if(condition){
// // code
// // }
// // else if(condition){
// // code
// // }
// // else{
// // code
// // }


// // if(n>0){
// //  console.log("number is positive");
// // }
// // else if(n<0){
// //     console.log("number is negative");
// // }
// // else{
// //     console.log("number is zero");
// // }

// // nested if else...........

// // if(condition){
// //     if(condition){
// //         code
// //     }
// //     else{
// //         code
// //     }
// // }
// // else{
// //     if(condition){
// //         code
// //     }
// //     else{
// //         code
// //     }
// // }

// // complexcity of code is decrease by using the losical operator.
// // && -all condition is true then only true

// // a=10;
// // if(a >0 && a% 2== 0){
// //     console.log("Number is positive and even")
// // }
// // else if(a>0 && a%2 != 0){
// //     console.log("Number is positive and odd")
// // }
// // else if(a<0 && a%2 == 0){
// //     console.log("Number is negative and even")
// // }
// // else if(a<0 && a%2 != 0){
// //     console.log("Number is negative and odd")
// // }
// // else{
// //     console.log("Number is zero")
// // }

// let number = 8;

// if(number==1){
//     console.log("monday");

// } else if (number == 2) {
//     console.log("tuesday");

// } else if (number == 3) {
//  console.log("wednesday");

// } else if (number==4) {
//     console.log("thusday");

// } else if (number==5) {
//     console.log("friday");

// } else if (number==6){
//     console.log("saturday");

// } else if (number==7){
//     console.log("sunday");

// } else {
//     console.log("invalid number");

// }


// // switch case..........................fast

// // syntax

// // switch (var) {
// //     case val:
// //         result
// //         break;
// //     case val:
// //         result
// //         break;
// //     default:
// //         result
// //         break;

// // }

// let a = 3;
// switch (a) {
//     case 1:
//         console.log("Mon");
//         break;

//     case 2:
//         console.log("Tues");
//         break;

//     case 3:
//         console.log("Wed");
//         break;

//     default:
//         console.log("invalid"); 
//         break;
// }


// // ternary oprator | condition opration | if-else expression | should be used when we have only have the possibility to use simple if-else statement.........................
// // syntax...
// // let var = condition expression ? true/if expression : false/else expression

// let age = 20; 
// let result = age > 18 ? "You can vote" : "You can't vote";
// console.log(result);




// const val = 9;
// if(true && false){
//     console.log("greater than 5 but smaller than 9");
// }
// else{
//     console.log("smaller than 5");
// }



// && => agar ek bhi false toh sab sab false 
// || => agar ek bhi true toh sab sab true 


// loops............................

// control flows

// loop variable (holds intial value of the loop)
// loop condition expression (check the condition of loop)
// loop body (execute the code block of loop)
// loop updation expression(updates the loop variable)
// loop termination (stops the loop)
// due to condition failure (natural termination)
// due to break/return keyword (forced termination)


// 1. entry loop (for ,while)
// 2. exit loop (do while)

// while loop syntaxx
// loopvar = 0
// while(condition){
//     body 
//     update exp
// }

// WAP to print n natural numberr
let n = 10;  //n natural number
let loopvariable = 1;  //loop variable
while (loopvariable <= n) {
    console.log(loopvariable);
    loopvariable++;
}

// do whilee syntax

// loopvariablee = 0
// do {
//     body
//     update exp
// } while(condition)

// let n1 = 10;
// let loopvariablee = 1;
// do{
//     console.log(loopvariablee);
//     loopvariablee+

// } while(loopvariablee<=n1);


// for loop syntax...............

// for (intialization condition updation) {
//     body
// }

// let num = 120;
for (let i = 1; i <= 100; i++) {
    console.log(i);

}

// reasons
// while -> when we dont know the number of iteration
// for -> when we know the nimber of iterations
// do while -> when we want to execute the loop for once

// funtion : function is chunk of code that can use multiple times ............................................

// there are two types of functions...................
// 1) static function (never change)
// 2) dynamic function 

//  static type programming language................
//  non-parametrized funtion (also return value)
// function funname(){
// body of funtion
//     console.log("test");
// }

// console.log("hello")  -- print this 100 times then took space 100 times


// for(let i=0; i<100 ;i++){
// console.log("hello") -- print this 100 times then took time 100 times

// }


// funname(); // funtion callling............

// procedural programming (before use conditional statement and control flow statement)
// function procedural programming
//  function can reuse
//  redundency(same code write multiple time)remove then use of funtion
//  and funtion can reuse

//  parametrized funtion..........
// function sum(a , b){  (parameters - hold the values)
// body of funtion
// console.log(a+b);
// }

// sum(1,3); // funtion callling (arguments)
// sum(13,29); // funtion callling (arguments)



// let a = sum(2,6);  a function call is replaced by the return value 



//  rules of returning a value from a funtion

//  1. must be a single return statement in funtion
//  2. return statement must be the last statement in a funtion
//  3. return statement can return only one value


// let count =5;

//  impure function -> function uses external data that is not passed as  a parameter  or declared inside the funtion.

function dets() {
    count++;
    console.log(count);
    return count;
}


// pure function

// function dets(c){
//    c++;
//    return c;
// console.log();
// }


// dets(count);


// default parameterss.............................................................................
function details(name, age, batch, city = "bhopal") {
    console.log("name is " + name);
    console.log("my age is " + age);
    console.log("my batch is " + batch);
    console.log("my city is " + city);
    return name + age


}
// console.log(details("prerna","25","mern13"));

details("prerna", "25", "mern13")
details("prerna", "25", "mern13", "indore")   //override

// ruless
// 1. default parameters should be at the end parameterr
// 2. there should be single default parameter in a functionn


// rest oprator..................................... gives an answer in array
function hobbies(name, ...h) {
    console.log(name);
    console.log(h);
}
hobbies("john", 1, 2, 3, 3, 4, 4, 5, 6, 7)

// ruless
// 1. rest oprator should be the last oprator
// 2. only one rest oprator is allowed in a function

// normal function
function sum(a, b) {
    return a + b;
}
let ress = sum(1, 2);
console.log(ress);



// arrow function--- with single expression
let funvar = (a, b) => a + b;
let res = funvar(1, 2);
console.log(res);


// arrow function/fat arrow function - with multiple lines
let x = () => {
    // multiple line statment
};

// hoisting............................ 26/12/2024

// on the top all the declearation and initialization are done, then the code is executed line by line after compliation.

// function sayHi(){
//     console.log("hi");   
// }



// var i;  (partially hoisted)



//let i;
//.......TDZ(temporal dead zone).........
//i = undefind

//--------------------------------------------------------------------
//hoisting - using varible/function before decleartion 
//normal function are fully hoisted (function with keyword "function"), variable(var) are partially hoisted, let and const are not hoised (TDZ-temporal dead zone).

sayHi();



function sayHi() {
    console.log("hi");
}

///.............................
console.log(i);

var i = 12;

//////.........................

// console.log(g);
// let g = 12;

//ReferenceError: Cannot access 'g' before initialization. - variable created(declare) but not initialized. 
// ReferenceError: g is not defined. - variable not created(declare). 

//.......................arrow function

// console.log(a);

// let a = () => {
//     console.log("hello world");

// }

// ReferenceError: Cannot access 'a' before initialization

//......................................


// console.log(b);   //undefind.

// var b = () => {
//     console.log("hello world");

// }


//.......................................


// console.log(c);

// const c = () => {
//     console.log("hello world");

// }

// ReferenceError: Cannot access 'c' before initialization

//Array/object...............27/12/2024

//primitve / non-reference / immutable data types
//Number = 83
// string = ""
// boolean = true/false
// undefind = undefind
//Null = NUll
//symbol = symbol

//EXAmple 
let d = 33;
let e = d;   //the value of a is copied and passed in b
console.log(d);
console.log(e);

d = 35;
console.log(d);
console.log(e);

//non-primitve / refence / mutable data type
//array = [34,'john',true,null,undefined,[1,2,3,4], {}]

//Example

let arr1 = [1, "maish", 2, 3, 4, "rajput"];
let arr2 = arr1;
console.log(arr2);
console.log(arr1);



let obj1 = {
    age: 23,
    name: "Prenamm",
    ismarried: "Node",
    subjects: []
};

let obj2 = obj1;  //not able to copy obj1 in obj2 instead both obj1 & obj2 variable (refence ) pointing same object (two varible pointing same value)
console.log(obj2);
console.log(obj1);
obj2.name = "manish"
console.log(obj2);
console.log(obj1);


// CRUD operation...........................................................30/12/24

//  Creating  Array
//  let arr = []
// let arr = new array()
//  let arr = [12, "abc" ,true , null , undefined , [] , {}, () =>{}]
// let arr = [12, 32, 54, 6, 90, 8, 12, 65, 34, 17];

// console.log(arr.length); // return the length a array

// console.log(arr);

// Reading array items......

// console.log(arr[3]);
// console.log(arr.at(-1)); //(read element from ending , -1 is index of last element)

//  Updating aray items.....................
//  arr[0]= 34;
//  console.log(arr);

// Delete array items,.............................
// delete arr[0]; // this delete the value and reserved the space
// console.log(arr);

//  traversing array element..........................
// for(let i=0; i< arr.length; i++){
// console.log(i , " >> ", arr[i]);
// }

// for(const element of arr){
//     console.log(element);   // read all the values of array.
// }


//  callback function ( callback & anonymous function jo function apne aap call ho rhe hote h)

// callback function(anonymous function)

// arr.forEach(function (element , index) {});
// arr.forEach(function (element , index) console.log(2);); // print one single value.
// console.log(arr);
//  forEach don't return any value.
// arr.forEach((element , index) =>{
//     //  arr[index] = element *2; // manipulation original array
//     console.log(index ," >> ", element);
// });

//  console.log(arr);
// arr.forEach((element , index) =>{
//      arr[index] = element *2; // manipulation original array
//     console.log(index ," >> ", element);
// });

//  console.log(arr);


//......................................................31/12/24

//array methods
let arr3 = [12, 34, 56, 78, 98, 76, 54, 32, 10];

//adding element in an array...........
//push - add element at the end of array
//unshift - add element at the begining of the array
//push and unshift return the length of the array

let xi = arr3.push(1234);// mutable methods
console.log(xi);

let xr = arr3.unshift(1234);//mutable methods
console.log(xr);

//removing element from an array
//pop - remove element from the end of the array
//shift -remove element from the begining of the array
//pop and shift return the element that is removed
//let x =arr.pop();//mutable methods
//let x = arr.shift();//mutable methods

//let x =arr.splice(2, 2);// mutable methods
//let x = arr.slice(3, 6);//immutable methods


//array methods
//let arr = [12, 34, 56, 78, 98, 76, 54, 32, 10];


//mapping
//let newarr = arr.map((element, index) => {
//return element +10;
//});

//let newarr = arr.map((e, i) => e + 10 );

//filtering
//let newarr = arr.filter((element, index) => {
//return element > 50;
//});

//let newarr = arr.filter ((e, i) => e > 50);

//Homework
//findindex -> findindex will return the index of the first element that satisfies the cindition
// find -> find will return the first element that satisfies the condition

//object.......................................02//1/2025

//creating object..

//let obj ={}

let obj = {
    name: "john",
    age: 30,
    city: "new york",
};

//reading object properties...
console.log(obj.name);

//let prop = "city"
// console.log(obj[prop]);

//updating object properties...
obj.name = "prerna";
obj.country = "USA";
console.log(obj);

//deleting object properties..
//delete obj.age;
console.log(obj);

//iterating over object properties...

for (const key in obj) {
    console.log(key, "->", obj[key]);
}

//JSON -> [{},{},{}] Array of object....................................
let profiles = [{
    name: "john",
    age: 30,
    city: "new york",
},
{
    name: "john",
    age: 30,
    city: "new york",
},
{
    name: "john",
    age: 30,
    city: "new york",
}

];
console.log(typeof profiles);

//JSON.stringify() -> coverts js Object to json string....
let strprofile = JSON.stringify(profiles);
console.log(typeof strprofile);


//JSON.parse() -> converts JSON strong to js object....
let objprofiles = JSON.parse(strprofile);
console.log(typeof objprofiles);



// copying objects and arrays........
let ar = [12, 34, 56];
// let newar = Object.assign([],ar);
let newar = [...ar]; //spread oprator
newar[0] = 100;
console.log(ar);
console.log(newar);




let obje = { name: "priti", age: 23 };
// let newob = Object.assign({},obj);
// let newob = [...obj];
// newob.name = "manish";
// console.log(obje);
// console.log(newob);

//destructuring....................................................03/01/25

let arr = [12, 34, 56, 78, 98, 120];
// let a = arr[0];
// let b = arr[1];
// let C = arr[2];
// let D = arr[3];
// let e = arr[4];

// let [a,,,,ew] = arr;
let [a, ...b] = arr;
// console.log(a, ew);
console.log(a, b);

let detailss = {
    name: "P1zzzzzdzzzzzzzzddzrerna",
    age: 25,
    batch: "mern13"
}

// const name = details.name;
// const age = details.age;

const { age, batch, name } = detailss;
console.log(age, batch, name);

//temlate string/........................................

console.log(`name of the person is ${name} and the age is ${age}`);


//Asynchronus JS.......................................

// console.log(1);    //sync

// setTimeout(() => {
//     console.log(2);    //async
// }, 2000);

// console.log(3);  //syncc


//ASYNCHRONUS FUNCTION........,,,,,,,,,,,,,,,,,,,, 06/01/25
//settimeout  is a function that takes a function and a time in milisecond....
//setinterval
//promises
//DOM
//fetch
//asyn await


// counter = 0;
// let xe = setInterval(() => {
//     if (counter < 10) {
//         counter++;
//         console.log(counter);

//     } else {
//         clearInterval(xe);
//     }
// }, 1000);

// let time = new Date().toLocaleTimeString();
// let stop = setInterval(() => {
//     console.log(time);
//     time = new Date().toLocaleTimeString();

// }, 1000);

//dom............................................................07/01/25


// Document object model
//1. document -> inbuilt object given by js to access HTML/CSS data.
//2. secletors -> use to select the specific HTML tags from the file i.e. class selector, id selector, tag selector, attribute selector.
//3. event listners -> all the event performed by mouse/cursor is called events and the event-listeners listens the event and take the desired actions according to the developer. 


// const ai = document.getElementById("idName");
// const bi = document.getElementsByClassName("className");
// const ci = document.getElementsByTagName;

// const subheading = document.querySelector(".className");
// const subheading = document.querySelector("#idName");

// const subheading = document.querySelectorAll;

// reading element's data

// console.log(subheading.textContent); //to get the values (tags not included)
// console.log(subheading.innerHTML); //to get the values (tags included)
// console.log(subheading.innerText); //to get the values (tags not included)

// const h1 = document.querySelector("h1");

const h1 = document.querySelector(".we")
console.log( h1.innerHTML = "hello world bhai ");
//  h1.innerHTML = "hello world bhai"; //will replaced the exiting content of h1
console.log( h1.innerHTML += "kese ho?");
 // h1.innerHTML += "kese ho?";  //will append the content of h1

const button = document.querySelector(".us")
button.addEventListener("click", () => {
    h1.innerHTML = "hello world";
    h1.style.color = "royalblue";
    h1.style.fontSize = "240px";
});

