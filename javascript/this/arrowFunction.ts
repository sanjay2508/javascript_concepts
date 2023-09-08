const person = {
    name: "John",
    sayHello: function () {
        console.log("Hello, " + this.name);
        const sayHelloArrowFromNormal = () => {
            console.log("Hello, " + this.name);
        }
        sayHelloArrowFromNormal();
    },
    sayHelloArrow: () => {
        console.log("Hello, " + this.name); // The arrow function retains the lexical scope of this
    }
};

person.sayHello(); // Outputs: "Hello, John"

const greetArrow = person.sayHelloArrow;
greetArrow(); // Outputs: "Hello, undefined" - The arrow function does not have its own this value and uses the surrounding context, which is the global object (window in a browser).
