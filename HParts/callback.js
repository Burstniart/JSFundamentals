// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addTwo(num) {
    return parseInt(num) + 2;
}
// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.

function addS(inpu) {
    return inpu + 's';
}
// Challenge 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers) & a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

function mapu(array, func) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        arr.push(func(array[i]));
    }
    return arr;
}
// Challenge 4
// Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

function forEachu(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}
// added package.json "{"type" : "module"}" to use cli pritning in node
// this is modules, not comminjs
import { createInterface } from 'readline';
// create readline instance and attach the app input and output
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
const myArr = ['a','b','c'];
console.log(forEachu(myArr, addS));
rl.close();
/*C3
const myArr = [1,2,3];
const newArray = mapu(myArr,addTwo);
console.log(newArray);
rl.close();
*/
/*C2
rl.question('Add s at the end:\n', function (inp){
    inp = addS(inp);
    console.log(`${ inp  }`);
    rl.close();
})
*/
/*C1
rl.question('Add 2 plus : ', function (num){
    num = addTwo(num);
    console.log(`The result is: ${num}`);
    rl.close();
});
*/

