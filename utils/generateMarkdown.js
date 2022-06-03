// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "BSD":
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case "Creative Commons":
      return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
    case "GNU":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "";
    case "Apache":
      return "";
    case "BSD":
      return "";
    case "Creative Commons":
      return "";
    case "GNU":
      return "";
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    license
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

  if(contribution)
  
  return content;
}

module.exports = generateMarkdown;
