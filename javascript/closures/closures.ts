function x() {
    let a = 10;
    let z = function y() {
        console.log(a);
    }
    a = 20;
    return z;
}
let res = x();
console.log(res);   //prints the function
res();  //prints 20
console.log(res()); //prints undefined