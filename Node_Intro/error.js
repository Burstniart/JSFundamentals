/*
import {readFile} from 'fs'

// Async errors that use callbacks
readFile(new URL('app.j', import.meta.url), 'utf-8', (err, data) => {
    if (err) {
        throw err;
    } else {
        // 
    }
})
*/
/*
// for promises
import {readFile} from 'fs/promises'
// to actualy catch the error
try {
    const result = await readFile(new URL('app.j', import.meta.url), 'utf-8')
} cathc (e) {
    throw e
    // console.log(e)
}
*/
