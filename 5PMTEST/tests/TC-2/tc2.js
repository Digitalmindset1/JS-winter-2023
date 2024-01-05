
describe('Empty Login Flow Verification', () => {
    it('should verify error on empty login flow', () => {
        // 1. Launch Facebook website
        browser.url('https://www.facebook.com/');
        browser.pause(5000);
        // 2. Click 'Log In' button

        const loginButton = $('[data-testid="royal_login_button"]');
        loginButton.click();
        

        // 3. Wait for the error message to be displayed
        const errorMsg = $('[data-testid="error_message"]');
        errorMsg.waitForDisplayed({ timeout: 5000 });

        // 4. Verify that the error message is displayed
        expect(errorMsg.isDisplayed()).toBe(true);
    });
});
