describe('login functionality', () => {
    it('tests', () => {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('Admin123')
        cy.get('#sessionLocation').select('#Outpatient\ Clinic').should('have.value','Outpatient Clinic')
       // cy.get('#Outpatient\ Clinic').click();
        cy.get('#loginButton').click();

        
    });
});