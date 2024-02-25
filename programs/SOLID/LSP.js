class Shape {
    area() {
        throw new Error("Subclasses must implement the 'area' method.");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Function that calculates the area of a shape without knowing its type
function calculateArea(shape) {
    return shape.area();
}

// Usage of the classes and function
const rectangle = new Rectangle(5, 4);
const circle = new Circle(3);

console.log("Area of Rectangle:", calculateArea(rectangle)); // Output: 20
console.log("Area of Circle:", calculateArea(circle)); // Output: 28.274333882308138
