function memoization(f) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        f.memo = f.memo || {};
        return (args in f.memo)? f.memo[args] :
            f.memo[args] = f.apply(this, args);
    };
}

function multiply(x, y){
    return x * y;
}

function difference(x, y) {
    return x - y;
}

let memo = memoization(multiply);

console.time("first call");
console.log(memo(20, 30));
console.timeEnd("first call");
// 600
// first call: 3.880126953125ms

console.time("second call");
console.log(memo(20, 30));
console.timeEnd("second call");
// 600
// second call: 0.290283203125ms

console.time("first call");
console.log(memo(20, 31));
console.timeEnd("first call");
// 620
// first call: 0.2529296875ms

console.time("second call");
console.log(memo(20, 31));
console.timeEnd("second call");
// 620
// second call: 0.219970703125ms

let memo1 = memoization(difference);

console.time("first call");
console.log(memo1(20, 30));
console.timeEnd("first call");
// -10
// first call: 0.2919921875ms

console.time("second call");
console.log(memo1(20, 30));
console.timeEnd("second call");
// -10
// second call: 0.177001953125ms
