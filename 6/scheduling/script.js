'use scrict';

// TODO Output every second
//? set Interval
const printNumbers = (from, to) => {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(1, 5);

//? nested setTimeout
const printNumbersNest = (from, to) => {
    let current = from;

    setTimeout(function step() {
        alert(current);

        if (current < to) {
            setTimeout(step, 1000);
            current++;
        }
    }, 1000);

}

printNumbersNest(1, 5);