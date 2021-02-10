//TODO Create a date

let date1 = new Date('Feb 20, 2012, 3:12am');  // won't work
date = new Date('Feb 20, 2012, 03:12:00'); // works\

// alert(date);

//TODO Show a weekday

let date2 = new Date(2012, 0, 3); // 3 Jan 2012
let date3 = new Date(2021, 1, 5); // 5 Feb 2021

function getWeekDay(date) {
    const intToLetter = {
        0: 'SU',
        1: 'MO',
        2: 'TU',
        3: 'WE',
        4: 'TU',
        5: 'FR',
        6: 'SA'
    };

    return intToLetter[date.getDay()];
}

// alert(getWeekDay(date2));
// alert(getWeekDay(date3));


//TODO European weekday

function getLocalDay(date) {
    const intToLetter = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7
    };

    return intToLetter[date.getDay()];
}

// alert(getLocalDay(date3)); // 6

//TODO Which day of month was many days ago?

let date4 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    // since we work with miliseconds
    // create a new date which will have only days
    // subtract from original date and convert to date
    const dateFromDays = new Date(1970, 0, days);

    const dateAgoinMiliSeconds = new Date().setTime(date - dateFromDays); //  miliseconds
    const dateAgo = new Date(dateAgoinMiliSeconds);
    return dateAgo;
}

// alert(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date4, 365)); // 2, (2 Jan 2014)

//TODO Last day of month?
//? not the same a the solution, but still works hah

function getLastDayOfMonth(year, month) {
    // should return last day of month
    // possible last days are = [28,29,30,31];
    // relying on date auto-correction
    const monthEndDays = [28, 29, 30, 31];

    let date = new Date(year, month, 0);

    for (let day of monthEndDays) {
        const checkMonthEnd = new Date(year, month, day);

        if (checkMonthEnd.getMonth() == month) {
            date = checkMonthEnd;
        } else {
            break;
        }
    }

    return date.getDate();
}

alert(getLastDayOfMonth(2012, 1)); //29
alert(getLastDayOfMonth(2021, 1)); //28 
alert(getLastDayOfMonth(2021, 0)); //31