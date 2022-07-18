

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
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

## Usage

## License

${license}

## Contributing

## Tests

## Questions

Visit my github profile here: [${github}](https://github.com/${github}).
Contact me on ${email} for any questions. 

`

}

module.exports = generateMarkdown;
