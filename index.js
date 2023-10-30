const inquirer = require('inquirer');
const { readFile, writeFile } = require('fs/promises');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

inquirer.prompt([
    {
        type: 'input',
        message: 'Logo Text (Maximum three characters): ',
        name: 'textAnswer',
        validate: function (input) {
            // Declare function as asynchronous, and save the done callback
            const done = this.async();
        
            if (input.length > 3) {
            // Pass the return value in the done callback
            done('Error: Cannot have more than 3 characters.');
            return;
            }
            // Pass the return value in the done callback
            done(null, true);
          }
    },
    // validate
    {
        type: 'input',
        message: "Text Color (OR a hexadecimal number): ",
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
        message: "Shape's Color (OR a hexadecimal number): ",
        name: 'shapeColor'
    }
])
.then((res) => writeSVG(res));
// .catch(err) => console.log('Error: ' + err)

function writeSVG(res) {
    // make an if statement here to determine which Shape Class to run, then return the value
    if (res.shapeAnswer === 'circle') {
        writeFile(`./Output/logo.svg`, new Circle(res.textAnswer, res.textColor, res.shapeAnswer, res.shapeColor).render());
        console.log(`Generated logo.svg in the Output folder.`);
    }
    if (res.shapeAnswer === 'triangle') {
        writeFile(`./Output/logo.svg`, new Triangle(res.textAnswer, res.textColor, res.shapeAnswer, res.shapeColor).render());
        console.log(`Generated logo.svg in the Output folder.`);
    }
    if (res.shapeAnswer === 'square') {
        writeFile(`./Output/logo.svg`, new Square(res.textAnswer, res.textColor, res.shapeAnswer, res.shapeColor).render());
        console.log(`Generated logo.svg in the Output folder.`);
    }
    
    // (optional) search for the module exercises with the throw Error, then implement
    // it into the Shape Class (more than 3 characters, invalid color, etc)
}
