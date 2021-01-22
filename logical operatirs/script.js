//? from now on will be only working with big pieces, omitting small tasks

//TODO Check the login
let user = prompt("Enter user name", "");
let password;

if (user.toLowerCase() === "admin") {
    password = prompt("Enter your password", "");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === "" || password === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (user === "" || user === null) {
    alert("Canceled");
} else {
    alert("I don\'t know you");
}
