function makeUser() {
    console.log(`call from inside makeUser function: ${this}`);
    return {
        name: "John",
        ref: this
    };
};

const user = makeUser();
console.log('call makeUser from global context: ', user);
console.log(user.ref);

const someUser = () => {
    // console.log(`call from inside makeUser function: ${this}`);
    return {
        name: "John",
        ref: this
    };
};

console.log('call someUser from global context: ', someUser);
console.log('call attr ref of someUser from global context: ', someUser.ref);
//
console.log(someUser);
console.log(someUser());