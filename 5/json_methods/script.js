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
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

JSON.stringify(meetup, function replacer(key, value) {
    console.log(`key ${key} and value ${value}`);
});

// alert(JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`key ${key} and value ${value}`);
// }));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
