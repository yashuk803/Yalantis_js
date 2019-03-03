function sum(){
    let totalSum =  Array.prototype.slice.call(arguments).reduce(function(a, b) {
        return a + b;
    }, 0);
    return totalSum;
}

console.log(sum(1,2)); // returns 3
console.log(sum(1,2,3)); // returns 6
console.log(sum(1,8,18,-4,3)); // returns 26