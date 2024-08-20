describe('Nonfiction', () => {
    it('title', () => {
        cy.visit('https://books.toscrape.com/ ');
        cy.title().should('include','Books to Scrape');
        cy.wait(5000);


       
    });
    it('Nonfiction', () => {
        cy.visit('https://books.toscrape.com/ ');
        cy.get('a[href="catalogue/category/books/nonfiction_13/index.html"]').click();
        cy.wait(2000);
       
    });
    it('Add to cart', () => {
        cy.visit('https://books.toscrape.com/ ');
        cy.xpath('(//button[@class="btn btn-primary btn-block"])[1]').click();        
    });
   
});
