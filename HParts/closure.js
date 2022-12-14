// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
function createFunction() {
        function greet() {
                    console.log("Hi~")
                }
        return greet;
}
// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

function createFunctionPrinter (input) {
        function myPrinter(myInput) {
                    console.log(input);
                }
        return myPrinter;
}
// Challenge 3
// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
// Now we are going to create a function addByX that returns a function that will add an input by x.

function outer() {
    let counter = 0;
    function incrementCounter () {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

function addByX(x) {
    function addedByX (res) {
        return res + x;
    }
    return addedByX;
}

// Challenge 4
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

function once(callback) {
    let counter = 0;
    let onceVal;
    const innerFunc = val => {
        if (counter === 0) onceVal = callback(val);
        counter++;
        return onceVal;
    }
    return innerFunc;
}

// Challenge 5
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.


function after(times, callback) {
    let counter = 0;
    function nowExecute(val) {
        if (++counter >= times) {
            callback(val);
        }
    }
    return nowExecute;
}
// Challenge 6
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

function delay(callback, waitFor) {
    function timesUp(params) {
        setTimeout((params) => {
            callback(params);
        }, waitFor);
    }
    return timesUp;
}
// Challenge 7
// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

function rollCall(names) {
    let counter = 0;
    return () => {
        counter < names.length ? console.log(names[counter]) : console.log('Everyone accounted for');
        counter++;
    }
}
//
import { createInterface } from 'readline';
const rl = createInterface ({
    input: process.stdin,
    output: process.stdout
});
const namus = ['Moni','Lex','Sam'];
const callAName = rollCall(namus);
callAName();
callAName();
callAName();
callAName();
rl.close();
/*C6
const greet = () => {console.log("Heyeyeyeyeeeyeye")};
const waitFive = delay(greet, 5000);
waitFive();
rl.close();
*/
/*C5
const greet= () => {console.log("Heyeyeyeyeeeyeye")};
const afterCalled = after(2, greet);
console.log("Called once")
afterCalled();
console.log("Called twice")
afterCalled();
console.log("Called thrice")
afterCalled();
rl.close();
*/
/*C4
const addByTwo = addByX(2);
const onceFunc = once(addByTwo);
console.log(onceFunc(4));
console.log(onceFunc(6));
rl.close();
*/
/*C3
// return addedByx function, remember that
const addByTwo = addByX(2);
const atOne = addByTwo(1);
const atTwo = addByTwo(2);
console.log(atOne);
console.log(atTwo);
rl.close();
*/
/*c3
const moniCounter = outer();
const lexCounter = outer();

moniCounter();
moniCounter();
moniCounter();
lexCounter();
moniCounter();
rl.close();
*/
/*C2
const printTest = createFunctionPrinter('test');
printTest();
rl.close();
*/
/*C1
const func1 = createFunction();
func1();
rl.close();
*/
