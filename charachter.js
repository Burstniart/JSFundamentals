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