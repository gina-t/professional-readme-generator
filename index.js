import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
  {
    type: 'input',
    message: 'Project title',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Project description',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'npm init',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Submitting a pull request',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Testing',
    name: 'testing',
  },
  {
    type: 'list',
    message: 'Choose a lisence',
    name: 'lisence',
    choices: ['MIT', 'Apache', 'GNU', 'Mozilla'],
  },
];

function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const data = JSON.stringify(response, null, ' ');
    const fileName = 'data.json';
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('data written to json file');
    });
  });
  generateMarkdown();
}

init();
