describe('Cart page (https://automationexercise.com/view_cart)', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/');
        const cartLink = await $('//header//a[@href="/view_cart"]');
        await cartLink.click();
    });

    it('should open Cart page and show empty cart message', async () => {
        await expect(browser).toHaveUrl('https://automationexercise.com/view_cart');

        const emptyCartText = await $('#empty_cart');
        await expect(emptyCartText).toBeDisplayed();
        await expect(emptyCartText).toHaveText(/Cart is empty!/);
    });
});
