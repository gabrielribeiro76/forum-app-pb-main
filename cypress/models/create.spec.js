describe('create-thread Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/create-thread');
    });
  
    it('should render the title input field', () => {
      cy.get('input[name="titulo"]').should('exist');
    });
  
    it('should render the description textarea field', () => {
      cy.get('textarea[name="descricao"]').should('exist');
    });
  
    it('should allow users to type in the title input field', () => {
      const titulo = 'New Thread Title';
      cy.get('input[name="titulo"]').type(titulo).should('have.value', titulo);
    });
  
    it('should allow users to type in the description textarea field', () => {
      const descricao = 'Description for the new thread';
      cy.get('textarea[name="descricao"]').type(descricao).should('have.value', descricao);
    });
  
    it('should navigate to dashboard page when the "Cancelar" button is clicked', () => {
      cy.get('.cancelBtn').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('should display an alert when the thread is successfully created', () => {
      cy.intercept('POST', 'https://projeto-bloco-4f62c-default-rtdb.firebaseio.com/posts.json', {
        statusCode: 200,
        body: {},
      }).as('createThread');
  
      cy.get('input[name="titulo"]').type('New Thread Title');
      cy.get('textarea[name="descricao"]').type('Description for the new thread');
      cy.get('.createThreadBtn').click();
  
      cy.wait('@createThread').then(() => {
        cy.on('window:alert', (text) => {
          expect(text).to.contains('Thread created successfully!');
        });
      });
    });
  
    it('should display an error message when failed to create a thread', () => {
      cy.intercept('POST', 'https://projeto-bloco-4f62c-default-rtdb.firebaseio.com/posts.json', {
        statusCode: 500,
        body: { error: 'Failed to create thread' },
      }).as('createThread');
  
      cy.get('input[name="titulo"]').type('New Thread Title');
      cy.get('textarea[name="descricao"]').type('Description for the new thread');
      cy.get('.createThreadBtn').click();
  
      cy.wait('@createThread').then(() => {
        cy.on('window:alert', (text) => {
          expect(text).to.contains('Error creating thread');
        });
      });
    });
  });