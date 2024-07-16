describe('Automation test store', () => {
    it('tests ', () => {
        //cy.visit will takes to the url page
        cy.visit('https://automationteststore.com/');
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click({force:true});
        cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click({force:true});
        // now i selected the 3rd t-shirt
        cy.get(':nth-child(3) > .fixed_wrapper > .fixed > .prdocutname').click();
        cy.get('#option350').select('775').should('have.value','775');
        cy.get('#option351').select('Medium').should('have.value', 'Medium' );
        //cy.get('.col-sm-4 > .input-group-addon').select('10').should('have the value','10')
        cy.get('.cart').click();
    
        
    });
});