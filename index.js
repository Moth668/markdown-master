// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter your test instructions',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        // Convert answers to a string format suitable for README
        const readmeContent = `
                # ${answers.projectName}
                
                ## Description
                ${answers.description}

                # Table of Contents
                ${answers.toc}
                
                ## Installation
                ${answers.installation}
                
                ## Usage
                ${answers.usage}

                ## License
                ${answers.license}
                
                ## Contributing
                ${answers.contribution}
                
                ## Tests
                ${answers.test}

                ## Questions
                ${answers.username}
                ${answers.email}
                ### use this contact information to reach me with additional questions. 
                        `;
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init(); 