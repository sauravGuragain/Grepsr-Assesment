class RegisterPage {
  visit() {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('[data-testid="open-register-view"]').click();
  }

  assertRegisterPageVisible() {
    cy.url().should('include', '/register');
    cy.contains('h1', 'Register').should('be.visible');
  }

  fillForm(email, password, name) {
    cy.get('[data-testid="register-email"]').type(email);
    cy.get('[data-testid="register-password"]').type(password);
    cy.get('[data-testid="register-confirm-password"]').type(password);
    cy.get('[data-testid="register-name"]').type(name);
  }

  submit() {
    cy.get('[data-testid="register-submit"]').click();
  }
}

export default RegisterPage;