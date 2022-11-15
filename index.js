const inquirer = require('inquirer');
const generateHTML = require('./src/htmlgenerator')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const team = []



const { writeFile } = require('fs').promises;



const promptManagerQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
    },
  ]);
};

const promptEngineerQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
  ])
}

const promptInternQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your school',
    },
  ])
}

const promptTeamMemberQuestions = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'Which type of employee would you like to add?',
      choices: ['Engineer', 'Intern', 'Done']
     }
  ]) .then((answers) => {
    if (answers.employeeType === 'Engineer') {
      promptEngineerQuestions()
    }
    else if (answers.employeeType === 'Intern') {
      promptInternQuestions()
    }
    else {

    }
  })
}

const init = () => {
  promptManagerQuestions()
    .then((answers) => { 
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      team.push(manager)
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
      team.push(engineer)
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      team.push(intern)
      promptTeamMemberQuestions()
      return writeFile('./dist/index.html', generateHTML(answers))
    })
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
