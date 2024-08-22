exports.CartPage = class CartPage {

    constructor(page){
        this.page = page
        this.continue_shop_button = page.locator('[data-test="continue-shopping"]')
        this.checkout_button = page.locator('[data-test="checkout"]')
        this.remove_items_sauce_labs_backpack = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.remove_items_sauce_labs_bike = page.locator('[data-test="remove-sauce-labs-bike-light"]')
        this.detail_product_title_link =  page.locator('[data-test="item-4-title-link"]')

    }

    async continueShopping(){
        await this.continue_shop_button.click();
    }

    async deleteItem(){
        await this.remove_items_sauce_labs_bike.click();
    }

    async doCheckout(){
        await this.checkout_button.click();
    }

    async clickDetailProduct(){
        await this.detail_product_title_link.click();
    }
}