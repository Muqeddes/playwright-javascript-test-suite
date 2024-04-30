export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.zipCode = page.getByPlaceholder("Zip/Postal Code");
        this.continueButton = page.getByRole('button', { name: "continue" });
        this.finishButton = page.getByRole('button', { name: "finish" });
        this.successMsg = page.getByText('Thank you for your order!');

    }
    async fillShippingInfo(firstname, lastname, zipcode) {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.zipCode.fill(zipcode);
        await this.continueButton.click();
        await this.finishButton.click();
    }
}