const { expect } = require("chai");

describe('Basic xpath locator strategy', () => {

it('Verify forgot password on messenger takes user to Find Your account', async () => {
    // 1. Launch Facebook.com
    await browser.url('https://www.facebook.com/');
    await browser.pause(5000);
    // 2. Click on Messenger link 
    const messengerLinkElement = await $('//a[@title="Check out Messenger."]');
    await messengerLinkElement.click();
    await browser.pause(5000);

    // 3. Click on 'forgot your password'
    const fypLinkElements = await $('//a[contains(@href,"/recover/initiate")]');
    await fypLinkElements.click(); 
    await browser.pause(5000);
    // 4. Verify user lands
    const fyaHeaderElement = await $('//h2[starts-with(@class, "uihe")]');
    const isFyaHeaderDisplayed = await fyaHeaderElement.isDisplayed();
    expect(isFyaHeaderDisplayed), 'Find your account header is NOT displayed'.to.be.true;
    await browser.pause(5000);

})
})