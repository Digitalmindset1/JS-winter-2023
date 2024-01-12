/*
TC-2: Verify number of options in Church Chairs is equals to 7
      1. Launch https://classroomessentialsonline.com/  
      2. Move mouse to Church Chairs
      3. Verify there are 7-options in Church Chairs
      */


      describe('Verify number of options in Church Chairs', () => {
        
        it(' equals to 7', async () => {
    
    // 1. Launch facebook.com
    await browser.url('https://classroomessentialsonline.com/');
    await browser.pause(10000);
    await browser.keys(['Escape']);

    
    // 2. Move mouse to Church Chairs
    const churchChairsMenu = await $('//ra-header/div[1]/div[1]/nav[1]/ul[1]/li[2]');
    await churchChairsMenu.moveTo();
    await browser.pause(15000);
    
    // // // 3. Verify there are 7 options in Church Chairs
    const churchChairsOptions = await $$('*=chair');
    const expectedOptions = 7;
    if (churchChairsOptions.length !== expectedOptions) {
    throw new Error(`Number of options in Church Chairs should be ${expectedOptions}, but found ${churchChairsOptions.length}`);
            
        }
    });
})

    

            
            
