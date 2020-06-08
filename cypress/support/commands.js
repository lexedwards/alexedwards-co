Cypress.Commands.add('assertHome', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`)
})

Cypress.Commands.add('WCAG2a', () => {
  cy.checkA11y(null, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a'],
    },
  })
})