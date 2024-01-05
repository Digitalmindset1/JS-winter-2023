/* 1. TC-1: Verify current temp is less than or equals to feel-like temp
      1. Launch https://www.accuweather.com/ 
      2. Verify current-temp is in between 45 and 55
      */

     
      describe('Temperature Verification', () => {
        it('should verify current temp is less than or equals to feel-like temp', async () => {
            // 1. Launch the AccuWeather website
            await browser.url('https://www.accuweather.com/');
            await browser.pause(5000);
    
            // 2. Get the current temperature and feel-like temperature
            const currentTemp = await parseInt($('#current-temp').getText(), 10);
            const feelLikeTemp = await parseInt($('#feel-like-temp').getText(), 10);
    
            // 3. Verify that the current temperature is within the specified range (45 to 55)
            expect(currentTemp).toBeGreaterThanOrEqual(45);
            expect(currentTemp).toBeLessThanOrEqual(55);
    
            // Verify that the current temperature is less than or equal to feel-like temperature
            expect(currentTemp).toBeLessThanOrEqual(feelLikeTemp);
            await browser.pause(5000);
        });
    });
    

      