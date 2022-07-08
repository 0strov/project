'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log('Test');
//     },
// };
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);
// console.log(Object.keys(options).length);
// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;
// for(let key in options) {
//     if (typeof options[key] === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);        
//         }
//     } else { 
//         console.log(`Свойство ${key} имеет значение ${options[key]}`); 
//         counter++;
//     }
// }
// console.log(counter);


const arr = [2, 13, 6, 1, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }
// );

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// arr[99] = 0;
// console.log(arr.length);
// // arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }