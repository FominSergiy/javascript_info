//TODO The name of JavaScript

let userInput = prompt("The name of JavaScript (be case sensetive)", "");
let alertMsg;

if (userInput == "ECMAScript") {
    alertMsg = "Right!";
} else {
    alertMsg = "Didn't know? ECMAScript!";
}
alert(alertMsg);

//TODO Show the sign

userInput = +prompt("Enter a number (can be negative too!)", "");
let displayNum

if (userInput > 0) {
    displayNum = 1;
} else if (userInput === 0) {
    displayNum = 0;
} else {
    displayNum = -1;
}
alert(displayNum);


//TODO Rewrite 'if' into '?'

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let a = +prompt("Enter value for a:", "");
let b = +prompt("Enter value for b:", "");

let result = (a + b) < 4 ? "Below" : "Over";
alert(result);

//TODO Rewrite 'if..else' into '?'

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt("Are you Employee or Director?!", "");

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' : ''
    ;
alert(message);

