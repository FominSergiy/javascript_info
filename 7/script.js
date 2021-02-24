// work with getters and setters

const user = {
    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    },

    surname: "Fomin",

    get fullName() {
        return (`${this.name} ${this.surname}`);
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }

}
user.name = "Sergiy";
alert(user.fullName);
user.fullName = 'Antonio Benderas';
alert(user.fullName);


// we can define properties if we wrap Object creation in a function

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday); // birthday is available
alert(john.age);      // ...as well as the age