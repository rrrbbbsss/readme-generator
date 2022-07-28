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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
