const { expect } = require("chai");

describe('Advanced xpath locator using', () => {
    it('Verify user can select gender on sign up page'), async () => {
        
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');
        await browser.pause(5000);

        // 2. Click on 'Create new acoount'
        const createNewAccount = await $('//form[@data-testedid="royal_login_form"]//a(@data-testid]');
        await createNewAccount.click();
        await browser.pause(5000);

        // 3. Select "male" gender
        const maleGender = await $('//label[text()="Male"]/following-sibling::input');
        await maleGender.click();
        await browser.pause(5000);
        

        // 4. Verify male gender is selected
        const maleGenderAfterClick = await $('//label[text()="Male"]/following-sibling::input');
        expect(maleGenderAfterClick.isSelected(),'Male radio button is NOT selected').to.be.true;
        await browser.pause(5000);

    };
});


