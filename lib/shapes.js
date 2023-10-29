class Shape {
    constructor(textAnswer, textColor, shapeColor) {
        if (textAnswer.length > 3) {
            throw Error('Please enter only a maximum of 3 characters');
        }

        this.textAnswer = textAnswer;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setTextColor() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`
    }
}

class Triangle extends Shape {
    constructor(textAnswer, textColor, shapeAnswer, shapeColor) {
        super(textAnswer, textColor, shapeColor);
        // make an if statement here to check if the shapeAnswer is correct, or 
        // same as it's corresponding class
        this.shapeAnswer = shapeAnswer;
    }

    // the setTextColor() came up as undefined
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}" />
    ${this.setTextColor()}${this.textAnswer}</text>
</svg>`
    }
}

class Circle extends Shape {
    constructor(textAnswer, textColor, shapeAnswer, shapeColor) {
        super(textAnswer, textColor, shapeColor);
        this.shapeAnswer = shapeAnswer;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    ${this.setTextColor()}${this.textAnswer}</text>
</svg>`
    }
}

class Square extends Shape {
    constructor(textAnswer, textColor, shapeAnswer, shapeColor) {
        super(textAnswer, textColor, shapeColor);
        this.shapeAnswer = shapeAnswer;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" height="200" width="200" fill="${this.shapeColor}" />
    ${this.setTextColor()}${this.textAnswer}</text>
</svg>`
    }
}

module.exports = { Shape, Triangle, Circle, Square };