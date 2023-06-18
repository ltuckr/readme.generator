// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
const questions = [

        {
            type: 'input',
            name: 'name',
            message: 'Welcome to your professional README generator! Please, provide your preferred legal name as you would like for it to appear on your README:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your first and last name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'portfolio',
            message: 'Please enter your portfolio URL or linkedIn:',
            validate: portfolioInput => {
                if (portfolioInputnput) {
                    return true;
                } else {
                    console.log('Please enter additional contact URL');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
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
            message: "Please write a brief description of your project here",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please write a brief description of your project here to proceed with your README.');
                    return false;
                }
            }
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
