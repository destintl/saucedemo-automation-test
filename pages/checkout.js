exports.CheckoutPage = class CheckoutPage{

    constructor(page){
        this.page = page
        this.firstname_textbox = page.locator('[data-test="firstName"]')
        this.lastname_textbox = page.locator('[data-test="lastName"]')
        this.postalCode_textbox = page.locator('[data-test="postalCode"]')
        this.continue_button = page.locator('[data-test="continue"]')
        this.cancel_button = page.locator('[data-test="cancel"]')
        this.finish_button =  page.locator('[data-test="finish"]')
        this.back_to_home_button = page.locator('[data-test="back-to-products"]')
    }

    async clickContinueButton(){
        await this.continue_button.click();
    }

    async inputFirstName(fistname){
        await this.firstname_textbox.fill(fistname)
    }

    async inputLastName(lastname){
        await this.lastname_textbox.fill(lastname)
    }
    async inputPostalCode(postalCode){
        await this.postalCode_textbox.fill(postalCode)
    }

    async finishOder(){
        await this.finish_button.click();
    }

    async clickCancelCheckout(){
        await this.cancel_button.click();
    }

    async backToHome(){
        await this.back_to_home_button.click();
    }
}
