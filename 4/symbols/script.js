//TODO Let's use either Object.getOwnPropertySymbols(obj) 
//TODO or or  Reflect.ownKeys(obj) to get all my Symbols

let user = {
    'firstName': 'Se',
    'lastName': 'Ho'
}

// insert Symbol properties
let id = Symbol.for('id');
let age = Symbol('age');

user[id] = '123455';
user[age] = '39';

// ? alert(user[id]);

// get all the Symbols properties inside the user Object
// and only display Symbol values
for (let key of Reflect.ownKeys(user)) {
    (typeof key == 'symbol') ? alert(key.toString()) : null;
}

//? or store symbol values inside an array and then loop through to get
//? symbol properties of a user

const arr = [];
for (let key of Reflect.ownKeys(user)) {
    if (typeof key == 'symbol') {
        arr.push(key);
    }
}

// only displays Symbol propeties of user Object
for (let i of arr) {
    alert(user[i]);
}