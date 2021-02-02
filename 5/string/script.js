//TODO Uppercase the first character

const upperCaseStr = ucFirst('sergey');
alert(upperCaseStr);

function ucFirst(str) {
    const firstChar = str[0].toUpperCase();
    const ucStr = firstChar + str.slice(1);
    return ucStr;
}

//TODO Check for spam
alert(checkSpam('buy ViaGra for free!'));
alert(checkSpam('XxX rated movie!'));
alert(checkSpam('free for all!'));

function checkSpam(str) {
    str = str.toLowerCase();

    if (~str.indexOf('xxx') || ~str.indexOf('viagra')) {
        return true;
    }

    return false;
}


//TODO Truncate the text
alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20));

function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;

    const charsToKeep = str.slice(0, maxLength - 1); // need to add three ...
    const result = charsToKeep + '...';

    return result;
}

//TODO Extract the money
const moneyFromStr = extractCurrencyValue('$120');
alert(`value of ${moneyFromStr}. Var type is: ${typeof moneyFromStr}`);

function extractCurrencyValue(str) {
    return +str.slice(1);
}