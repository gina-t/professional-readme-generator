import inquirer from 'inquirer';
import fs from 'fs';

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
    message: 'Usage',
    name: 'usage',
  },
  { 
    type: 'input',
    message: 'Contributing',
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
    choices: ['MIT', 'Apache', 'GNU', 'Mozilla']
  },
];

inquirer
.prompt(questions)
.then(answers => {
  console.log('Answers', answers);
});


// const data = JSON.stringify('Answers', null, ' ');
// console.log(data);


// // // Create a function to write README file
// fs.writeFile('./test.txt', data, (err) => {
//   if (err) throw err;
//   console.log('data written to file');
//   });

function writeToFile(fileName, data) {
  
};

// Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
