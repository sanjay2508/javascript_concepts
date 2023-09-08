// // Global Context
console.log(this); // In a browser, this refers to the window object
// "use strict";

// // Function Context
function sayHello() {
    console.log(this);
}
// sayHello(); // In non-strict mode, this refers to the window object; in strict mode, this is undefined

const person = {
    uname: "John",
    greet: function () {
        console.log(this.uname);
    }
};
// person.greet(); // "John"

// Method Context
const calculator = {
    value: 42,
    add: function (num) {
        this.value += num;
    }
};
calculator.add(8);
// console.log(calculator.value); // 50

// Arrow Function Context
const arrowFunc = () => {
    console.log(typeof(this));
};

arrowFunc(); // The value of this is based on the surrounding context; it depends on where arrowFunc is defined
