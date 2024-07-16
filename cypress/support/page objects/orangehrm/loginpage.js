class Login_po{

EnterURl(){
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}
Login(){
    cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()


}
clickonforgotpassword(){
    cy.get('.orangehrm-login-forgot-header').click();
}

}
export default Login_po;