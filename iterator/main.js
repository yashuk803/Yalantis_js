function* integersGenerator() {
    let index = 0;
    while (true)
        yield index++;
}

function* takeGenerator(max, iterator) {
    let i = 0;
    for (let x of iterator) {
        if (i >= max) break;
        else {
            yield x;
            i++;
        }
    }
}

const iterGenerator = integersGenerator();

for (let i of takeGenerator(7, iterGenerator)) console.log(i);

//0
//1
//2
//3
//4
//5
//6

function integersIterator() {
    let i = 0;
    return {
        next() { return {value: i++} },
        [Symbol.iterator]() { return this }
    }
}

function takeIterator(max, iterator) {
    let index = 0;
    return {
        next: function(){
            return iterator.next().value < max ?

                { value: index++, done: false } : { done: true };
        },
        [Symbol.iterator]() { return this }
    }
}

let iterIterator = integersIterator();

for (let elt of takeIterator(3, iterIterator))  console.log(elt);
// 0
// 1
// 2

