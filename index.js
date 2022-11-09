const inquirer = require('inquirer');
const generateHTML = require('./src/htmlgenerator')

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: '',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: '',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};


// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => {
      return writeFile('./dist/index.html', generateHTML(answers))
    })
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();