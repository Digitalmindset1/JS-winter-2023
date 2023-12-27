// Create a class called Rectangle that has width and height properties, and a getArea method that returns the area of the rectangle. Create an instance of the Rectangle class and call the getArea method

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const myRectangle = new Rectangle(13, 31);

const area = myRectangle.getArea();
console.log('Area of the rectangle:', area);
