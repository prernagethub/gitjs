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
    while(loopvariable <= n){
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

    let num = 120;
    for (let i = 1; i<=num; i++) {
        console.log(num);
        
    }

    // reasons
    // while -> when we dont know the number of iteration
    // for -> when we know the nimber of iterations
    // do while -> when we want to execute the loop for once

    // funtion : function is chunk of code that can use multiple times ............................................

// there are two types of functions
1) static function (never change)
2) dynamic function 

//  static type programming language
//  non-parametrized funtion (also return value)
function funname(){
    // body of funtion
    console.log("test");
}

// console.log("hello")  -- print this 100 times then took space 100 times


// for(let i=0; i<100 ;i++){
// console.log("hello") -- print this 100 times then took time 100 times

// }


funname(); // funtion callling

procedural  programming (before use conditional statement and control flow statement)
function procedural programming
//  function can reuse
//  redundency(same code write multiple time)remove then use of funtion
//  and funtion can reuse

//  parametrized funtion
function sum(a , b){  (parameters - hold the values)
    // body of funtion
    console.log(a+b);
}

sum(1,3); // funtion callling (arguments)
sum(13,29); // funtion callling (arguments)



// let a = sum(2,6);  a function call is replaced by the return value 



//  rules of returning a value from a funtion

//  1. must be a single return statement in funtion
//  2. return statement must be the last statement in a funtion
//  3. return statement can return only one value


let count =5;

//  impure function -> function uses external data that is not passed as  a parameter  or declared inside the funtion.

function dets(){
    count++;
    // console.log(count);
    return count;
}


// pure function

function dets(c){
   c++;
   return c;
    // console.log();
}


dets(count);
