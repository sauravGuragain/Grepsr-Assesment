class NotesPage {
  clickAddNoteButton() {
    return cy.get('button[data-testid="add-new-note"]').click();
  }

  selectCategory(category) {
    return cy.get('select[data-testid="note-category"]').select(category);
  }

  setCompleted(isCompleted) {
    const checkbox = cy.get('input[data-testid="note-completed"]');
    return isCompleted ? checkbox.check() : checkbox.uncheck();
  }

  typeTitle(title) {
    return cy.get('input[data-testid="note-title"]').should('be.visible').clear().type(title);
  }

  typeDescription(description) {
    return cy.get('textarea[data-testid="note-description"]').should('be.visible').clear().type(description);
  }

  clickCreateButton() {
    return cy.get('button[data-testid="note-submit"]').should('be.enabled').click();
  }

  addNote(category, isCompleted, title, description) {
    this.clickAddNoteButton();
    this.selectCategory(category);
    this.setCompleted(isCompleted);
    this.typeTitle(title);
    this.typeDescription(description);
    this.clickCreateButton();
    cy.wait(1000);
  }

  normalizeText(text) {
    return text?.replace(/\s+/g, ' ').trim();
  }

  assertNoteExists(title, description) {
    const normalizedTitle = this.normalizeText(title);
    const normalizedDescription = this.normalizeText(description);

    cy.get('[data-testid="note-card"]').should('exist').then(cards => {
      // this is logging for debug
      [...cards].forEach(card => {
        const t = card.querySelector('[data-testid="note-card-title"]')?.innerText;
        const d = card.querySelector('[data-testid="note-card-description"]')?.innerText;
        console.log('Card title:', t, '| Card desc:', d);
      });

      const found = [...cards].some(card => {
        const cardTitle = this.normalizeText(card.querySelector('[data-testid="note-card-title"]')?.innerText);
        const cardDesc = this.normalizeText(card.querySelector('[data-testid="note-card-description"]')?.innerText);
        return cardTitle.includes(normalizedTitle) && cardDesc.includes(normalizedDescription);
      });

      if (!found) {
        throw new Error(`Note with title "${title}" and description "${description}" not found`);
      }
    });
  }

  editNote(currentTitle, updatedTitle, updatedDesc) {
    const normalizedCurrentTitle = this.normalizeText(currentTitle);

    cy.get('[data-testid="note-card"]').should('exist').then(cards => {
      const targetCard = [...cards].find(card => {
        const titleText = this.normalizeText(card.querySelector('[data-testid="note-card-title"]')?.innerText);
        return titleText.includes(normalizedCurrentTitle);
      });

      if (!targetCard) {
        throw new Error(`Note with title "${currentTitle}" not found`);
      }

      cy.wrap(targetCard).within(() => {
        cy.get('[data-testid="note-edit"]').click();
      });
    });

        cy.get('input[data-testid="note-title"]').should('be.visible').clear().type(updatedTitle);
    cy.get('textarea[data-testid="note-description"]').should('be.visible').clear().type(updatedDesc);
    cy.get('button[data-testid="note-submit"]').should('be.enabled').click();

    cy.wait(1000);
  }

  deleteNote(title) {
    const normalizedTitle = this.normalizeText(title);

    cy.get('[data-testid="note-card"]').should('exist').then(cards => {
      const card = [...cards].find(card => {
        const cardTitle = this.normalizeText(card.querySelector('[data-testid="note-card-title"]')?.innerText);
        return cardTitle.includes(normalizedTitle);
      });

      if (!card) {
        throw new Error(`Note with title "${title}" not found for deletion`);
      }

      cy.wrap(card).within(() => {
        cy.get('[data-testid="note-delete"]').click();
      });
    });

    cy.get('button[data-testid="note-delete-confirm"]').should('be.visible').click();
    cy.wait(1000);
  }

  assertNoteDoesNotExist(title) {
    const normalizedTitle = this.normalizeText(title);

    cy.get('[data-testid="note-card-title"]').each($el => {
      const text = this.normalizeText($el.text());
      expect(text).not.to.include(normalizedTitle);
    });
  }
}

export const notesPage = new NotesPage();
