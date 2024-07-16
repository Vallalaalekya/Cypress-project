import { Before,Given,When,Then,And } from
"cypress-cucumber-preprocessor/steps"

Given('user opens the Simple form url',()=>{
// cypress code
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('user enters firstname ,lastname, email, message',()=>{
    
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type("admin123")
})
And('clicks on submit',()=>{
    cy.get("#loginbutton").click();

})