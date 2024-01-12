// npx wdio run wdio.conf.js --spec ./tests/verification01.js

// const { assert } = require('chai');


/* TC-2: Verify the travelers count on homepage
      1. Launch hotels.com 
      2. Make Adults=4 in Room-1
      3. Click Add another room
      4. Make Adults=3 in Room-2
      5. Click on Done button
      6. Verify total-travalers is equals to the number of adults mentioned in rooms
      */


describe('Verify', () => {
    it('Verify the travellers', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');
        await browser.pause(10000);

        // 2. Make Adults=4 in Room-1
        const createNewAccountButton = await $("//button[contains(text(),'2 travelers, 1 room')]");
        await createNewAccountButton.waitForClickable();
        await createNewAccountButton.click();
        await browser.pause(3000);
        const addAdultsInRoom1 = await $("//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/button[2]/span[1]"); 
        await addAdultsInRoom1.click();
        await browser.pause(3000);
        await addAdultsInRoom1.click();
        await browser.pause(3000);

        // 3. Click Add another room
        const addAnotherRoom = await $("button#traveler_selector_add_room");
        await addAnotherRoom.click();
        await browser.pause(3000);

        // 4. Make Adults=3 in Room-2
        const addAdultsInRoom2 = await $("//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/button[2]/span[1]"); 
        await addAdultsInRoom2.click();
        await browser.pause(5000);
        await addAdultsInRoom2.click();
        await browser.pause(5000);

        // 5. Click on Done button
        const confirmRoom2 = await $("//button[@id='traveler_selector_done_button']");
        await confirmRoom2.click();
        await browser.pause(5000);

        // // 6. Verify total-travelers is equals to the number of adults mentioned in rooms
        const verifyTotalTravelers = await $("button*=7 travelers, 2 rooms");
        await expect(verifyTotalTravelers).toBeDisplayed();


        // const isDisplayedTotalTravelers = await verifyTotalTravelers.isDisplayed();
        // console.log(`\n\nisDisplayedTotalTravelers -> ${isDisplayedTotalTravelers}`);
        // await browser.pause(5000);

        // expect(isDisplayedTotalTravelers, 'Total travelers is displayed correctly').to.be.true;
        // assert.isTrue(isDisplayedTotalTravelers, 'Total travelers is NOT displayed correctly');
    });
});
