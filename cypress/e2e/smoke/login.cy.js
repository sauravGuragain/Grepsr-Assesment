import SignUpPage from '../pageObjects/SignUpPage';
import LoginPage from '../pageObjects/LoginPage';
import { faker } from '@faker-js/faker';

describe('Sign Up and Login Flow', () => {
  const user = {
    email: faker.internet.email(),
    password: faker.internet.password(10),
    name: faker.person.fullName(),
  };

  it('should allow user to sign up', () => {
    SignUpPage.visit();
    SignUpPage.fillForm(user);
    SignUpPage.submit();
    cy.contains('User account created successfully').should('be.visible');
  });

  it('should allow user to login with same credentials', () => {
    LoginPage.visit();
    LoginPage.login(user);
    cy.contains('My Notes').should('be.visible');
  });
});