const { readFile, writeFile } = require('fs/promise');

class Shape {
    constructor(textAnswer, textColor, shapeColor) {
        this.textAnswer = textAnswer;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setColor() {
        
    }

    render() {

    }
}

class Triangle extends Shape {
    constructor(textAnswer, textColor, shapeAnswer, shapeColor) {
        super(textAnswer, textColor, shapeColor);
        // make an if statement here to check if the shapeAnswer is correct, or 
        // same as it's corresponding class
        this.shapeAnswer = shapeAnswer;
    }

    something() {

    }
}

class Circle extends Shape {
    constructor(textAnswer, textColor, shapeAnswer, shapeColor) {
        super(textAnswer, textColor, shapeColor);
        this.shapeAnswer = shapeAnswer;
    }

    somethingElse() {

    }
}

class Square extends Shape {
    constructor(textAnswer, textColor, shapeAnswer, shapeColor) {
        super(textAnswer, textColor, shapeColor);
        this.shapeAnswer = shapeAnswer;
    }

    somethingElseAgain() {
        
    }
}

module.exports = Shape, Triangle, Circle, Square;

// {
//     type: 'input',
//     message: 'Logo Text (Maximum three characters): ',
//     name: 'textAnswer'
// },
// {
//     type: 'input',
//     message: "Text Color: ",
//     name: 'textColor'
// },
// {
//     type: 'list',
//     message: 'Shape: ',
//     name: 'shapeAnswer',
//     choices: ['circle', 'triangle', 'square']
// },
// {
//     type: 'input',
//     message: "Shape's Color: ",
//     name: 'shapeColor'
// }

