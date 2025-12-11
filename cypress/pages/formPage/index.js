class form{

    preencherCampoNome(){
        cy.get('#name').type('Felipe Rodrigues')
    }

    preencherCampoEmail(){
        cy.get('#email').type('felipe@qa.com')
    }

    preencherCampoTelefone(){
        cy.get('#phone').type('12345678987')
            .should('have.value', '(12) 34567-8987')
    }

    selecionarTipoDaConsultoria(){
        cy.get('#consultancyType').select('Individual')
            .should('have.value', 'individual')
    }

    selecionarTipoDePessoa(){
        cy.contains('label', 'Pessoa Física').click()
            cy.contains('label', 'CPF').should('be.visible')
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('not.be.checked')
    }

    digitarNumeroDoDocumento(){
        cy.get('#document').type('12345678912')
            .should('have.value', '123.456.789-12') 
    }

    marcarCheckboxes(){
        const checkboxes = [
            'Instagram',
            'LinkedIn',
            'Indicação de Amigo'
        ]
        
        checkboxes.forEach((checkbox)=>{
            cy.contains('label', checkbox)
                .find('input')
                .check()
                .should('be.checked')
        }) 
    }

    selecionarArquivo(){
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/documentqa.pdf', {force: true})
    }

    preencherTextArea(){
        cy.get('#details').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    }

    adicionarTecnologias(){
        const techs = [
            'Cypress',
            'RestAssured',
            'Postman'
        ]

        techs.forEach((tech)=>{
            cy.get('#technologies')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })
    }

    concordarComTermosDeUso(){
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
    }

    enviarFormulario(){
        cy.contains('button', 'Enviar formulário').click()
    }

    verificarMensagemFinal(){
        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            .should('be.visible')
    }
}
export default new form