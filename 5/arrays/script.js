//TODO Array operations.

const styles = ['Jazz', 'Blues']; //1

styles.push('Rock-n-Roll'); //2

const stylesMidPoint = (styles.length % 2 == 0) ? //3
    styles.length / 2 : styles.length / 2 - 0.5; //3

styles[stylesMidPoint] = 'Classics'; //3

const firstStyles = styles.shift(); //4

styles.unshift('Rap', 'Reggae'); //5

alert(styles);


//TODO Sum input numbers
alert(sumInput());

function sumInput() {
    const enteredVals = [];
    let result = 0;

    while (true) {
        let value = prompt("Enter a valid number", "");

        if (value === "" || value === null || !isFinite(value)) break;

        enteredVals.push(+value);
    }

    for (let i of enteredVals) {
        result += i;
    }

    return result;
}

//! A maximal subarray -- will return later, challenging problem

