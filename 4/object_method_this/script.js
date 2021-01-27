//TODO Create a calculator

let calculator = {
    a: 0,
    b: 0,
    read() {
        let a = prompt("Enter value for a ", "");
        let b = prompt("Enter value for b ", "");
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
alert(`val for a ${calculator.a}, and ${calculator.b} for b`);