// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // title
    {
        type: "input",
        name: "title",
        message: "Title of the project?:"
    },

    // descirption
    {
        type: "input",
        name: "description",
        message: "Description of the project?:"
    },

    // installation
    {
        type: "input",
        name: "installation",
        message: "Installation instructions?:"
    },

    // usage info
    {
        type: "input",
        name: "usage",
        message: "Usage information?:"
    },

    // contribution
    {
        type: "input",
        name: "contribution",
        message: "Any contributors?:"
    },

    // test instruction


    // license selection
    {
        type: "list",
        name: "license",
        message: "Please select license",
        choices: ["MIT", "Apache", "GNU", "None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.exists(fileName, (exists) =>{
        if(exists)
        {
            inquirer.prompt({
                type: "confirm",
                name: "overwrite",
                message: fileName + " already exist in current directory. Want to overwrite?"
            })
            .then((answers) => {
                if(answers.overwrite){
                    write(fileName, data);
                }
                else
                {
                    console.log("File generation cancelled.");
                }
            })
        }
        else
        {
            write(fileName, data);
        }
    })
}

function write(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
        {
            throw err;
        }
        console.log(fileName + " is generated successfully.");
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log("This is easy Readme generator for developer. Please enter input as following questions. Press enter to skip each question.")
    inquirer.prompt(questions).then((answers) => {
        var fileName = "README.md";
        writeToFile(fileName, markDown(answers));
    });
}

// Function call to initialize app
init();
