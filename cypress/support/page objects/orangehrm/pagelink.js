class Link_po{


    //it is a generic method to click on any page
    
    linkclick(link){
        cy.contains(link).click();
    
    }
}
export default Link_po;