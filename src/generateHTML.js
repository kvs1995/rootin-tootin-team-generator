
//TODO: Create a function to generate the HTML for the html 
function createCards(data) {
  let generatedCardString=``;
  for (let i = 0; i<data.length; i++) {

  }
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