//Create the unique html for each employeetype and the general addition
const employeeHTMLStr = `
      <div class="card">
        <div class="card-header">
          <h2>${data[i].name}</h2>
          <h4>${data[i].constructor.name}</h4>
        </div>
        <div class="card-body">
          <p id="id">ID: ${data[i].id}</p>
          <p>Email: <a href="mailto: ${data[i].email}">${data[i].email}</a></p>
`
const endingTagsStr = `</div></div>`

const managerHTMLStr = `<p>Office Number: ${data[i].officeNumber}</p>`

const engineerHTMLStr = `<p>GitHub: <a href="https://www.github.com/${data[i].github}">${data[i].github}</a></p>`

const internHTMLStr = `<p>School: ${data[i].school}</p>`

//TODO: Create a function to generate the HTML for the html 
function createCards(data) {
  let generatedCardString=``;
  for (let i = 0; i<data.length; i++) {
    generatedCardString = generatedCardString + employeeHTMLStr
    if (data[i].constructor.name === 'Manager') {

    }
    if (data[i].constructor.name === 'Engineer') {
      
    }
    if (data[i].constructor.name === 'Intern') {
      
    }
  }
}
console.log(employeeList[0].constructor.name)
/*       <div class="card">
<div class="card-header">
<h2>Name</h2>
<h4>Job Title</h4>
</div>
<div class="card-body">
<p id="id">ID</p>
<p>Email: <a href="mailto: EMAIL">EMAIL</a></p>
<p>Unique</p>
</div>
</div> 
*/
//function generateHTML that return the html in a template literal ``
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Gabagool Team Generator</title>
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
  </head>
  <body>
    <header>
      <h1>TEAM GABAGOOL</h1>
    </header>
    <main>
      <div class="cards"> 
        <div class="card"> 
      </div>
    </main>
  </body>
  </html>
  
  
  `
}
//  ${createCards(employees)}
//export the module 
module.exports = generateHTML;