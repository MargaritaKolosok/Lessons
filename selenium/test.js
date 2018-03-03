var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://www.thetestroom.com/webapp');

//driver.findElement(By.id('contact_link')).click();
//driver.sleep(5000);
//driver.findElement(By.name('name_field')).sendKeys('Rita');
//driver.findElement(By.name('address_field')).sendKeys('bat cave');

driver.findElement(By.id('home_link')).then(function(link){
    link.getText().then(function(text){
        console.log(text);
    });
});

