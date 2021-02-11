// spread syntax позволяет переводить массив в раздельные единицы, и наоборот

const arr = [1, 2, 3, 4];
alert([...arr]);

// or merge arrays
const arr2 = [0, 0, 0];

const newArr = [...arr2, ...arr];
alert(newArr);


// spread syntax also works in Python :)
// * for arguements and ** for key arguements

/*
* arr = [1, 2, 3, 4]
* print(*arr)
*
* arr2 = [0,0,0]
*
* newArr = [*arr, *arr2]
*
* print(newArr)
*
* for key value pairs
*
* dict1 = { "a" : 1}
* dict2 = { "b" : 2}
*
* dict3 = {**dict1, **dict2}
*
* print(dict3)
*/