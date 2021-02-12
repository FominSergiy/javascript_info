//TODO Sum with closures

function sum(a) {

    return function addB(b) {
        return a + b;
    }
}

alert(sum(5)(4)); //crazeeeeee

//TODO Filter through function

const arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}


function inArray(array) {
    return function (x) {
        return x in array;
    }
}

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2

//TODO Sort by field

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(fieldName) {
    return function (a, b) {
        const result = a[fieldName] > b[fieldName] ? 1 : -1;
        return result;
    }
}


console.log(users.sort(byField('name')));

// console.log(users.sort(byField('age'))); //? why I can't call both together?


//TODO Army of functions

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () { // create a shooter function
            alert(i); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 0 from the shooter number 0
army[1](); // 1 from the shooter number 1
army[2](); // 2