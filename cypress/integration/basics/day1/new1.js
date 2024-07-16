

describe('OrangeHRM Suite', () => {
    it('login Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click();
        
    });
    it('facebook login', () => {
        cy.visit("https://www.facebook.com/login/")
        cy.get('#email').type("vallalaaravind@gmail.com")
        cy.get("#pass").type("Varavind@1999")
        cy.get("#loginbutton").click();
        
    });


    it('using xpath test', () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.xpath("//input[@id-'username']").type("Alekya_123");
        cy.xpath("//input[@id='username']").type("Alekya_123");
        cy.xpath("//button[@class-'radius']").click();
        
    });




});