describe('Smoke test', () => {
  it('is smoke', () => {
    cy.login("Centrale", "U GIE IRIS", "jchauvin", "superu")
    // 2 - Validation de l'appel a l'API refUtilisateurAppli
    cy.wait(50)
      .get('.vue-avatar--wrapper > span') // récuperation de l'avatar IRIS
      .invoke('text') // récupération du texte
      .should('not.be.empty') // assertion

    cy.wait(1000)
      .get('.v-datatable__actions__pagination')
      .then(element => {
        expect(element.text()).to.not.equal('–')
      })
    cy.logout()
  })
})
