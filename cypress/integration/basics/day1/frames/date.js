describe('date test', () => {
    it('test1', () => {
        cy.visit('https://jqueryui.com/datepicker/');
        cy.frameLoaded('.demo-frame');
        cy.iframe().xpath('//input[@').type('12/04/2001{enter}')
        
    });
});