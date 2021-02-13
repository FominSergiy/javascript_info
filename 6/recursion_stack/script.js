//TODO pow recursion

/* function pow(x, n) {
  let result = 1;

  multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2, 3) ); // 8
*/

//! remember about the execution context - no need to pass in some aggregator arguement
//! execution context deals with it already
function recursivePow(x, n, prevResult = 1) {
    let result = prevResult * x;
    n -= 1;

    result = n != 0 ? recursivePow(x, n, result) : result;
    return result;
}

// alert(recursivePow(2, 5));

//? from  txt book --  xn = x * xn-1
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// alert(pow(2, 3)); // 8



let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

// The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}

// alert(sumSalaries(company)); // 7700

//TODO Sum all numbers till the given one


const sumNumbersTo = 100;

// using for loop
function sumToLoop(n) {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        result += i;
    }

    return result;
}

// sumTo(n) = n + sumTo(n-1) for n > 1
// recursion
function sumToRecursive(n) {
    if (n == 1) return n;
    return n + sumToRecursive(n - 1);
}

// arithmetic progression
function sumTo(n) {
    return n * (n + 1) / 2;
}

// alert(sumToRecursive(sumNumbersTo));
// sumToLoop(sumNumbersTo);
// alert(sumTo(100));


//TODO Calculate factorial

function factorial(n) {
    if (n == 1) return n;
    return n * factorial(n - 1);
}

// alert(factorial(4));

//TODO Fibonacci numbers
// skipping for discussion






//TODO Output a single-linked list
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//! for loop ?? --don't know how
function printListLoop(list) {
    let result = 0;
    for (let property in list) {

        if (property == 'value') result += list[property];

        // alert(list[property]);
    }
}

//recursion
function printListRecursive(list) {
    if (list.next == null) {
        return list.value;
    } else {
        return list.value + printListRecursive(list.next);
    }
}

// alert(printListRecursive(list));

//TODO Output a single-linked list in the reverse order 

//recursion
const printListRecursiveOne = (list) => {
    console.log(list.value);

    if (list.next) {
        printListRecursiveOne(list.next);

    }
}

printListRecursiveOne(list);