/* // CommonJS
// relative path to bring from
const action = require ('./index');
// executes the entire script
action.action()
//if module.exports gives an object then must call objecto.function() the desired function
*/

//ES6

import { action } from "./index.js";

action();
