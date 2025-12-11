describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.visitar()
    cy.submeterLogin('papito@webdojo.com', 'katana123')

    cy.url()
      .should('include', '/dashboard')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })

  it('Não deve logar com senha inválida', () => {
    cy.visitar()
    cy.submeterLogin('papito@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

  it('Não deve logar com email inválido', () => {
    cy.visitar()
    cy.submeterLogin('wrongpapito@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')  
      .should('be.visible')
  })
})