const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
function promptUser() {
    return inquirer.prompt([

    {
        type: 'input',
        name: 'title',
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
        name: 'contributors',
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
        name: 'credit',
        message: 'Who deserves the credit on this project?'
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
    },
]);

}

// function to write README file
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}



// function call to initialize program
init();
