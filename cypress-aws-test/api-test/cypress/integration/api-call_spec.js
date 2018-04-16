//Accessing Github Testing from the REACT Web App
describe('Access to multiple repositories in API Called Github', function () {
  //AWS API Url
  let url = "https://xutts546ha.execute-api.us-west-2.amazonaws.com/Test";
  beforeEach(function () {
    //Before every tests, it will visit localhost:3000
    cy.visit('http://localhost:3000/')
  })

  //These are the tests for checking the property or details of Hansenja24 repositories
  it('Get Request API to Access Github', function () {
    //Request API call to get data from AWS DDB
    cy.request(url).then((response) => {
      expect(response.status).to.eq(200)
      //The response body would be 'hansenja24'
      expect(response.body).to.eq('hansenja24')
      cy.get('input#username')
        .type(response.body)
        .type( '{enter}' )
      //.first means first child of the class
      cy.get('a.jZphMl').first().should('contain', 'cypress-test')
      //eq(1) and eq(4) mean the second child and fifth child of the class
      cy.get('a.sc-htpNat').eq(2).should('contain', 'AWS-Tool')
      cy.get('a.sc-htpNat').eq(5).should('have.attr', 'href').and('include', 'https://github.com/hansenja24/FeedMeProject')
    })

  })

  //These are the tests for general result from the github seached
  it('Get The Number of Child in One Class of Hansenja24 Repositories', function() {
    cy.request(url).then((response) => {
      cy.get('input#username')
        .type(response.body)
        .type( '{enter}' )
      cy.get('.sc-htpNat').should(($class) => {
        expect($class).to.be.not.empty;
        //The classes has 30 childs or elements
        expect($class).to.have.length(30);
        expect($class.eq(3)).to.contain('lambda-tester');
      })
    })

  })
})
