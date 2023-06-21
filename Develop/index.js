const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questionsArray = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log('Please enter the name of your project to proceed with your README.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: "Please write a brief description of your project here.",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please write a brief description of your project here to proceed with your README.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please provide installation instructions.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project.',
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please provide usage information.');
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Do you intend to use a license?',
    default: false,
  },
  {
    type: 'list',
    name: 'licensing',
    message: 'What license would you like to include?',
    choices: ['mpl', 'mit', 'wtfpl'],
    when: ({ confirmLicense }) => confirmLicense,
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide links to any contributing repos, websites or tutorials that you used when creating this project.',
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log('Please provide links to any materials used that helped you create your project.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test packages for your application, and explain how they run.',
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please provide tests for your application, and explain how they run.');
        return false;
      }
    },
  },
 
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your Github username',
    validate: (questionsInput) => {
      if (questionsInput) {
        return true;
      } else {
        console.log('Please provide your Github username.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address',
    validate: (questionsInput) => {
      if (questionsInput) {
        return true;
      } else {
        console.log('Please provide your email address');
        return false;
      }
    },
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}.md`, data, (err) => {
    if (err) {
      throw err;
    }
    console.log('Your README has been successfully generated.');
  });
}

function init() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(questionsArray)
      .then((userInput) => {
        resolve(userInput);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((readmeInfo) => {
    return writeToFile('README', readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
