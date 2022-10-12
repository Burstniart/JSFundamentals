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
// added package.json "{"type" : "module"}" to use cli pritning in node
// this is modules, not comminjs
import { createInterface } from 'readline';
// create readline instance and attach the app input and output
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Add s at the end:\n', function (inp){
    inp = addS(inp);
    console.log(`${ inp  }`);
    rl.close();
})

/*C1
rl.question('Add 2 plus : ', function (num){
    num = addTwo(num);
    console.log(`The result is: ${num}`);
    rl.close();
});
*/

