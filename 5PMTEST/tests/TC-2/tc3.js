

describe('Empty Messenger Login Flow Verification', () => {
    it('should verify the empty Messenger login flow', () => {
        // 1. Launch Facebook website
        browser.url('https://www.facebook.com/');

        // 2. Click on 'Messenger' link
        const messengerLink = $('[data-testid="Messenger_Button"]');
        messengerLink.click();

        // 3. Wait for the 'Keep me signed in' checkbox to be displayed
        const keepMeSignedInCheckbox = $('[name="persistent"]'); // Assuming the name attribute is used for the checkbox
        keepMeSignedInCheckbox.waitForDisplayed({ timeout: 5000 });

        // 4. Verify 'Keep me signed in' checkbox is NOT selected
        expect(keepMeSignedInCheckbox.isSelected()).toBe(false);

        // 5. Click 'Log In' button
        const loginButton = $('[data-testid="royal_login_button"]');
        loginButton.click();

        // 6. Wait for the "Find your account and log in" link to be displayed
        const findAccountLink = $('[data-testid="find_account_link"]');
        findAccountLink.waitForDisplayed({ timeout: 5000 });

        // 7. Verify link -> "Find your account and log in" is displayed
        expect(findAccountLink.isDisplayed()).toBe(true);

        // 8. Verify 'Continue' button is enabled
        const continueButton = $('[data-testid="continue_button"]');
        expect(continueButton.isEnabled()).toBe(true);

        // 9. Verify 'Keep me signed in' checkbox is NOT selected
        expect(keepMeSignedInCheckbox.isSelected()).toBe(false);

        // 10. Click 'Keep me signed in' checkbox
        keepMeSignedInCheckbox.click();

        // 11. Verify 'Keep me signed in' checkbox is selected
        expect(keepMeSignedInCheckbox.isSelected()).toBe(true);
    });
});
