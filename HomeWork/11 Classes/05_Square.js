// Create a class called Square that extends the Rectangle class and has a sideLength property. Override the getArea method in the Square class to return the area of the square. Create an instance of the Square class and call the getArea method.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
    }

    getArea() {
        return this.sideLength * this.sideLength; 
    }
}

const mySquare = new Square(5);

const area = mySquare.getArea();
console.log('Area of the square:', area);
