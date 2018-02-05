// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
  	var logEmail = element(by.id('email'));
  	var logPassword = element(by.id('password'));
  	var loginButton = element(by.className('default vb-band-button'));

  	it('user should login succesfully', function(){

  		 browser.get('https://vb-web-qas.azurewebsites.net');

  		 logEmail.sendKeys('m.kolosok@gmail.com');
  		 logPassword.sendKeys('Password1!');

  		 loginButton.click();

    expect(browser.getLocationAbsUrl()).toBe('https://vb-web-qas.azurewebsites.net/#/tenants');

  	});

   
  });
});