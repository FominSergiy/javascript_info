
//TODO Rewrite the function using '?' or '||'
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

let age = +prompt("What is your age?", "");

//? using ?
function checkAge(age) {
    return (age > 18) ? true : confirm("Did you parent allow you?");
}

//? using ||
function checkAgeWithOr(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

//execute functions defined above
checkAge(age);
checkAgeWithOr(age);

//TODO Function min(a, b)

let a = +prompt("What's the value of a?", "");
let b = +prompt("What's the value of b?", "");

function min(a, b) {
    let minNum = (a <= b) ? a : b;
    alert(minNum);
    return minNum;
}

min(a, b);

//TODO Function pow(x,n)
// will be using inputs from above

function pow(a, b) {
    let num = a ** b;
    alert(num);
    return num;
}

pow(a, b);