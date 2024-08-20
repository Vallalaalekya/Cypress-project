describe('Google test cases', () => {
    it('Test on different browsers', () => {
        cy.visit('https://www.google.co.in/');
        cy.title().should('include','Google')
        
    });
});