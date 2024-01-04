
describe('Basic functions of webDriverio', () => {
    // it('To launch a webpage', async () => {
    //     // 1. Launch weather.com
    //    await browser.url('https://www.weather.com/');

    //     // to pause the execution for x-milliseconds
    //    // 5000 milliseconds = 5 seconds
    //    await browser.pause(5000); 
    // })


    // it('Learning maximizeWindow,getTitle functions', async () => {

    //         /*
    //         1. launch facebook.com
    //         2. maximise the window
    //         3. get the page title
    //         4. verify page

    //         */

    //         // 1. Launch facebook.com
    //         await browser.url('https://www.facebook.com/');

    //         await browser.pause(5000);

    //         // 2. maximixe the window
    //         await browser.maximizeWindow();
    //         await browser.pause(5000);

    //         // 3. Get the page title
    //         const pageTitle = await browser.getTitle();

    //         // 4. Verify 
    //         expect(pageTitle.startsWith('Facebook'), 'Page title does not starts with "Facebook"').to.be.true;

    //         // 5. Get current url
    //         const pageUrl = await browser.getUrl();

    //         // 6. Verify current url contains 'book.co
    //         expect(pageUrl.includes('book.co'), 'Page url does not contain "book.co"').to.be.true;


    //     })
        it.only('Learning getWindowHandle, back, forvard, refresh functions', async () => {
            
            // 1. launch weather.com
            
            await browser.url('https://www.weather.com/');

            // 2. get the windowHandle
            const handle = await browser.getWindowHandle();

            // 3. Verify windowHandlel lenght is greater than 0
            expect(handle.length > 0, 'Window handle lenght is NOT greater than 0').to.be.true;
            // 4. launch facebook.com
            await browser.url ('https://www.facebook.com/');
            // await browser.pause(2000);

            // 5. Launch Amazon.com
            await browser.url('https://www.amazon.com/');
            // await browser.pause(2000);

            // 6. Go to back
            // 7. Go to back
            await browser.back();
            // await browser.pause(2000);
            await browser.back();
            // await browser.pause(2000);

            // 8.  Launch scholastic.com
            await browser.url('https://www.scholastic.com/')
            // await browser.pause(2000);
            
            // 9. Go to back
            await browser.back();
            // await browser.pause(2000);
            
            // 10. Go to forward
            await browser.forward();
            // await browser.pause(2000);

            // 10. Launch zillow.com
            await browser.url('https://www.zillow.com/')
            // await browser.pause(2000);

            // 11. Refresh the webpage
            await browser.refresh();
            // await browser.pause(2000);
        })
    })
    


