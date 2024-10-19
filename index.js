import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs/promises';
import {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown} from './utils/generateMarkdown.js';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title '.magenta,
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description '.magenta,
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions '.magenta, 
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage instructiions npm init '.magenta,
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Submitting a pull request '.magenta,
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Testing instructions '.magenta,
  },
  {
    type: 'list',
    name: 'lisence',
    message: 'Choose a lisence',
    choices: ['MIT License', 'Apache License', 'GNU General Public License', 'Mozilla Public License'],
  },
];

inquirer.prompt(questions)
  .then((data) => {
    console.log(data);
    const jsonData = JSON.stringify(data, null, 2);
    // write file async/await version
    const writeFile = async () => {
      try {
        await fs.writeFile('./data.json', jsonData);
        console.log('File written to data.json');
      } catch (err) {
        console.error(err);
      }
    };
  writeFile();   
  // generate markdown content
  renderLicenseBadge();
  renderLicenseLink();
  renderLicenseSection();
  generateMarkdown();
  });




