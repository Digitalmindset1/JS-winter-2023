describe('Autosuggestion scenario', () => {
    it('verify suer can select value from auto-suggestion', async () => {

    // 1. Launch hotles.com

    await browser.url('https://www.hotels.com');

    await browser.pause(5000);

    // 2. Enter "new" in the destination
    await $('//button[@data-stid="destination_form_field-menu-trigger"]').click();
    await browser.pause(5000);
    await $('#destination_form_field').setValue('new');
    await browser.pause(5000);


    // 3. Select "Newport Beach " from auto-suggestion
    const allSuggestions = await $$('//buttom[@data-stid="destination_form_field-result-item-button"]');

    for(const suggestion of allSuggestions) {
        const suggestionText = await suggestion.getAttribute('aria-label');
        if (suggestionText.startsWith('Newport Beach') === 0) {
            await suggestion.click();
            break;
        }
    }
    await browser.pause(10000);

})
})


