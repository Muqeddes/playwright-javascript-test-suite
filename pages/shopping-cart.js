export class ShoppingCart {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.getByRole('button', { name: 'checkout' });
    }

    async clickOnCheckout() {
        await this.checkoutButton.click();
    }

}