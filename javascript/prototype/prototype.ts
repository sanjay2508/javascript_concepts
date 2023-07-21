function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.sayHello(); // Output: "Hello, my name is John"
person2.sayHello(); // Output: "Hello, my name is Jane"
