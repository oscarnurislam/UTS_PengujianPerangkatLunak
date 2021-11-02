context('Check_Payment_Saucedemo', () => {
    //Mengakses SauceDemo, menambahkan barang ke keranjang, dan masuk ke halaman keranjang
    it('test_case1_ClickJudul',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_link').click()

        //Menekan tombol Checkout sampai bisa pindah ke halaman selanjutnya
        cy.get('[data-test=checkout]').click()

    })

    // Input firts name, last name, dan ZIP/Postal Code dengan benar
    it('test_case2_InputTrueInformation', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_link').click()

        //Menekan tombol Checkout sampai bisa pindah ke halaman selanjutnya
        cy.get('[data-test=checkout]').click()

        cy.get('[data-test=firstName]').type('Yocki')
        cy.get('[data-test=lastName]').type('Febrianto')
        cy.get('[data-test=postalCode]').type('66174')
        cy.get('[data-test=continue]').click()
    })

    it('test_case3_InputInformationWrongLastName', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_link').click()

        //Menekan tombol Checkout sampai bisa pindah ke halaman selanjutnya
        cy.get('[data-test=checkout]').click()

        cy.get('[data-test=firstName]').type('Yocki')
        // cy.get('[data-test=lastName]').type('Febrianto')
        cy.get('[data-test=postalCode]').type('66174')
        cy.get('[data-test=continue]').click()

    })

    it('test_case4_InputInformationWrongInZIPCode', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_link').click()

        //Menekan tombol Checkout sampai bisa pindah ke halaman selanjutnya
        cy.get('[data-test=checkout]').click()

        cy.get('[data-test=firstName]').type('Yocki')
        cy.get('[data-test=lastName]').type('Febrianto')
        // cy.get('[data-test=postalCode]').type('66174')
        cy.get('[data-test=continue]').click()
    })

    it('test_case5_ClickContinueButton', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_link').click()

        //Menekan tombol Checkout sampai bisa pindah ke halaman selanjutnya
        cy.get('[data-test=checkout]').click()

        cy.get('[data-test=firstName]').type('Yocki')
        cy.get('[data-test=lastName]').type('Febrianto')
        cy.get('[data-test=postalCode]').type('66174')
        cy.get('[data-test=continue]').click()

        cy.get('[data-test=finish]').click()
    })
})