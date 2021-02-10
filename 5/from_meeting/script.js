// methods to remember

// Array.map() 
//?     -- pass function that will be run inside this array context

// Array.filter() 
//?     -- if true for an elem return the elem, if not, skip it
//?     -- we pass a function that returns Boolean value - filter() works on true false
// Array.reduce() 
//?     -- returns a single value only
//?     -- based on accumulator arguement - the one that is used to add up everything


const aclean = (arr) => {
    const collection = new Map();
    const sortedItems = arr.map(item => {
        const sortedItem = item
            .toLowerCase()
            .split('')
            .sort((a, b) => {
                if (a > b) return 1;
                if (a < b) return -1;
                if (a === b) return 0;
            })
            .join('');
        collection.set(sortedItem, item);
        return sortedItem;

    });


    return Array.from(collection.values());
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))