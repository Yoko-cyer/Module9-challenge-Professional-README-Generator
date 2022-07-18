// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generate-markdown');
const fs = require('fs/promises');
const path = require('path');

// goal is to generate a readme file
inquirer.prompt([
  {
    type: 'input',
    message: 'what is the project title?',
    name: 'title'
  },
  // {
  //   type: 'input',
  //   message: 'How do you install the project',
  //   name: 'install'
  // },
  // {
  //   type: 'input',
  //   message: 'How do you test the project',
  //   name: 'test'
  // },
  {
    type: 'list',
    message: 'what is the license?',
    name: 'license',
    choices: [
      'MIT', 'GPL-v2', 'Apache-v2', 'No license'
    ]
  },
  {
    type: 'input',
    message: 'what is your Github username?',
    name: 'github'
  },
  {
    type: 'input',
    message: 'what is your email address?',
    name: 'email'
  }
]).then((ans) => {
  console.log(ans);
  const markdown = generateMarkdown(ans)

  // once asked 
  // generate a read me file based on the responses
  // in the output folder
  
  const outputPath = path.join(__dirname, 'output', 'generated.md')
  fs.writeFile(outputPath, markdown, 'utf-8')
    .then(() =>{
      console.log('generated!')
    });
    
})


// Questions to ask:
// what is the title of the project
// license - choice
// github - type
// what is your purpose of this project?
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// instructions, usage information, contribution guidelines, and test instructions
// badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// GitHub username
// email address - entitled Questions, with instructions on how to reach me with additional questions
