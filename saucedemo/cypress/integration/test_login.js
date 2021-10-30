context('testlogin_saucedemo', () => {

    //Tidak mengisi username & password langsung mengklik button login
//    it('test_case1',() =>{
//     cy.visit('https://www.saucedemo.com')
//     cy.get('#login-button').click()
// })

    // Mengisi username dengan huruf kapital dan mengisi password dengan benar
//    it('test_case2',() =>{
//         cy.visit('https://www.saucedemo.com')
//         cy.get('#user-name').type('STANDARD_USER')
//         cy.get('#password').type('secret_sauce')
//         cy.get('#login-button').click()
//     })

    // Mengisi username dengan benar dan mengisi password dengan huruf kapital 
//     it('test_cas3',() =>{
//     cy.visit('https://www.saucedemo.com')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('SECRET_SAUCE')
//     cy.get('#login-button').click()
// })

    // Mengisi username dengan benar dan mengisi password secara acak
//     it('test_cas4',() =>{
//     cy.visit('https://www.saucedemo.com')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('ppl_uts')
//     cy.get('#login-button').click()
// })

  // Mengisi username dengan benar dan mengisi password secara benar
   it('test_case5',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

})