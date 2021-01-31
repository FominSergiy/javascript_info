//TODO Create new Calculator

function Calculator() {
    this.a = null;
    this.b = null;
    this.read = function () {
        let a = +prompt("enter value for a", "");
        let b = +prompt("enter value for b", "");
        this.a = a;
        this.b = b;
    };
    this.sum = function () {
        let sum = this.a + this.b;
        alert(sum);
        return sum;
    };
    this.mul = function () {
        let mul = this.a * this.b;
        alert(mul);
        return mul;
    }
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();

//TODO Create new Accumulator

function Accumulator(startingValue) {
    this.value = +startingValue;
    this.read = function () {
        let add = +prompt("enter a number to add to starting value", "");
        this.value += add;
    };
}

let acccumulator = new Accumulator(5);
acccumulator.read(5);
acccumulator.read(10);
alert(acccumulator.value);