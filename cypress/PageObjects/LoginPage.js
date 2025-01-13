export class LoginPage{

    navigate(){
        cy.visit("https://www.saucedemo.com/");

    }

    enterUserName(username){ 
        cy.get('[data-test="username"]').type(username);
    }

    enterPassword(password) {
        cy.get('[data-test="password"]').type(password);

    }

    clickLogin(){
        cy.get('[data-test="login-button"]').click()

    }

    clickLogout(){ 
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    }
}