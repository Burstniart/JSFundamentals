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
    const greet = setInterval(() =>  console.log('hi'), 1000);
    setTimeout(() => clearInterval(greet), 5000);
}
// Challenge 6
// Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

function everyXsecsForYSecs(func, interval, duration) {
    const doThis = setInterval(func, interval);
    setTimeout(() => clearInterval(doThis), duration);
}
// Challenge 7
// Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.
//
// When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

function delayCounter(target, wait) {
    let interval;
    let counter = 0;
    return function inner() {
        if (counter === 0) {
        counter++;
        interval = setInterval(() => console.log(inner()), wait);
        } else if (counter === target) {
            clearInterval(interval);
        } else {
            return counter++;
        }
    }
}
//
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
/*C7
const doFive = delayCounter(6, 1000);
doFive();
rl.close();
*/
/*C6
const greet = () => console.log('hi pal');
const in2For6= () => everyXsecsForYSecs(greet, 3000, 7000);
in2For6();
rl.close();
*/
/*C5
limitedRepeat();
rl.close();
*/
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
