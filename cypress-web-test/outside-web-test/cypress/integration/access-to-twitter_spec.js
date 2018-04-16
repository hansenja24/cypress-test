//Accessing Twitter Testing from the REACT Web App
//This test has a lot limitation because it tries to access another website from the web App
//Cypress unable to access another website by having CORS, however there are 2 solutions for it
//First: By writing ''"chromeWebSecurity": false' in cypress.json, it will allow testing go through another website by disabling the web security
//Second: By requesting the url instead of visiting it. By using cy.request(), cypress can access the body, header, url, status, etc.

//This test uses the second method to access Twitter Account
describe('Access to Max Stoiber Twitter', function () {

  it.only('Get the Name of Twitter Profile', function () {
    cy.visit('http://localhost:3000')
    //Getting the url of Twitter account by grab the href in the Web App
    cy.get('a.cpsuiK').then(($a) => {
      // pull off the fully qualified href from the <a>
      const url = $a.prop('href')

      // make a cy.request to it
      cy.request(url).its('body').should('include', '</html>')
      cy.request(url).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
})
