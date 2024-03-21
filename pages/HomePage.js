export class HomePage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator("span.title");
        this.products = page.locator(".inventory_item");
        this.shoppingCartIcon = page.locator(".shopping_cart_badge");
        this.shoppingCartLink = page.locator(".shopping_cart_link");


    }

    async addProduct(productName) {
        await this.products.filter({ hasText: productName }).getByRole('button').click();
        console.log(productName + " is added to the shopping cart!!")
    }

    async addedItemCount() {
        const itemNumber = await this.shoppingCartIcon.textContent();
        console.log(itemNumber + " item(s) in the shopping cart!");
        if (itemNumber > 0) {
            return true;
        } else
            return false;
    }

    async clickOnShoppingCart() {
        await this.shoppingCartLink.click();
    }


}