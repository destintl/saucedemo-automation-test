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
        //expect(page.locator('[data-test="title"]')).toContainText('Products');
        //await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
    }

    async deleteItem(){
        await this.remove_items_sauce_labs_bike.click();
        //expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
        //   await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
    }

    async doCheckout(){
        await this.checkout_button.click();
        //expect(page.locator('[data-test="title"]')).toContainText('Checkout: Your Information');
    }

    async clickDetailProduct(){
        await this.detail_product_title_link.click();
        // await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
        // await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        // await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$29.99');
        // await expect(page.locator('[data-test="remove"]')).toContainText('Remove');
        // await expect(page.locator('[data-test="back-to-products"]')).toContainText('Back to products');

    }
}

