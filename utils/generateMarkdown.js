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

function generateMarkdown(data){
  return fs.readFile('data.json', 'utf8')
  .then((data) => {
    const jsonData = JSON.parse(data);
    const markdownContent = `
    # ${jsonData.title} 
    ## ${jsonData.description}
    ## ${jsonData.installation}
    ## ${jsonData.usage}
    ## ${jsonData.contributing}
    ## ${jsonData.testing}
    ## ${jsonData.lisence}
    `;
    return fs.writeFile('README.md', markdownContent)
        .then(() => {
          console.log("Markdown file written");
        });
    })
    .catch((err) => {
      console.error("Error reading or writing files", err);
    });
}

export  { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown };

