var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://vb-web-qas.azurewebsites.net/#/login').then(function(){
    driver.wait(until.elementLocated(By.id('email')).then(function(email){
        email.click();
        email.sendKeys('rita.kolosok@gmail.com');
        var password = driver.findElement(By.id('password'));
        password.click();
        password.sendKeys('passsssssssssss');

        var login = driver.findElement(By.css('.default vb-band-button'));
        login.click();
    }));
});







/*driver.get('https://vb-web-qas.azurewebsites.net/#/login');

    var email = driver.findElement(By.id('email'));

driver.sleep(5000);

email.click();
email.sendKeys('Rita');
*/








