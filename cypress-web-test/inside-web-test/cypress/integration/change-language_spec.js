//Changing Languages of the Content from Web App REACT
//The purpose of this test to use the features of the Web App
describe('Change Languages into Deutch, Vice Versa', function () {
  beforeEach(function () {
    //Before each test, it will visit the localhost:3000 and select 'de' as Deutch language
    cy.visit('http://localhost:3000/')
    cy.get('.EtUfl').select('de')
  })

  it.only('The Html Should Contain Deutch Paragraph or Sentences', function () {
    cy.get('.kpbCLA').should('contain', 'Beginnen Sie Ihr nächstes React Projekt in Sekunden')
    cy.get('.bPliuS').eq(1).click('center')
    cy.get('.fyjucR').eq(4).should('contain', 'Komplette i18n Standard-Internationalisierung und Pluralisierung')

    cy.get('.EtUfl').select('en')
    cy.get('.fyjucR').eq(3).should('contain', 'Offline-first')
  })

})
