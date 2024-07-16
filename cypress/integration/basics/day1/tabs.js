const { it } = require("mocha");


describe('tabs', () => {



    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('//*[.="Open Tab"]').invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('')
                cy.contains('Access all our Courses').click();

    })
        });
        it('Open new window', () => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            cy.xpath('//*[.="Open Window]').invoke('removeAttr','onclick')
            
        });
        
    });