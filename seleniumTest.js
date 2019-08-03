const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')

chrome.setDefaultService(new chrome.ServiceBuilder('/Users/simon.gaviria/Desktop/chrome web driver/chromedriver').build());

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
})