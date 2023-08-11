const inquirer = require('inquirer');
const fs = require('fs');


const readMetxt = ({ title, description, installation, usage, contributing, tests, license, username, email }) => {
    let licenseLink = "";
    switch (license){
        case 'Apache':
            licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case 'GNU':
            licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
        case 'MIT':
            licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case 'Boost Software License 1.0':
            licenseLink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            break;

        case 'None':
            licenseLink = "";
            break;
    }
  return  `# ${title}

${licenseLink}
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
${licenseLink}


This project is covered under the ${license} license.

## Questions

Find me on GitHub! My username is ${username}. Here is a link to my profile! [Github Profile](https://github.com/${username})

If you would like to contact me with questions, email me at ${email}.

`}

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
            choices: ['None', 'Apache', 'GNU', 'MIT', 'Boost Software License 1.0'],
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