var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var page = driver.get('https://vb-web-qas.azurewebsites.net/#/login');

driver.wait(function() {
    return page.then(function() {
        return driver.findElement(By.name('email')).isDisplayed();
    });
}, 15000);

var name = driver.findElement(By.name('email'));

name.click();
name.sendKeys('Rita');




