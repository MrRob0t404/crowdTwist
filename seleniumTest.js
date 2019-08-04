// Import requirement packages
require('chromedriver');

const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');
const TIMEOUT = 10000

describe('CrowdTwist Test', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // For the element ID, you can find it by open the browser inspect feature.
    it('CrowdTwist Test', async function () {
        // Load the page
        await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        // Find the search box by id
        await driver.findElement(By.className('is_required validate account_input form-control')).click();
        // Enter keywords and click enter
        // Modify email if user is already registered to the site
        await driver.findElement(By.className('is_required validate account_input form-control')).sendKeys('simon4@example.com', Key.RETURN);
        await driver.findElement(By.id('SubmitCreate')).click();

        // Create implicit wait since website has laoding animation 
        await driver.manage().setTimeouts({
            implicit: TIMEOUT, pageLoad:
                TIMEOUT, script: TIMEOUT
        })

        // Stale element handling 
        let staleElement = false;
        while (!staleElement) {
            try {
                driver.FindElement(By.id('customer_firstname')).Click();
                staleElement = false;

            } catch (e) {
                staleElement = true;
                // return e
                console.log(true)
            }
        }

        // Send and fill out required information to complete registration 
        driver.findElement(By.id('customer_firstname')).click();
        driver.findElement(By.id('customer_firstname')).sendKeys('simon');

        driver.findElement(By.id('customer_lastname')).click();
        driver.findElement(By.id('customer_lastname')).sendKeys('gaviria');

        driver.findElement(By.id('passwd')).click();
        driver.findElement(By.id('passwd')).sendKeys('1234567890');

        driver.findElement(By.id('address1')).click();
        driver.findElement(By.id('address1')).sendKeys('123 W 70th');

        driver.findElement(By.id('city')).click();
        driver.findElement(By.id('city')).sendKeys('New York');

        driver.findElement(By.id('id_state')).click();
        driver.findElement(By.id('id_state')).sendKeys('New York')

        driver.findElement(By.id('postcode')).click();
        driver.findElement(By.id('postcode')).sendKeys('10001');

        driver.findElement(By.id('phone_mobile')).click();
        driver.findElement(By.id('phone_mobile')).sendKeys('1234567890');

        driver.findElement(By.id('submitAccount')).click();

        // Implicit wait so account page can load 
        await driver.manage().setTimeouts({
            implicit: TIMEOUT, pageLoad:
                TIMEOUT, script: TIMEOUT
        })

        // Assert we are on the correct page for when registration is complete 
        let title = await driver.getTitle();
        assert.equal(title, 'My account - My Store');
    });
    // close the browser after running tests
    after(() => driver && driver.quit());
})
