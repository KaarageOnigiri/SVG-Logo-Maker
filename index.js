const inquirer = require('inquirer');
const { readFile, writeFile } = require('fs/promises');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes.js');

// const shape = Shape();
// const triangle = Triangle();
// const circle = Circle();
// const square = Square();

console.log(new Triangle('something', 'blue', 'square', 'something').setTextColor());
console.log(new Square('AAA', 'white', 'triangle', 'pink').render())

inquirer.prompt([
    {
        type: 'input',
        message: 'Logo Text (Maximum three characters): ',
        name: 'textAnswer'
    },
    {
        type: 'input',
        message: "Text Color: ",
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Shape: ',
        name: 'shapeAnswer',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: "Shape's Color: ",
        name: 'shapeColor'
    }
])
.then((res) => writeSVG(res))

function writeSVG(res) {
    // make another function here to determine which Shape Class to run, then return the value
    
    // use the value from previous function for the following 'if' statement

    // then put it into the render function through fs.writeFile
    
    // (optional) search for the module exercises with the throw Error, then implement
    // it into the Shape Class (more than 3 characters, invalid color, etc)
}

// switch(res.shapeAnswer) {
//     case 'circle':
//         sadas
// }