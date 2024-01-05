const { expect } = require("chai");

describe('Basic locator strategy', () => {
    it('Verify user can enter login credentials and click button', async () => {
        // 1. launc facebook.com
        await browser.url('https://www.facebook.com/');

        await browser.pause(3000);
        // 2. Enter 'abc@test' in login email
        const loginEmailElement = await $('#email');
        loginEmailElement.setValue('abc@test.com');
        await browser.pause(3000);

        // 3. Enter "test@1234" in login 
        const loginPassElement = await $('input[name=pass]');
        loginPassElement.setValue ('test@1234');
        await browser.pause(3000);
        // 4. click the button 'login'
        const loginBtnElement = await $('button=Log In');
        loginBtnElement.click();
        await browser.pause(5000);
    })

    it.only('Verify forgot password on messenger takes user to Find Your account', async () => {
        // 1. Launch Facebook.com
        await browser.url('https://www.facebook.com/')
        await browser.pause(5000);
        // 2. Click on Messenger link 
        const messengerLinkElement = await $('=Messenger');
        await messengerLinkElement.click();
        await browser.pause(5000);

        // 3. Click on 'forgot your password'
        const fypLinkElements = await $('=got your');
        await fypLinkElements.click(); 
        await browser.pause(5000);
        // 4. Verify user lands
        const fyaHeaderElement = await $('.uiHeaderTitle');
        const isFyaHeaderDisplayed = await fyaHeaderElement.isDisplayed();
        expect(isFyaHeaderDisplayed), 'Find your account header is NOT displayed'.to.be.true;
        await browser.pause(5000);

    })
})

