function* integers() {
    let index = 0;
    while (true)
        yield index++;
}

function* take(max, iterator) {
    let i = 0;
    for (let x of iterator) {
        if (i >= max) break;
        else {
            yield x;
            i++;
        }
    }
}

const iter = integers();

for (let i of take(7, iter)) {
    console.log(i)
}
//0
//1
//2
//3
//4
//5
//6

