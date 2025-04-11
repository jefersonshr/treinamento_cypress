const el = require('./login_elements').elements

class Login{

    preencherUsername(username){
        cy.get(el.campoUsername).type(username)
    }

    preencherCampoPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    clicarBotaoLogin(){
        cy.get(el.botaoLogin).click()
    }
}

export default new Login()