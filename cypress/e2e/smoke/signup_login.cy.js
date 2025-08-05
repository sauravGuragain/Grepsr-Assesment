import RegisterPage from '../../support/pageObjects/RegisterPage';
import LoginPage from '../../support/pageObjects/LoginPage';

const registerPage = new RegisterPage();
const loginPage = new LoginPage();

describe('User SignUp and Login Flow', () => {
  let userData;

  before(() => {
    const uniqueEmail = `testuser+${Date.now()}@example.com`;
    userData = {
      email: uniqueEmail,
      password: 'Test@1234',
      name: 'Test User'
    };
    cy.writeFile('cypress/fixtures/userData.json', userData);
  });

  it('Sign Up - Create new user', () => {
    registerPage.visit();
    registerPage.assertRegisterPageVisible();
    registerPage.fillForm(userData.email, userData.password, userData.name);
    registerPage.submit();
    cy.contains('User account created successfully').should('be.visible');
  });

  it('Login - Use signed up user', () => {
    loginPage.visit();
    loginPage.assertLoginPageVisible();
    loginPage.login(userData.email, userData.password);
    cy.contains('Notes').should('be.visible');
  });
});