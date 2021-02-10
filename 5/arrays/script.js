//TODO Array operations.

const styles = ['Jazz', 'Blues']; //1

styles.push('Rock-n-Roll'); //2

const stylesMidPoint = (styles.length % 2 == 0) ? //3
    styles.length / 2 : styles.length / 2 - 0.5; //3

styles[stylesMidPoint] = 'Classics'; //3

const firstStyles = styles.shift(); //4

styles.unshift('Rap', 'Reggae'); //5

// alert(styles);


//TODO Sum input numbers
// alert(sumInput());

function sumInput() {
    const enteredVals = [];
    let result = 0;

    while (true) {
        let value = prompt("Enter a valid number", "");

        if (value === "" || value === null || !isFinite(value)) break;

        enteredVals.push(+value);
    }

    for (let i of enteredVals) {
        result += i;
    }

    return result;
}

//! A maximal subarray -- will return later, challenging problem


// Array Methods
//! array sorting arguements -- filter()


//TODO Translate border-left-width to borderLeftWidth
// alert(camelize('hi-there-my-man'));

function camelize(str) {
    arr = str.split("-");

    for (let i of arr.keys()) {
        if (i == 0) continue;

        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join("");
}

//TODO Filter range
let newArr = [1, 2, 10, 25, 3, 4];
const a = 10;
const b = 25;

const filteredArrr = filterRange(newArr, a, b);
// alert(filteredArrr);


function filterRange(arr, a, b) {
    const result = arr.filter(item => item >= a && item <= b);
    return result;
}


//TODO Filter range "in place"
let inPlaceArr = [10, 1, 2, 34, 15];
const c = 5;
const d = 10; //? why would it return 10?

// filterRangeInPlace(inPlaceArr, c, d);

function filterRangeInPlace(arr, c, d) {

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (val < c || val > d) {
            arr.splice(i, 1);
            i--;
        }
    }
    // alert(arr);
}


//TODO Sort in decreasing order

const arr4 = [5, 2, 1, -10, 8]; //! revisit this
const sortedArr = arr4.sort(function (a, b) { return b - a });

// alert(sortedArr);


//TODO Create an extendable calculator

// const powerCalc = new Calculator();
// alert(powerCalc.calculate('4 + 5'));
// alert(powerCalc.calculate('4 - 5'));

// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// console.log(powerCalc.calcMethods);

// let result = powerCalc.calculate("2 ** 4");
// alert(result); // 16


function Calculator() {
    this.calcMethods = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        },
    };
    this.calculate = function (str) {
        const numArr = str.split(' ');
        const operationSign = numArr[1];

        const operation = this.calcMethods[operationSign];

        return operation(+numArr[0], +numArr[2]);
    };
    this.addMethod = function (name, func) {
        this.calcMethods[name] = func;
    }
}

//TODO Map to names
/* map is like lambda function in python
*  or list comprehension
* arr = [ i[name] for i in users ]
*
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);
// alert(names);

//TODO Map to objects

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john1, pete1, mary1];

const userMapped = users1.map(item => makeFullName(item));
// alert(userMapped[0].id);
// alert(userMapped[0].fullName);


function makeFullName(user) {
    const newUser = {
        id: user.id,
        fullName: user.name + user.surname,
    };
    return newUser;
}

//TODO Sort users by age
//? using users array from above

const sortedUsers = users.sort((a, b) => a.age - b.age);
// alert(sortedUsers);

//TODO Sort users by age
//? using users array from above
// getAverageAge(users);

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

//TODO Filter unique array members
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// alert(unique(strings));

function unique(arr) {
    const result = [];

    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return uniqueArr;
}

//TODO Create keyed object from array

groupById(users);

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value; //? and is overriden with a new value here
        return obj; //this returned to the next iteration
    }, {})
}