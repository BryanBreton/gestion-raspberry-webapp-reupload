it("Ajout d'une application", () => {
  cy.get('a[href="/application"]').click()
  cy.get('#boutonCreate').click()
  cy.get('form').within($form => {
    cy.get('#appName').type('AppTi')
    cy.get('#appUrl').type('http://www.Ti.fr')
    cy.get('#appVersion').type('1.0.0')
    cy.root().click(400, 450)
  })
  cy.get('table')
    .contains('td', 'AppTi')
    .should('be.visible')
})
