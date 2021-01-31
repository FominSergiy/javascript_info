//TODO Hello, object

let user = new Object(); //? or let user = {};
user['name'] = 'John'; //? user.name works fine too
user['surname'] = 'Smith';
user['name'] = 'Pete';
delete user['name'];

//TODO Check for emptiness

function isEmpty(obj) {
    for (let key in obj) {
        return false;
        // if loop has started then there is a property
    }
    return true;
}

//TODO Sum object properties

let salaries = {
    'John': 100,
    'Ann': 160,
    'Pete': 130
}

let sumSalaries = 0;
for (let prop in salaries) {
    sumSalaries += salaries[prop];
}

alert(sumSalaries);

//TODO Multiply numeric property values by 2

let menu = {
    'width': 200,
    'height': 300,
    'title': 'My menu'
}

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] !== 'number') continue;
        obj[key] *= 2;
    }
}