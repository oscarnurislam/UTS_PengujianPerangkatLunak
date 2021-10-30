context('Check_ProductDescription_saucedemo', () => {
   it('test_case1_ClickJudul',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.url().should('include', '/inventory-item.html?id=4')
    })

    it('test_case2_ClickImage',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.url().should('include', '/inventory-item.html?id=4')
    })

    it('test_case3_ClickDescriptionText',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').click()
        cy.url().should('include', '/inventory')
    })

    it('test_case4_ClickBackInDescriptionPage',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test=back-to-products]').click()
        cy.url().should('include', '/inventory')
    })

    it('test_case5_ClickButtonAddtoCart',() =>{
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
    })





})