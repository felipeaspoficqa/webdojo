import formPage from "../pages/formPage"

describe('Formulario de consultoria', ()=> {
    
    beforeEach(() =>{
        cy.visitar()
        cy.submeterLogin('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
    })
    
    it('Deve solicitar consultoria individual', ()=> {

        formPage.preencherCampoNome()
        formPage.preencherCampoEmail()
        formPage.preencherCampoTelefone()

        formPage.selecionarTipoDaConsultoria()
        formPage.selecionarTipoDePessoa()

        formPage.digitarNumeroDoDocumento()

        formPage.marcarCheckboxes()

        formPage.selecionarArquivo()

        formPage.preencherTextArea()

        formPage.adicionarTecnologias()

        formPage.concordarComTermosDeUso()

        formPage.enviarFormulario()

        formPage.verificarMensagemFinal()
    })  
})
