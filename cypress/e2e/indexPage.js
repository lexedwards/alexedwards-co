describe('Navigate the Default Pages', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Has no A11y Violations', () => {
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
    })
  })

  it('Has Navigation', () => {
    cy.findByRole('navigation')
      .findByText(/about/i)
      .click()
    cy.findByRole('navigation')
      .findByText(/say hello/i)
      .click()
    cy.findAllByRole('heading')
      .findByText(/alex edwards/i)
      .click()
  })
})
