describe('Navigate the Default Pages', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Loads and goes to Page 2', () => {
    cy.get('p > a').click()
  })

  it('Has no A11y Violations', () => {
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
    })
  })
})
