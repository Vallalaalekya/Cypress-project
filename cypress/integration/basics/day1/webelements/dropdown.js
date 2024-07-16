describe('Dropdown test', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');
        //cy.get('#dropdown-class-example').select('select').should('have.value','select');


    });
    it('select by text', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');
        cy.get('#dropdown-class-example').select('Select').should('have.value','');
    });




    it('slect by index', () => {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
       cy.get('#dropdown-class-example').select(2).should('have.value','option2');
        cy.get('#dropdown-class-example').select(1).should('have.value','option1');
        cy.get('#dropdown-class-example').select(3).should('have.value','option3');
        cy.get('#dropdown-class-example').select(0).should('have.value','');
    });

        
    });