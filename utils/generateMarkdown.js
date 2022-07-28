// here be a quiet farm of ternary operators...
function renderLicenseBadge(license) {
  return license ? `[![License: ${license.name}](${license.badge})](${license.link})` : '';
}

function renderLicenseLink(license) {
  return license ? `[${license.name}](${license.link})` : '';
}

function renderLicenseSection(license) {
  return license ? `## License
  
  This project is licensed under the ${renderLicenseLink(license)} license.` : '';
}

function renderTableOfContents(data) {
  // title is always included so destruct that out
  const { title, ...props } = data;
  // check to see if there were any answers and render the table of contents, otherwise reuturn nothing
  return Object.values(props).reduce((acc, x) => x || acc, false) ? `## Table of Contents

${[data.description ? "1. [Description](#Description)" : '',
    data.installation ? "1. [Installation](#Installation)" : '',
    data.usage ? "1. [Usage](#Usage)" : '',
    data.license ? "1. [License](#License)" : '',
    data.contributing ? "1. [Contributing](#Contributing)" : '',
    data.tests ? "1. [Tests](#Tests)" : '',
    data.github || data.email ? "1. [Questions](#Questions)" : '']
      .filter(x => x)
      .join('\n')}
      ` : "";
}

function renderDescriptionSection(data) {
  return data ? `## Description

${data}
` : '';
}

function renderInstallationSection(data) {
  return data ? `## Installation

${data}
` : '';
}

function renderUsageSection(data) {
  return data ? `## Usage 

${data}
` : '';
}

function renderContributingSection(data) {
  return data ? `## Contributing

${data}
` : '';
}

function renderTestsSection(data) {
  return data ? `## Tests

${data}
` : '';
}

function renderQuestionsSection(github, email) {
  return github || email ? `## Questions

${github ? `Github Account: [${github}](https://github.com/${github})` : ''}

${email ? `Email Address: ${email}` : ''}
  ` : '';
}

function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${[renderLicenseBadge(data.license) + '\n',
    renderTableOfContents(data),
    renderDescriptionSection(data.description),
    renderInstallationSection(data.installation),
    renderUsageSection(data.usage),
    renderLicenseSection(data.license),
    renderContributingSection(data.contributing),
    renderTestsSection(data.tests),
    renderQuestionsSection(data.github, data.email)]
      .filter(x => x)
      .join('\n')}
      `
}

module.exports = generateMarkdown;
