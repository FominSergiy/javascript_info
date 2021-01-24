'use strict';


let name = prompt('Input your name', '');
let confirmed = confirm(`Are you sure your name is ${name}?`);
alert(confirmed ? `good on you, you know your name, ${name}`
    : 'I guess you can\'t spell your name right');

