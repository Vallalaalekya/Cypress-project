describe('TUTORILAS NINJA ', () => {
    it('TESTCASES ON REGISTRATION', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        
        cy.get('#input-firstname').type('Vallala')
        cy.get('#input-lastname').type('Aditya')
        cy.get('#input-email').type('vallalaaditya@gmail.com');
        cy.get('#input-telephone').type('8106201995')
        cy.get('#input-password').type('arha123')
        cy.get('#input-confirm').type('arha123')
        cy.get('.col-sm-10 > :nth-child(1) > input').click()
        cy.get('[type="checkbox"]').click()
        cy.get('.pull-right > .btn').click({force:true})
        cy.get('.pull-right > .btn').click()

    
        
    });
    it('test on login', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.get('#input-email').type('vallalaalekya@gmail.com');
        cy.get('#input-password').type('arha123')
        cy.get('form > .btn').click()

        
    });
    it.only('.searching products and add to cart', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('input[name="search"]').type('hp')
        cy.get('.input-group-btn > .btn').click()
        cy.get('.img-responsive').click()
        cy.get('#button-cart').click({force:true})
        cy.get('#cart-total').click()
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').click()
        cy.get('#input-email').type('vallalaalekya@gmail.com')
        cy.get('#input-password').type('arha123')
        cy.get('#button-login').click()
        cy.get(':nth-child(1) > label > input').click()
        cy.get('#input-payment-firstname').type('Alekya')
        cy.get('#input-payment-lastname').type('Vallala')
        cy.get('#input-payment-address-1').type('kukatpally')
        cy.get('#input-payment-city').type('Hyderabad')
        cy.get('#input-payment-postcode').type('50033')
        cy.get('#input-payment-country').select('India')
        cy.get('#input-payment-zone').select('Andhra Pradesh')
        cy.get('#button-payment-address').click()
        cy.get('#button-shipping-address').click()
        cy.get('#button-shipping-method').click()
        cy.get('[type="checkbox"]').click()
        cy.get('#button-payment-method').click()
        cy.get('#button-confirm').click()
        cy.get('.pull-right > .btn').click({force:true})
        

        
    });

 
 });


        
        
