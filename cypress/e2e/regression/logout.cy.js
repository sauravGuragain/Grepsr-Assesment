import LoginPage from '../../support/pageObjects/LoginPage';

const loginPage = new LoginPage();

describe('Logout Flow', () => {
  let userData;

  before(() => {
    cy.fixture('userData.json').then((user) => {
      userData = user;
    });
  });

  it('should login and then logout successfully', () => {
  loginPage.visit();
  loginPage.assertLoginPageVisible();
  loginPage.login(userData.email, userData.password);

  cy.contains('Notes').should('be.visible');

  cy.get('[data-testid="logout"]').click();

  cy.url().should('eq', 'https://practice.expandtesting.com/notes/app');
  cy.contains('h1', 'Welcome to Notes App').should('be.visible');
});
});
