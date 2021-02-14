
//TODO Set and decrease for counter

// Modify the code of makeCounter() so that the counter can also decrease and set the number:

function makeCounter() {
    // instead of:
    // let count = 0

    function counter() {
        return counter.count++;
    };

    counter.set = function (val) {
        return counter.count = val;
    }

    counter.decrease = function () {
        return counter.count--;
    }

    counter.count = 0;

    return counter;
}

// let counter = makeCounter();
// counter.set(10);
// counter();
// counter.decrease();
// console.log(counter());


//TODO Sum with an arbitrary amount of brackets

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

alert(sum(1)(2)(3).toString());
