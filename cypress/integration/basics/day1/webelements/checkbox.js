describe('Alerts', () => {
    it('test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.on('window:alert',(alertmsg)=>{
            expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge')
            return true;
        })
        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Hello , Are you sure you want to confirm?')
            return false;
    })
    });
});