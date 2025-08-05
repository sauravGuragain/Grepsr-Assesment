import { notesPage } from '../../support/pageObjects/NotesPage';
import { faker } from '@faker-js/faker';


describe('Notes CRUD Flow', () => {
  let title, description, updatedTitle, updatedDescription;

  before(() => {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.contains('a', 'Login').click();

    cy.get('input[data-testid="login-email"]').type('abc1@xyz.com');
    cy.get('input[data-testid="login-password"]').type('123456789');
    cy.get('button[data-testid="login-submit"]').click();

    cy.get('a[data-testid="home"]').should('contain.text', 'MyNotes');
  });

  it('creates, updates, and deletes a note', () => {
    title = faker.lorem.words(4);
    description = faker.lorem.sentences(2);
    updatedTitle = faker.lorem.words(4);
    updatedDescription = faker.lorem.sentences(2);

    notesPage.addNote('Work', false, title, description);
    notesPage.assertNoteExists(title, description);

    notesPage.editNote(title, updatedTitle, updatedDescription);
    notesPage.assertNoteExists(updatedTitle, updatedDescription);

    notesPage.deleteNote(updatedTitle);
    notesPage.assertNoteDoesNotExist(updatedTitle);
  });
});
