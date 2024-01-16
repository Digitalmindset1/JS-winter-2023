/* Multiple Windows:
TC-1: Verify user can open multiple links from facebook homepage
      1. Launch facebook.com  
      2. Click Meta Pay
      3. Click Oculus
      4. Click Instagram
      5. Click Portal
      6. Close all tabs except Instagram
      7. Click 'sign up' on Instagram
      8. Verify "Have an account? Log in" is displayed
      /*/

      describe('', () => {
        it('', async () => {
    
            await browser.url('https://www.facebook.com/');
            // Click Meta Pay
    
            await $('=Meta Pay').click();
    
            // Click Meta Store
            await $('=Meta Store').click();
    
            // Click Meta Quest
            
            await $('=Meta Quest').click();
            // Click Instagram
    
            await $('=Instagram').click();
    
            // Verify on Instagram window: Instagram heading is displayed
    
            // getWindowHandles()
            /* Return ALL window Hadnles opened by Automation code
    
            switchToWindow
            */
           
            const allHandles = await browser.getWindowHandles();
    
            let instagramWindow;

            for (const windowHandle of allHandles) {
            await browser.switchToWindow(windowHandle);
            const title = await browser.getTitle();
            if (title.includes('Instagram')) {
                instagramWindow = windowHandle;
            } else {
                await browser.closeWindow();
            }
        }
    
        
            await browser.pause(2000);

            await browser.switchToWindow(instagramWindow);
            await $('//a[@href="/accounts/emailsignup/"]').click();
            await browser.pause(2000);
    
            const loginText = await $('=Have an account? Log in');
            await browser.waitUntil(async () => await loginText.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: 'Login text element is not displayed'
});

            const text = await loginText.getText();
            console.log(text);

        
        })
    })