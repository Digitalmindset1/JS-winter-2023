describe('Verify navigation functionalities', () => {
    it('should go back and forward as expected', () => {
        // Launch amazon.com and verify page title
        browser.url('https://www.amazon.com/');
        expect(browser).toHaveTitleContaining('Spend less. Smile more.');

        // Launch hotels.com and verify URL
        browser.url('https://www.hotels.com/');
        expect(browser).toHaveUrlContaining('hotels.com');

        // Go back and verify URL
        browser.back();
        expect(browser).toHaveUrlContaining('amazon.com');

        // Go forward and verify page title
        browser.forward();
        expect(browser).toHaveTitleContaining('Deals & Discounts for Hotel Reservations');
    });
});
