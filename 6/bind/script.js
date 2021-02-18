'use strict';

//TODO Function property after bind

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};
//? bind methods beloging to user (this) and pass user context to it
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


//TODO Partial application for login

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let userTwo = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

// pass Bool parameter for ternary operator inside login() func of userTwo
askPassword(userTwo.login.bind(userTwo, true),
    userTwo.login.bind(userTwo, false)); // ?



