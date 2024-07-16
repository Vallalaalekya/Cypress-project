import Login_po from "../../../../support/page objects/orangehrm/loginpage";
import Logout_po from "../../../../support/page objects/orangehrm/logoutpage";
import Link_po from "../../../../support/page objects/orangehrm/pagelink";
describe('', () => {
    const login_po =new Login_po;
    const link_po= new Link_po;
    const logout_po =new Logout_po;
    it('test1', () => {
        login_po.EnterURl();
        login_po.Login();

        
link_po.linkclick('Admin');
logout_po.logout();
        

        
    });
    
});