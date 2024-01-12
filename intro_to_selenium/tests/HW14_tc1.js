/*
TC-1: Verify the current date is select by default in Sign Up dropdown
      1. Launch facebook.com 
      2. Click on Create New Account button
      3. Verify current date is displayed in the birthdate dropdowns.

    */

const { expect } = require("chai");


describe('Dropdown the actual date as a birthday', () => {

    it('Select Jan 5 2023 as birthday', async () => {
        await browser.url('https://facebook.com/');
        await browser.pause(5000);

    // 2. Click on Create New Account button
        const createNewAccountButton = await $('//a[@id=', u_0_0_to, ']');
        await createNewAccountButton.click();
        await browser.pause(5000);

    // 3. Verify current date is displayed in the birthdate dropdowns.
        const monthDropdownElement = await $('//select[@id=', month, ']');
        monthDropdownElement.selectByIndex(0);

        await browser.pause(3000);
        const dayDropdownElement = await $('//select[@id=', day, ']');
        dayDropdownElement.selectByAttribute('value', '5');
        await browser.pause(3000);

        const dayDropdownYear = await $('//select[@id=', year, ']');
        dayDropdownElement.selectByAttribute('value', '2023');
        await browser.pause(3000);

        });


})


