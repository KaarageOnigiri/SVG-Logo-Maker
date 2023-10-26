const inquirer = require('inquirer');
const { readFile, writeFile } = require('fs/promises');

inquirer.prompt([
    {
        type: 'input',
        message: 'Logo Text (Maximum three characters): ',
        name: ''
    },
    {
        type: 'input',
        message: "Text Color: ",
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Shape: ',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: "Shape's Color: ",
        name: 'shapeColor'
    }
])


// console.log(`\nPlease type in your answers\n`);
// inquirer.prompt([
//     {
//         type: 'input',
//         message: title,
//         name: 'title',
//     },