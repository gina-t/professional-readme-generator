import fs from 'fs';

function generateMarkdown(){
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading the json file");
    }else{
      console.log(data);
    };
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
    fs.writeFile('README.md', markdownContent, (err) => {
      if (err) {
        console.log("Error writing the markdown file");
      }else{
        console.log("Markdown file written");
      };
    });
  });
};

export default generateMarkdown;

