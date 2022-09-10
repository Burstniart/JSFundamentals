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

function foo() {
    let barr = [];
    for (let i = 0; i < game.suspects.length; i++) {
        // console.log('outer loop');
        let susp = game.suspects[i];
        for (attributes in susp) {
            // console.log('inner loop');
            console.log(susp[attributes]);
            if (attributes === 'color') {
                barr.push(susp[attributes])
            }
        }
    }
    console.log(barr);
    return barr;
}
let [a,b] = foo();
// foo(barr);
// console.log(barr);
console.log(`\n`)

console.log(a);
console.log(b);

// one way of deconstructing
var [color, color2] = [game.suspects[0].color, game.suspects[1].color];
console.log(`\ndeconstructing`);
console.log(color2);
console.log(color);

// another way of deconstructing
var [{color: firstColor}, {color: secondColor}] = game.suspects;
console.log(`\nNow the other way`);
console.log(firstColor);
console.log(secondColor);
console.log(`\n`);

console.log(`\nforEach() function`)

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak () {
            console.log('My name is', name)
        }
    }
}

var suspects = ['Miss Scarlet', ' Colonel Mustard', 'Mr. White'];


var suspectsList = [];
// classic way of doing it
// for (var i = 0; i < suspects.length; i++) {
//     suspectsList.push(CreateSuspectObjects(suspects[i]))
// }
// suspectsList[1].speak();

// suspects.forEach( function(name) {
//     suspectsList.push(CreateSuspectObjects(name))
// });
// console.log(suspectsList);

// _.each way of doing it
// resume here

// each doesn't return anything
var _ = {};
_.each = function (list, callback) {
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i, list)
        }
    } else {
        for (key in list) {
            callback(list[i], key, list);
        }

    }
}
_.each(['moni', 'samy', 'lex'], function(name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1],);
    } else {
        console.log(name, 'is the oldest');
    }
})
