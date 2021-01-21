//TODO Basic operators, maths


// The postfix and prefix forms
let a = 1, b = 1;

let c = ++a; //? c == 2
let d = b++; //? d == 1 but b == 2

// Assignment result
let a = 2;

let x = 1 + (a *= 2); //? x == 5

// Type conversions

"" + 1 + 0 //? "10"
"" - 1 + 0 //? -1
true + false //? 1 
6 / "3" //? 2
"2" * "3" //? 6
4 + 5 + "px" //? "9px"
"$" + 4 + 5 //? "$45"
"4" - 2 //? 2
"4px" - 2 //? NaN
7 / 0 //? Infitinty
"  -9  " + 5 //! "-95" actual "  -9   5"
"  -9  " - 5 //? -14
null + 1 //? 1
undefined + 1 //! undefined actual NaN 
" \t \n" - 2 //! NaN actual -2 - string on the left is treated as an empty string, hence 0

// Fix the addition

//! original
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

//! should be

//? either
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3

//? or
let a = number(prompt("First number?", 1));
let b = number(prompt("Second number?", 2));

alert(a + b); // 3//? either