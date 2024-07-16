import { Before,Given,When,Then,And } from
"cypress-cucumber-preprocessor/steps"

Given('user opens the Simple form url',()=>{
// cypress code
cy.visit('')
})

When('user enters firstname ,lastname, email, message',()=>{


})
And('clicks on submit',()=>{

})


Then('An alert saying successful message has to be displayed.',()=>{
cy.on("window:alert",(msg)=>{
expect(msg).to.eq('Thank You for reaching out to us, Alekya vallala')
    return true; // this will make the alert click on ok
})
})