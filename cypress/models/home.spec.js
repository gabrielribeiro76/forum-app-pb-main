describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the navigation bar', () => {
    cy.get('nav').should('exist');
  });

  it('should navigate to create thread page when "Crie seu Tópico" button is clicked', () => {
    cy.contains('Crie seu Tópico').click();
    cy.url().should('include', '/create-thread');
  });
});