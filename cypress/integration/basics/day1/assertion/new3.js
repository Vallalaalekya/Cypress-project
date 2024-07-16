describe('orange tests', () => {
    it('test i', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').then(($username)=>{
            expect($username).to.have.attr('placeholder','Username')
            cy.wrap($username).type('Admin')
        })
        cy.get('input[name="password"]').then(($password)=>{
            expect($password).to.have.attr('placeholder','Password')
            cy.wrap($password).type('admin123')
        })
        cy.get('button[type="submit"]').then(($submit)=>{
            expect($submit).to.have.text(" Login ")
            cy.wrap($submit).click();
        })

    });
//     cy.get('.oxd-userdropdown-name').click();
//     cy.get('.oxd-userdropdown-menu').find('.oxd-userdropdown-link').each($dropdown_ele)>{
//         if($dropdown_ele.text()=='Logout'){
//             cy.wrap($dropdown_ele).click();
//         }
//     }

//     });
// });
});