describe('Contact Us page (https://automationexercise.com/contact_us)', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/');
        const contactLink = await $('//header//a[@href="/contact_us"]');
        await contactLink.click();
    });

    it('should open Contact Us page and display GET IN TOUCH form', async () => {
        await expect(browser).toHaveUrl('https://automationexercise.com/contact_us');

        const formHeading = await $('div.contact-form h2.title');
        await expect(formHeading).toBeDisplayed();
        await expect(formHeading).toHaveText('GET IN TOUCH');

        const submitBtn = await $('input[data-qa="submit-button"]');
        await expect(submitBtn).toBeDisplayed();
    });
});
