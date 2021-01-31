'use strict';

/*
for loop can be assigned a label and then used to break it from
an inner loop

continue can be used on labels as well

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    ? if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    ?do something with the value...
  }
}
alert('Done!');

for (begin ; condition ; increment) {}
*/


let numList = [];
//TODO Output even numbers in the loop
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) numList.push(i);
}
alert(numList);


//TODO Repeat until the input is correct
let enteredNum;

do {
  enteredNum = +prompt("Enter a number from 0 to 100", "");
  if (!enteredNum) break;

} while (enteredNum <= 100);

//TODO Replace "for" with "while"
/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let i = 0;
let secNumList = [];
while (i < 3) {
  secNumList.push(i);
  i++;
}
alert(`Single Numbers are boing, here is the list! ${secNumList}!`);

//TODO Output prime numbers
let n = +prompt("Enter the end of num range", "");

findPrime: for (i = 2; i <= n; i++) {

  //? for each number in range compare with the rest of numbers
  for (j = 2; j < i; j++) {
    // cut the inside loop to the range up to a number in question
    // if it can be % == 0 then it's not prime, since itself and 1 not in range
    if (i % j == 0) continue findPrime;
  }
  alert(i);
}