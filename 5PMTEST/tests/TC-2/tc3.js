

describe('Empty Messenger Login Flow Verification', () => {
    it(' the empty Messenger login flow', async () => {
        // 1. Launch Facebook website
        await browser.url('https://www.facebook.com/');
        await browser.wait(5000);

        // 2. Click on 'Messenger' link
        const messengerLink = await $(//a[contains(text(),'Messenger')]);
        await messengerLink.click();
        await browser.wait(5000);

        // 3. Wait for the 'Keep me signed in' checkbox to be displayed
        const keepMeSignedInCheckbox = await $('//input[@id='u_0_0_3E']');
        await browser.pause(5000);


        // 4. Verify 'Keep me signed in' checkbox is NOT selected
        expect(keepMeSignedInCheckbox.isSelected()).to.be.false;

        // 5. Click 'Log In' button
        const loginButton = await $('//button[@id='loginbutton']');
        loginButton.click();
        await browser.pause(5000);

        // 6. Wait for the "Find your account and log in" link to be displayed
        const findAccountLink = await $('[data-testid="find_account_link"]');
        await browser.pause(5000);

        // 7. Verify link -> "Find your account and log in" is displayed
        expect(findAccountLink.isDisplayed()).to.be.true;

        // 8. Verify 'Continue' button is enabled
        const continueButton = await $('//button[@id='loginbutton']');
        expect(continueButton.isEnabled()).to.be.true;

        // 9. Verify 'Keep me signed in' checkbox is NOT selected
        const keepMeSignedInCheckboxMessenger = await $('//label[contains(text(),'ep me si')]')
        expect(keepMeSignedInCheckboxMessenger.isSelected()).to.be.false;
        await browser.pause(2000)

        // 10. Click 'Keep me signed in' checkbox
        await keepMeSignedInCheckboxMessenger.click();
        await browser.pause(2000)

        // 11. Verify 'Keep me signed in' checkbox is selected
        expect(keepMeSignedInCheckboxMessenger.isSelected()).to.be.true
        await browser.pause(2000);
    });
});
