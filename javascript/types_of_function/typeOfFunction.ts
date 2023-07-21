// Named Functions
function add(a, b) {
    return a + b;
}

//Anonymous Functions
var greet = function (name) {
    console.log("Hello, " + name + "!");
};

// Arrow Functions
const multiply = (a, b) => a * b;


// Immediately Invoked Function Expressions (IIFE)
(function () {
    console.log("This is an IIFE.");
})();


// Higher-Order Functions
function performOperation(operation, a, b) {
    return operation(a, b);
}
