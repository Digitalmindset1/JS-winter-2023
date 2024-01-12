
describe('Empty Login Flow Verification', () => {
    it('should verify error on empty login flow',async () => {
        // 1. Launch Facebook website
        await browser.url('https://www.facebook.com/');
        await browser.pause(5000);
        // 2. Click 'Log In' button

        const loginButton = await $('[data-testid="royal_login_button"]');
        await loginButton.click();
        

        // 3. Wait for the error message to be displayed
        const errorMsg = await $('[data-testid="error_message"]');
        await errorMsg.waitForDisplayed({ timeout: 5000 });

        // 4. Verify that the error message is displayed
        expect(errorMsg.isDisplayed()).to.be.true;
    });
});
