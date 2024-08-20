LOGIN:
describe('letskodeit Suite', () => {
    it('login test', () => {
        cy.visit('https://www.letskodeit.com/login');
        cy.get('input[placeholder="Email Address"]').type('vallalaalekya@gmail.com');
        cy.get('input[placeholder="Password"]').type('vallalaalekya');
        cy.xpath('//button[@id="login"]').click();
    });
   
});


ASSERT:

describe('letskodeit Suite', () => {
    it('Assertion test', () => {


        cy.visit('https://www.letskodeit.com/practice');
        cy.url().should('include','practice');
        cy.title().should('include','Practice Page');
        cy.get('#show-textbox').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('[name="show-hide"]').should('not.be.visible');
        cy.get('.ui-autocomplete-input').type('App').should('have.value','App');
       
       
    });
});


DROPDOWN:
describe('Dropdown test', () => {
    it('test1', () => {


        cy.visit('https://www.letskodeit.com/practice');


        cy.get('#carselect').select('bmw').should('have.value','bmw')
       
    });
});

RADIOCHECKS:

describe('Radios and checkbox test', () => {
    it('radio button', () => {
        cy.visit('https://www.letskodeit.com/practice');
        cy.xpath('(//input[@type="radio"])[1]').check();
       
    });
    it('checkbox test', () => {


        cy.visit('https://www.letskodeit.com/practice');
        cy.xpath('//*[@id="bmwcheck"]').check().should('be.checked');


       
    });
});

WINDOWSTABS:
describe('windows and tabs', () => {
    it('windows test', () => {


        cy.visit('https://www.letskodeit.com/practice');


        cy.xpath('//*[.="Open Window"]').invoke('removeAttr','onclick').click({force:true});


        cy.origin('https://www.letskodeit.com/courses',()=>{
            cy.visit('');


            cy.contains('ALL COURSES').click();
        })


       
    });
    it.only('tab test', () => {


        cy.visit('https://www.letskodeit.com/practice');


        cy.xpath("//*[.='Open Tab']").invoke('removeAttr','target').click();


        cy.origin('https://www.letskodeit.com/courses',()=>{


            cy.contains("ALL COURSES").click();
           
           
        })
       
    });
});

ALERTS:
describe('alerts', () => {
    it('test', () => {


        cy.visit('https://www.letskodeit.com/practice');


        cy.get('#alertbtn').click();


        cy.on('window:alert',(alertmsg)=>{
            expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge');


            return true;
        })


        cy.get('#confirmbtn').click();


        cy.on('window:confirm',(msg)=>{
            expect(msg).to.eq('Hello , Are you sure you want to confirm?');


            return true;
        })
       
    });
});

CLICKS:
describe('Mouse hover', () => {
    it('hover test', () => {


        cy.visit('https://www.letskodeit.com/practice/');


        cy.get('#mousehover').click();


        cy.contains('Top').click({force:true});
        cy.url().should('include','Top');
       
    });
});


WEBTABLES:
describe('Web tables', () => {
    it('test', () => {


        cy.visit('https://www.letskodeit.com/practice');


        cy.xpath('//table[@name="courses"]/tbody/tr[3]/td[2]').should('include.text','Python Programming Language')
       
    });
});

Iframe:
describe('letskodeit', () => {
    it('frametest', () => {


        cy.visit('https://www.letskodeit.com/practice');


        cy.frameLoaded('#courses-iframe');


        cy.iframe().contains('BLOG').click();
       
    });
});


