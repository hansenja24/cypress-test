//Accessing Github Testing from the REACT Web App
describe('Access to multiple repositories in Hansenja24 Github', function () {
  beforeEach(function () {
    //Before every tests, it will visit localhost:3000 and type 'hansenja24' in the user name input
    cy.visit('http://localhost:3000/')

    cy.get('input#username')
      .type('Hansenja24 {enter}')
  })

  //These are the tests for checking the property or details of Hansenja24 repositories
  it('Get The hansenja24 Repositories Details', function () {
    //.first means first child of the class
    cy.get('a.jZphMl').first().should('contain', 'mern_stack_tutorial_todo_app')
    //eq(1) and eq(4) mean the second child and fifth child of the class
    cy.get('a.sc-htpNat').eq(1).should('contain', 'AWS-Tool')
    cy.get('a.sc-htpNat').eq(4).should('have.attr', 'href').and('include', 'https://github.com/hansenja24/FeedMeProject')
  })

  //These are the tests for general result from the github seached
  it('Get The Number of Child in One Class of Hansenja24 Repositories', function() {
    cy.get('.sc-htpNat').should(($class) => {
      expect($class).to.be.not.empty;
      //The classes has 30 childs or elements
      expect($class).to.have.length(30);
      expect($class.eq(2)).to.contain('lambda-tester');
    })

  })
})
