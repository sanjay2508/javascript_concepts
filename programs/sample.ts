(function () {
    var a = b = 5;
})();

// console.log(b);


function multiply(x) {
    return function b(y) {
        return x * y;
    }
}
// console.log(multiply(5)(6));

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}


console.log(sum(12, 45, 32));
console.log(sum(4, 3));
console.log(sum(567, 453, 43, 56, 76));
console.log(sum(5, 4));
console.log(sum(10, 30, 40, 50, 34));
