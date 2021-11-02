context('Check_ProductDescription_saucedemo', () => {
    // mengakses saucedemo
    it('test_case1_ClickJudul',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

    })

    //menambahkan barang pesanan
    it('test_case1_click_AddToChar',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#Add to chart for image > . iventory_item').click()
     })

    // meghapus barang pesanan
    it('test_case2_remove_item',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#Add to remove for image > . iventory_item').click()
     })

     // check out barang
     it('test_case3_Check_OutBarang',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#check out barang  > . iventory_item').click()
        cy.get('#input first name  > . iventory_item').click()
        cy.get('#input last name   > . iventory_item').click()
        cy.get('#input postal code > . iventory_item').click()

     })

     // menghilangkan barang yang sudah di check out
     it('test_case4_remove_item',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#Add to remove for order > . iventory_item').click()
     })

    }
)
