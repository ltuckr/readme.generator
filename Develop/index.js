// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questionsArray = [

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: title=> {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter the name of your project to proceed with your README.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Please write a brief description of your project here.",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please write a brief description of your project here to proceed with your README.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'table',
            message: 'Please provide your table of contents.',
            validate: installationTable => {
                if (installationTable) {
                    return true;
                } else {
                    console.log('Please provide your table of contents.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage information.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Do you intend to use a license?',
            default: false
        },
       {
            type: 'list',
            name: 'licensing',
            message: 'What license would you like to include?',
            selections: ['mpl','mit','wtfpl'],
            when: ({ licensingInput }) => {
                if (licensingInput) {
                    return true;
                } else {
                    console.log('Please select a license for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide links to any contributing repos, websites or tutorials that you used when creating this project.',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please provide links to any materials used that helped you create your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test packages for your application, and explain how they run.',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please provide tests for your application, and explain how they run.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please provide your Github username and your email address.',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please provide your Github username and your email address.');
                    return false;
                }
            }
        },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('Your README has been successfully generated.')
    });
};
// function to initialize app
function init() {
    return inquirer.prompt(questionsArray);
};


// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})
