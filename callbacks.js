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