describe('Scroll through multiple posts', () => {

  beforeEach(() => {
    cy.visit('/posts')
    cy.injectAxe()
  })

  it('Links to a post and loads', () => {
    cy.WCAG2a()
    cy.findByRole('main')
      .findAllByRole('heading').first().click()
    cy.WCAG2a()
    cy.findAllByRole('navigation').last()
      .findAllByRole('link').first().click()
  })

  it('Uses Testscript to check rendering', () => {
    cy.findByRole('main')
      .findAllByRole('heading').contains(/testscript/i)
      .click()
  })

})