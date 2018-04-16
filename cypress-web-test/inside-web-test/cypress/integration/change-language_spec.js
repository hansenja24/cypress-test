describe('Change Languages into Deutch', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000/')
  })

  it.only('hides "Clear Completed" with nothing checked', function () {
    cy.get('.sc-htpNat').should('exist')
  })
})
