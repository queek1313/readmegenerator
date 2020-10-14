// function to generate markdown for README
function generateMarkdown(userResponses) {
  return `# ${userResponses.title}

  ## Description.
  
  ${userResponses.description}

  ## Install instructions.

  ${userResponses.installation}

  ## Instructions and examples of usage.

  ${userResponses.usage}

  ## How to contribute to the project.

  ${userResponses.contribute}

  ## Chosen license for this project.

  ${userResponses.license}

  ##  Project brought to you by Github user
  
  ${userResponses.username}

`;
}

module.exports = generateMarkdown;
