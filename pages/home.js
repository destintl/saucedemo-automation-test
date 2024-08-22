exports.HomePage = class HomePage {

    constructor(page){
        this.page = page
        this.menu_button = page.getByRole('button', { name: 'Open Menu' })
        this.logout_button = page.locator('[id="react-burger-menu-btn"]')
        this.cart_button = page.locator('[data-test="shopping-cart-link"]')
        this.add_to_cart_backpack_button = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.add_to_cart_bike_light_button = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.sort_dropdown = page.locator ('[data-test="product-sort-container"]')
    }

    async doLogout(){
        await this.menu_button.click();
        await this.logout_button.click();
    }

    async addToCart(){
        await this.add_to_cart_backpack_button.click();
        await this.add_to_cart_bike_light_button.click();
    }

    async sortingProductBy(value){
        await this.sort_dropdown.selectOption(value);
    }

    async clickCartButton() {
        await this.cart_button.click();
    }
    
}