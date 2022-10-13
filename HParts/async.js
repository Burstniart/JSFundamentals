// Challenge 1
// Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?

function sayHowdy() {
    console.log('Howdy');
}
function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}
// Challenge 2
// Create a function delayedGreet that console logs welcome after 3 seconds.

function delayedGreet() {
    setTimeout(() => console.log('welcome'),3000)
}
// Challenge 3
// Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.

function helloGoodbye() {
    setTimeout(() => console.log('goodbye'), 2000);
    console.log('hello');
}
// Challenge 4
// Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.

function brokenRecord() {
    setInterval(() => console.log('hi'),1000)
}
//Challenge 5
//Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

function limitedRepeat() {
    setTimeout(clearInterval(greet, 5000));
    setInterval(function greet(){  console.log('hi')}, 1000);

}
//
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

limitedRepeat();
/*C4
brokenRecord();
*/
/*C3
helloGoodbye();
rl.close();
*/
/*C2
delayedGreet();
rl.close();
*/
/*C1
testMe();
rl.close();
*/
