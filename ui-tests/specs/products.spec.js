describe('Products page (https://automationexercise.com/products)', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/');
        const productsLink = await $('//header//a[@href="/products"]');
        await productsLink.click();
    });

    it('should open Products page and verify ALL PRODUCTS heading', async () => {
        await expect(browser).toHaveUrl('https://automationexercise.com/products');

        const pageTitle = await $('h2.title.text-center');
        await expect(pageTitle).toBeDisplayed();
        await expect(pageTitle).toHaveText('ALL PRODUCTS');
    });

    it('should search for a product and display matching results', async () => {
        const searchInput = await $('#search_product');
        const searchButton = await $('#submit_search');

        await searchInput.setValue('Tshirt');
        await searchButton.click();

        const searchedTitle = await $('//h2[contains(@class, "title") and contains(text(), "Searched Products")]');
        await expect(searchedTitle).toBeDisplayed();

        const productCards = await $$('.features_items .product-image-wrapper');
        await expect(productCards.length).toBeGreaterThan(0);
    });
});
