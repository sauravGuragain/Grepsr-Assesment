class LoginPage {
  visit() {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('a[href="/notes/app/login"]').click();
  }

  assertLoginPageVisible() {
    cy.url().should('include', '/login');
    cy.contains('h1', 'Login').should('be.visible');
  }

  login(email, password) {
    cy.get('[data-testid="login-email"]').type(email);
    cy.get('[data-testid="login-password"]').type(password);
    cy.get('[data-testid="login-submit"]').click();
  }
}

export default LoginPage;