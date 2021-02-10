'use strict';

//TODO Sum numbers from the visitor

// will try to implement Objects where possible
const visitor = new Visitor();
visitor.showSum();


function Visitor() {
    this.firstNum;
    this.secondNum;
    this.showSum = function () {
        this.firstNum = +prompt("Type your first number", "");
        this.secondNum = +prompt("Type your second number", "");

        const sumOfTwo = this.firstNum + this.secondNum;

        alert(`This is your sum: ${sumOfTwo}`);
    }
}


//TODO Repeat until the input is a number

const validNum = new ValidNumber();
const result = validNum.readNumber();

alert(`Your number is ${result}`);

function ValidNumber() {
    this.number;
    this.readNumber = function () {

        while (!isFinite(this.number)) { //? null is treated as 0;
            this.number = prompt("Enter a valid number", "");
        }

        if (this.number === null || this.number === '') return null;

        return +this.number;
    }
}

//! skipping math problems

