console.log("Create character objectse")

var game = {};

game.murder = "???";

game['weapons'] = [
    'lasers',
    'angry cats',
    'oblivious stare'
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');

console.log(game.name);

const {name, weapon, room} = {
    name: 'Rusty',
    room: 'kitchen',
    weapon: 'candlestick'
}

console.log(room, weapon)
var {user: x} = {user: 5};
console.log(x);
console.log(`\n`)

game = {
    'suspects': [
        {
            name: 'Rusty',
            color: 'Orange'
        }, {
            name: 'Miss Scarlet',
            color: 'Red'
        }
    ]
}

function foo(barr) {
    for (let i = 0; i < game.suspects.length; i++) {
        // console.log('outer loop');
        let chars = game.suspects[i];
        for (attributes in chars) {
            // console.log('inner loop');
            console.log(chars[attributes]);
            if (attributes === 'color') {
                barr.push(chars[attributes])
            }
        }
    }
    return barr;
}
let barr = [];
let [a,b] = foo(barr);
// foo(barr);
// console.log(barr);
console.log(`\n`)

console.log(a);
console.log(b);



