describe('flipkart', () => {
    it('test 1', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('input[type="text"][name="q"]').type("8106201994");
        cy.get("._1wGnMD rX1XT4 _2nD2xJ").click();
        cy.get('')

        
    });
});