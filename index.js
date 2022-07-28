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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
