import fs from 'fs/promises';

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
};

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }else{
    return '';
  };
};

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
  }else{
    return '';
  };
};

function generateMarkdown(){
  return fs.readFile('data.json', 'utf8')
  .then((data) => {
    const jsonData = JSON.parse(data);
    const markdownContent = `
    # Project title
    ${jsonData.title} 
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Testing](#testing)
    - [Authors and acknowledgment](#authors)
    - [Questions](#questions)   
    ## Description
    ${jsonData.description}
    ## Installation
    ${jsonData.installation}
    ## Usage
    ${jsonData.usage}
    ## License
    ${jsonData.license}
    ## Contributing
    ${jsonData.contributing}
    ## Testing
    ${jsonData.testing}
    ## Authors and acknowledgement
    ${jsonData.authors}
    ## Questions
    - [Email](#email)
    - [GitHub](#github)
    `;
    return fs.writeFile('userREADME.md', markdownContent)
        .then(() => {
          console.log("Markdown file written");
        });
    })
    .catch((err) => {
      console.error("Error reading or writing files", err);
    });
};

export  { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown };

