// Module 7 Challenge - Due Monday 9/30/2024


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { makeBadge } = require('badge-maker');

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
        name: 'installation',
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

    // Inquirer List of license choices
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application from the list of options.',
        choices: ['AFL-3.0', 'Apache-2.0', 'Artistic-2.0', 'BSL-1.0', 'BSD-2-Clause', 'BSD-3-Clause-Clear', 'BSD-4-Clause', '0BSD', 'CC', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'WTFPL', 'ECL-2.0',
            'EPL-2.0', 'EUPL-1.1', 'AGPL-3.0', 'GPL', 'GPL-2.0', 'GPL-3.0', 'LGPL', 'LGPL-2.1', 'LGPL-3.0', 'ISC', 'LPPL-1.3c', 'MS-PL', 'MIT', 'MPL-2.0', 'OSL-3.0', 'PostgreSQL', 'OFL-1.1', 'NCSA',
            'Unlicense', 'Zlib'],
    },
    {
        type: 'input',
        name: 'video',
        message: 'Paste the link to your presentation video here',
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

// create license badge to display in README.md
function generateLicenseBadge(license) {
    const format = {
        label: 'license',
        message: license,
        color: 'blue',
    };
    return makeBadge(format);
}

// TODO: Create a function to initialize app 
function init() {
    inquirer.prompt(questions).then((answers) => {
        const licenseBadge = generateLicenseBadge(answers.license);
        const readmeContent = `

${licenseBadge}

# ${answers.projectName}
                
## Description
${answers.description}

# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Video](#video)

                
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
### Use this contact information to reach me with additional questions.
 * GitHub Username: ${answers.username}
 * GitHub Link: ${answers.link}
 * Email Address: ${answers.email}

## Video
### Link to walkthrough video that demonstrates functionality: ${answers.video}
                        `;
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init(); 