const inquirer = require('inquirer');
const fsPromises = require('fs/promises');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

const licenses = [
    {
        name: 'BSD 3-Clause',
        badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
        link: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    {
        name: 'MIT',
        badge: 'https://img.shields.io/badge/License-MIT-blue.svg',
        link: 'https://opensource.org/licenses/MIT'
    },
    {
        name: 'GPL v3',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        link: 'https://www.gnu.org/licenses/gpl-3.0'

    },
    {
        name: 'LGPL v3',
        badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/lgpl-3.0'
    },
    {
        name: 'N/A',
        badge: '',
        link: ''
    }
];

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the Title of the Project:',
        validate: title => title ? true : console.log("Please enter Project Title") && false
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the Description of the Project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter Usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: licenses.map(x => x.name),
        filter: (answer) => {
            // if N/A return a falsey value, otherwise, return the license object of the answer
            return answer === 'N/A' ? '' : licenses.filter(x => answer === x.name)[0]
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter Contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter Test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username for Questions:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address for Questions:',
        validate: email => {
            // good enough regex for email validation: https://emailregex.com
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return (!email || email.match(emailRegex)) ? true : console.log('Please enter a valid email address') && false;
        }
    }
];

function writeToFile(fileName, data) {
    const directory = path.dirname(fileName);
    return fsPromises.access(directory, fsPromises.R_OK | fsPromises.W_OK)
        // if the folder does not exist, create it
        .catch(err => fsPromises.mkdir(directory))
        // then write the file
        .then(() => fsPromises.writeFile(fileName, data));
}

function init() {
    const readmePath = './dist/README.md';
    inquirer.prompt(questions)
        // generate markdown from answers
        .then(answers => generateMarkdown(answers))
        // write the markdown to a file
        .then(markdown => writeToFile('./dist/README.md', markdown))
        // log any error caught
        .catch(err => console.log(err));
}

// Function call to initialize app
init();
