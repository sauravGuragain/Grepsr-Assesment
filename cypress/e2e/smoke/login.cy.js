import RegisterPage from '../../support/pageObjects/RegisterPage';
import LoginPage from '../../support/pageObjects/LoginPage';
import { faker } from '@faker-js/faker';

const registerPage = new RegisterPage();
const loginPage = new LoginPage();

describe('Sign Up and Login Flow', () => {
  const user = {
    email: faker.internet.email(),
    password: faker.internet.password(10),
    name: faker.person.fullName(),
  };

  it('should allow user to sign up', () => {
    registerPage.visit();
    registerPage.fillForm(user.email, user.password, user.name);
    registerPage.submit();
    cy.contains('User account created successfully').should('be.visible');
  });

  it('should allow user to login with same credentials', () => {
  loginPage.visit();
  loginPage.login(user.email, user.password);
  cy.contains('My Notes').should('be.visible');
});
});
