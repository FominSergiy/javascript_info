//TODO create a map object

const someMap = new Map([
    ["1", ['serg', 'borg']], [2, ['borg', 'serg']]
]);

console.log(someMap);

//? super random
// for (let entry of someMap.entries()) {
//     alert(`key ${entry[0]} with value ${entry[1]}`);
// }

//? better than above
for (let key of someMap.keys()) {
    // alert(`key ${key} with value ${someMap.get(key)}`);
}


//TODO Filter unique array members

function unique(arr) {
    const set = new Set(arr);
    // console.log(set);
    return Array.from(set); //? need to convert Set to Array
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// alert(unique(values));

//TODO Filter anagrams



//TODO Iterable keys

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more
console.log(map); //? can we update our map with a new key?
map.set(keys[0], keys[1]); //? what's the point if it just clears previous value?
console.log(map);