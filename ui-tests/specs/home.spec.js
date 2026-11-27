describe('Home page (https://automationexercise.com/)', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/');
    });

    it('should display logo and main navigation menu on Home page', async () => {
        await expect(browser).toHaveUrl('https://automationexercise.com/');
        await expect(browser).toHaveTitle(/Automation Exercise/);

        const logo = await $('.logo img');
        await expect(logo).toBeDisplayed();

        const navMenu = await $('ul.navbar-nav');
        await expect(navMenu).toBeDisplayed();
    });
});
