// var increment = function(n){ return n + 1; };
var increment = n => n + 1;
// var square = function(n){ return n*n; };
var square = n => n * n;
// var doMathSoIDontHaveTo = function(n, func){ return func(n); };
var doMathSoIDontHaveTo = (n, func) => func(n);
let xx= doMathSoIDontHaveTo(5, square);
console.log(xx);
let yy =doMathSoIDontHaveTo(4, increment);
console.log(yy);


var reduce = function(list, cb, initial) {
    let memo = initial;
    for (var i = 0; i < list.length; i++) {
        if (i === 0 & !!memo == undefined) {
            memo = list[0]
        } else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
}

console.log(reduce([1,2,3], (v, sum) => v + sum, 0));

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];



// for each array object
// check rooms array
// to find the room no one claims to have been save room if value pair is false
// next suspect check, if finds room true the in pops it out of the array
// repeat until done

var notInRoom = (suspect, memo) => {
    const emptyRooms = reduce(suspect.rooms, (room, memo) => {
        if (room === false) memo.push(room)
        return memo
    }, [])
    return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom);
_.intersection(...notInRoom)

