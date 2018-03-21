var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://vb-web-qas.azurewebsites.net/#/login');


const email = driver.wait(
    webdriver.until.elementLocated(By.id('email')),
    20000
);

email.click();
email.sendKeys('rita.kolosok@gmail.com');

const password = driver.wait(
    webdriver.until.elementLocated(By.id('password')),
    20000
);

password.click();
password.sendKeys('Password1!').then(function(){
    var loginButton = driver.wait(
        webdriver.until.elementLocated(By.id('band-btn-login')),
        20000
    );
    loginButton.click();
    });

driver.










