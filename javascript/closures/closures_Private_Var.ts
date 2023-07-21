function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let increment = counter();
increment(); // Output: 1
increment(); // Output: 2