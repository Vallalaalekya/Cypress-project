before(() => {
    cy.fixture('example').then((data)=>{
        globalThis.data= data;//we are intialising the dats coming fron example.json tothr 

    })     
            
});


describe('datadriven tesing', () => {
                it('orangetest1', () => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
                cy.get('input[name="username"]').type('data.username');
                cy.get('input[type="password"]').type("data.password");
                cy.get('button[type="submit"]').click();
                
                    
            
        });

            });