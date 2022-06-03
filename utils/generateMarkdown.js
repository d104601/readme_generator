// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license
  } = data;
    
  var content = "";
  
  if(title != "")
  {
    content += "#" + title + "\n\n";
  }
  if(description != "")
  {
      content += "##Description \n" + description + "\n\n";
  }
  if(installation != "")
  {
    content += "##Installation \n" + installation + "\n\n";
  }
  if(usage != "")
  {
    content += "##Usage \n" + usage + "\n\n";
  }
  
  return content;
}

module.exports = generateMarkdown;
