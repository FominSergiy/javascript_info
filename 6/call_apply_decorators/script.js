'use strict';

// TODO Spy Decorator

let work = (a, b) => {
    alert(a + b); // work is an arbitrary function or method
}

//? spy decorator
const spy = (func) => {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

// work = spy(work);
// work(1, 2);
// work(4, 5);

// //iterate over results
// for (let args of work.calls) {
//     alert('call:' + args);
// }


//TODO Delaying decorator

let f = (x) => {
    alert(x);
}

const delay = (f, ms) => {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
        // arrows have no this or arguements - outer context is taken for them
    }
}

let f1000 = delay(f, 2000);

// f1000('test');

//TODO Debounce decorator

const debounce = (func, ms) => {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}

let f1 = debounce(f, 1000);
f1("a");
setTimeout(() => f1("b"), 200);
setTimeout(() => f1("c"), 500);