const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type: "input",
        message:"Github username?",
        name: "username",
        validate: function(answer){
            if (answer.length < 1) {
                return console.log (" Username required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Title of project?",
        default: "Random title",
        name:"title",
        validate: function(answer){
            if (answer.length < 1){
                return console.log ("project required");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Description of project",
        name: "description",
        default: "description",
        validate: function(answer){
            if (answer.length < 1){
                return console.log ("description required")
            }
            return true;
        }

    },
    {
        type:"input",
        message:" Install instructions",
        name: "installation"
    },
    {
        type:"input",
        message: "Examples of usage",
        name: "usage"
    },
    {
        type:"input",
        message: "How can others contribute",
        name:"contribute"
    },
    {
        type: "list",
        message: "Choose a license for your project",
        choices: [ "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0"],
        name: "license"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err =>{
        if (err) {
            return console.log(err);
        }
        console.log("Your Readme has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
           } catch (error) {
               console.log(error);
           }
};

// function call to initialize program
init();

