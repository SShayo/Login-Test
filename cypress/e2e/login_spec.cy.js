describe('Login Page Tests', () => {
  const baseUrl = 'https://practicetestautomation.com/practice-test-login/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('should login with valid credentials', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.url().should('include', '/logged-in-successfully/')
    cy.contains('Congratulations').should('be.visible')
  })

  it('should show error for invalid credentials', () => {
    cy.get('#username').type('wronguser')
    cy.get('#password').type('wrongpass')
    cy.get('#submit').click()
    cy.get('#error').should('have.text', 'Your username is invalid!').and('be.visible')
  })

  it('should show error for empty fields', () => {
    cy.get('#submit').click()
    cy.get('#error').should('have.text', 'Your username is invalid!').and('be.visible')
  })
})
