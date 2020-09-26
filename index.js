const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
const promptUser = () =>{
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation files of your project?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How would you like this application to be used?'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed on this project?'
    },

    {
        type: 'checkbox',
        message: 'Please enter a license',
        choices: [
            'Apache',
            'MIT',
            'ISC',
            'GNU GP:Lv3'
        ],
        name: 'license'
    },

    {
        type: 'input',
        name: 'credite',
        message: 'Who deserve the credit on this project?'
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }

    ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
