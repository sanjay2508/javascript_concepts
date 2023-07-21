function add(a) {
    return function add(b) {
        return function add(c) {
            return a + b + c;
        };
    };
}
var t = add(2)(3);
console.log(t(4));
