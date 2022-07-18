// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

function generateLicenseBadge(license){
  const licenseName = encodeURIComponent(license.replace('-', ' '))

  return `![${license}-licensed](https://img.shields.io/badge/license-${licenseName}-brightgreen)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  license,
  github,
  email
}) {
  
  return `

# ${title}
${generateLicenseBadge(license)}

## Description

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

## Credits

## License

## Features

## Tests

## Contact

visit my github profile here: [${github}](https://github.com/${github})
Contact me: ${email}

`

}

module.exports = generateMarkdown;
