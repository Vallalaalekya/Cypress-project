describe('Automation store Suits', () => {
    it('test on store', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[ href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('input[name="first_name"]').type("vallala alekya");
        cy.get('input[id="ContactUsFrm_email"]').type("vallalaalekya@gmail.com");
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type('my self alekya');
        cy.get('button[title="Submit"]').click();
        cy.title().should('include','Contact Us');
    });
});