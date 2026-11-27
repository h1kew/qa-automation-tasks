describe('Signup / Login page (https://automationexercise.com/login)', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/');
        const loginLink = await $('//header//a[@href="/login"]');
        await loginLink.click();
    });

    it('should show error message when logging in with invalid credentials', async () => {
        await expect(browser).toHaveUrl('https://automationexercise.com/login');

        const emailInput = await $('input[data-qa="login-email"]');
        const passwordInput = await $('input[data-qa="login-password"]');
        const loginButton = await $('button[data-qa="login-button"]');

        await emailInput.setValue('invalid_user_test@example.com');
        await passwordInput.setValue('WrongPassword123');
        await loginButton.click();

        const errorMessage = await $('//form[@action="/login"]//p[contains(text(), "incorrect")]');
        await expect(errorMessage).toBeDisplayed();
    });
});
