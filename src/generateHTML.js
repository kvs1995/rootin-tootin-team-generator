//Create the unique html for each employeetype and the general addition
function createCards(data) {

  let generatedCardString=``;
  console.log(data)
  // return "heyyy"
  for (let i = 0; i<data.length; i++) {
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

  const endingTagsStr = `
           </div>
        </div>`

  const managerHTMLStr = `          <p>Office Number: ${data[i].officeNumber}</p>`


  const engineerHTMLStr = `          <p>GitHub: <a href="https://www.github.com/${data[i].github}">${data[i].github}</a></p>`

  const internHTMLStr = `          <p>School: ${data[i].school}</p>`

//TODO: Create a function to generate the HTML for the html 

    generatedCardString =generatedCardString+employeeHTMLStr
    switch(data[i].constructor.name) {
      case 'Manager': generatedCardString = generatedCardString + managerHTMLStr
        break;
      case 'Engineer': generatedCardString = generatedCardString + engineerHTMLStr
        break;
      case 'Intern': generatedCardString = generatedCardString + internHTMLStr
      break;
    }
    generatedCardString = generatedCardString+ endingTagsStr
  }
  return generatedCardString
}

//function generateHTML that return the html in a template literal ``
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Gabagool Team Generator</title>
    <link rel="stylesheet" type="text/css" href="./dist/jass.css" />
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
  </head>
  <body>
    <header>
      <h1>TEAM GABAGOOL</h1>
    </header>
    <main> 
      ${createCards(data)}
    </main>
  </body>
  </html>
  
  
  `
}
//  ${createCards(employees)}
//export the module 
module.exports = generateHTML;