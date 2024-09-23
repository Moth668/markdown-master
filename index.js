// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'link',
        message: 'Paste the link to your GitHub profile.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application from the list of options.',
        choices: ['AFL-3.0', 'Apache-2.0', 'Artistic-2.0', 'BSL-1.0', 'BSD-2-Clause', 'BSD-3-Clause-Clear', 'BSD-4-Clause', '0BSD', 'CC', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'WTFPL', 'ECL-2.0', 
            'EPL-2.0', 'EUPL-1.1', 'AGPL-3.0', 'GPL', 'GPL-2.0', 'GPL-3.0', 'LGPL', 'LGPL-2.1', 'LGPL-3.0', 'ISC', 'LPPL-1.3c', 'MS-PL', 'MIT', 'MPL-2.0', 'OSL-3.0', 'PostgreSQL', 'OFL-1.1', 'NCSA',
            'Unlicense', 'Zlib'],
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
        // console.log(answers);
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