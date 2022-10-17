/*
console.log('Hello');
// this syntax runs the function, cool
const modul = (function() {console.log("Inside")}());
//what modules are
const moduleTest = (function(){
    var me = 'hello'
    return {}
})
*/
/*
const action = () => {
    console.log("Hello~");
}

// commonJS
module.exports = { action }
*/
/*
// ES6
export const action = () => {
    console.log("Freedom~");
}
//creates a named export
*/

//file system
import { readFile,writeFile } from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')
// import.meta.url is the absolute path to our file
// console.log(template);
// template is now a buffer
// you can either call a .toString() on the buffer ors pass the encoding as a second paramether

const data = {
    title: "Get me cake",
    body: "It's not that simple..."
}

for (const [k,v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
}
await writeFile(new URL('./index.html', import.meta.url), template)
// we're still getting around __dirname from common
