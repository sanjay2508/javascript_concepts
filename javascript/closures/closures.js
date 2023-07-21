function x() {
    var a = 10;
    var z = function y() {
        console.log(a);
    };
    a = 20;
    return z;
}
var res = x();
console.log(res());
res();
