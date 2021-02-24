'use strict';

//TODO Searching algorithm

let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

alert(pockets.pen); // 3
alert(bed.glasses); // 1


//TODO Why are both hamsters full?

let hamster = {

    stomach: [],

    eat(food) {
        this.stomach = []; //this is the fix - setting stomach to the object calling the method
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
lazy.eat('pineapple');

alert(speedy.stomach); // apple
alert(lazy.stomach); // pineapple
