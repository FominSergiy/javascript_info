//TODO Sum the properties

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let emptySalary = {
};

function sumSalaries(obj) {
    const salaryArray = Object.values(obj);
    let result = 0;

    if (salaryArray.length == 0) return 0;

    for (let item of salaryArray) {
        result += item;
    }

    return result;
}

alert(sumSalaries(salaries)); // 650
alert(sumSalaries(emptySalary)); // 0

//TODO Count properties

let user = {
    name: 'John',
    age: 30,
    height: 'too tall',
    iq: 'too small to even bother'
};

function count(obj) {
    return Object.keys(obj).length;
}

alert(count(user)); // 4
