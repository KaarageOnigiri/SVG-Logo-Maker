const inquirer = require('inquirer');
const { readFile, writeFile } = require('fs/promises');

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
// .then((res) => )
