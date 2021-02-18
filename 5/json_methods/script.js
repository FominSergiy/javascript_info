//TODO Turn the object into JSON and back

let user = {
    name: "John Smith",
    age: 35
};

const userJSON = JSON.stringify(user);
const userObj = JSON.parse(userJSON);

// alert(userJSON);
// alert(userObj.name);

//TODO Exclude backreferences
//! ??

let room = {
    number: 23
    // occupiBy : meetup
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
    // self : meetup
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
