//TODO Rewrite the "switch" into an "if"
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

let browser = prompt("Which browser do you use?", "");
let browserList = ["Chrome", "Firefox", "Safari", "Opera"];
let alertMsg;

if (browser == "Edge") {
    alertMsg = "You've got the Edge";
} else if (browserList.includes(browser)) {
    alertMsg = "Okay we support these browsers too";
} else {
    alertMsg = "We hope this page looks ok!";
}
alert(alertMsg);

//TODO Rewrite "if" into "switch"
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

alertMsg = +prompt("a?", "");
let alertNum;

switch (alertMsg) {
    case 0:
        alertNum = alertMsg;
        break;
    case 1:
        alertNum = alertMsg;
        break;
    case 2:
    case 3:
        alertMsg = "2,3";
        break;
}
alert(` ${alertMsg} `);

