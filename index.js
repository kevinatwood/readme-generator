const inquirer = require('inquirer');
const fs = require('fs');

const readMetxt = ({ title, description, installation, usage, contributing, tests, license, username, email }) => (
    `# ${title}

## Description

${description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}


## Usage

${usage}

## Contributing

${contributing}

## Tests


${tests}

## License

${license}

## Questions

${username}

${email}

`)

inquirer .prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter a title for your ReadME",
        },
        {
            type: "input",
            name: "description",
            message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

            - What was your motivation?
            - Why did you build this project?
            - What problem does it solve?
            - What did you learn?"
            ` ,
        },
        {
            type: "input",
            name: "installation",
            message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
            `,
        },
        {
            type: "input",
            name: "usage",
            message: `Provide instructions and examples for use. Include screenshots as needed.`
            ,
        },        
        {
            type: "input",
            name: "contributing",
            message: "Please enter any contribution guidelines for your project",
        },        
        {
            type: "input",
            name: "tests",
            message: "Please enter any testing instructions for your project",
        },        
        {
            type: "list",
            name: "license",
            message: "Choose a license from the options below",
            choices: ["test"],
        },        
        {
            type: "input",
            name: "username",
            message: "Please enter your Github username",
        },        
        {
            type: "input",
            name: "email",
            message: "Please enter your email address",
        },
    ])
    .then((response) => {
        const readmePageContent = readMetxt(response);

        fs.writeFile('README.md', readmePageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README!'));
        

    })