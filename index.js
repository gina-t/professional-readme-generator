import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs/promises';
import {renderLicenseBadge, renderLicenseLink, renderLicenseSection, renderTableOfContents, generateMarkdown} from './utils/generateMarkdown.js';

// array of questions for user input
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
    message: 'Usage instructiions '.magenta,
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices: ['MIT License', 'Apache License', 'GNU General Public License', 'Mozilla Public License'],
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
    type: 'input',
    name: 'authors',
    message: 'Authors and acknowledgement '.magenta,
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address '.magenta,
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username '.magenta,
  }
];

// function to initialize app
const initApp = async () => {
  try {
    const data = await inquirer.prompt(questions);
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
    renderLicenseBadge(data.license);
    renderLicenseLink(data.license);
    renderLicenseSection(data.license);
    renderTableOfContents(data);
    generateMarkdown(data);
  } catch (err) {
    console.error(err);
  }
};

export { initApp };



