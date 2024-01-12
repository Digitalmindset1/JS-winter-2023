/*
TC-1: Verify there are more than 40 links on the facebook.com
      1. Launch facebook.com 
      2. Verify there are more than 40-links
*/

describe('Multiple Elements', () => {
    it('verify there are 46 links on the facebook.com', async () => {

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        await browser.pause(2000);

        // 2. Verify a links

        const allLinks = await $$('<a>');
        const minimumLinks = 40;
        if (allLinks.length <= minimumLinks) {
            throw new Error(`Number of links should be greater than ${minimumLinks}, but found ${allLinks.length}`);
        };
        

    })
})


