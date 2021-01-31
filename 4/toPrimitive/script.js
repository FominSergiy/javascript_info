//TODO test toPrimitive conversion

// idea :
// we can add toPrimitive conversion to set the default conversion
// of attributes for a given Object

let lastName = Symbol('lastName');

let user = {
    'name': 'Se',
    [lastName]: 'Hoo',
    'age': 39,
    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == 'string' ? this.name + '-' + this[lastName] : this.age;
    }
}

alert(user.name + '-' + user[lastName]);
alert(user); //? string
alert(+user + 10); //? num
alert(user + 'Hohoho'); //? default