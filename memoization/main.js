function memoization(f) {
    if (f instanceof Function) {

        if (f.length === 0 || f.length > 1) return f;

        let fn = (x) => {
            if (fn.memoization.values[x] === null) {
                fn.memoization.values[x] = f.call(f,x);
            }
            return fn.memoization.values[x];
        };
        fn.memoization = { values : [] };
        return fn;
    } else {
        return f;
    }
}

let sum = (...args) => args.reduce((s, num) => s + num, 0);

console.time("first call");
console.log(memoization(sum)(20,30));
console.timeEnd("first call");
//50
//first call: 0.096923828125ms


console.time("second call");
console.log(memoization(sum)(20,30));
console.timeEnd("second call");
//50
//second call: 0.02099609375ms

console.time("first call");
console.log(memoization(sum)(20,60));
console.timeEnd("first call");
//80
//first call: 0.113037109375ms

console.time("second call");
console.log(memoization(sum)(20,60));
console.timeEnd("second call");
//80
//second call: 0.121826171875ms