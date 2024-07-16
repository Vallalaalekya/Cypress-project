///<refernce types="cypress"/>
///<reference types="@cypress/xpath"


describe('webtables', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[2]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')
    
        
    });
    it('test 2', () => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            cy.xpath('//table[@name="courses"]/tbody/tr[8]/td').each($ele)=>{
                if($ele.text().includes('python')){
                cy.wrap($ele).next().then((num)=>{
                    cy.log(num.text())
            
        
    });
        
            });
//table[@name='courses']/tbody/tr[6]/td[2]
//table)[2]/tbody/tr[8]/td[2]