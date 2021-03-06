// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case "Creative Commons":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "BSD":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Creative Commons":
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case "GNU":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return badge + link;
}

// function to creating table of contents
function createIndex(data)
{
  var table = "## Table of Contents \n";
  if(data.description != "")
  {
    table += "- [Description](#Description) \n";
  }
  if(data.installation != "")
  {
    table += "- [Installation](#Installation) \n";
  }
  if(data.usage != "")
  {
    table += "- [Usage](#Usage) \n";
  }
  if(data.contribution != "")
  {
    table += "- [Contribution](#Contribution) \n";
  }
  if(data.test != "")
  {
    table += "- [Test](#Test) \n";
  }
  if(data.github != "" || data.email != "")
  {
    table += "- [Additional](#Additional) \n";
  }

  return table;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    license,
    github,
    email
  } = data;
    
  var content = "";

  const badge = renderLicenseSection(license);
  
  if(title != "")
  {
    content += "# " + title + "\n\n";
  }

  if(badge != "")
  {
    content += "## License \n" + badge + "\n\n";
  }

  content += createIndex(data) + "\n";

  if(description != "")
  {
      content += "## Description \n" + description + "\n\n";
  }

  if(installation != "")
  {
    content += "## Installation \n" + installation + "\n\n";
  }

  if(usage != "")
  {
    content += "## Usage \n" + usage + "\n\n";
  }

  if(contribution != "")
  {
    content += "## Contribution \n" + contribution + "\n\n";
  }

  if(test != "")
  {
    content += "## Test \n" + test + "\n\n";
  }

  if(github != "" || email != "")
  {
    content += "## Additional \n";
    if(github != "")
    {
      content += "- Github: [" + github + "](https://github.com/" + github + ")\n";
    }
    if(email != "")
    {
      content += "- Email: " + email;
    }
  }
  
  return content;
}

module.exports = generateMarkdown;
