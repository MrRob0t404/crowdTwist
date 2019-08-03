// Import requirement packages
require('chromedriver');

const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

describe('CrowdTwist Test', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('CrowdTwist Test', async function () {
        // Load the page
        await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        // Find the search box by id
        await driver.findElement(By.className('is_required validate account_input form-control')).click();
        // Enter keywords and click enter
        await driver.findElement(By.className('is_required validate account_input form-control')).sendKeys('simon@example.com', Key.RETURN);
        await driver.findElement(By.id('SubmitCreate')).click();

        driver.wait(function () {
            return driver.isElementPresent(driver.findElement(By.id("id_gender1"))).then(el => {
                return el.click();
            }, 5000);
        })

        // driver.wait(function () {
        //     return driver.isElementPresent(driver.findElement(By.id("customer_firstname"))).then(el => {
        //         return el.sendKeys('simon', Key.RETURN);
        //     }, 5000);
        // })

        // //Click on gender 
        // await driver.findElement(By.id('id_gender1')).click();

        // //Write docs for this 
        // await driver.findElement(By.id('customer_firstname')).click();
        // await driver.findElement(By.id('customer_firstname')).sendKeys('simon', Key.RETURN);

        // await driver.findElement(By.id('customer_lastname')).click();
        // await driver.findElement(By.id('customer_lastname')).sendKeys('gaviria', Key.RETURN);

        // await driver.findElement(By.id('email')).click();
        // await driver.findElement(By.id('email')).sendKeys('simon@example.com', Key.RETURN);

        // await driver.findElement(By.id('passwd')).click();
        // await driver.findElement(By.id('passwd')).sendKeys('12345678', Key.RETURN);






        // Wait for the results box by class
        await driver.wait(until.elementLocated(By.id('id_gender1')), 10000);
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, 'Login - My Store');
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
})