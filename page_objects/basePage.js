const webdriver = require("selenium-webdriver");

const {Builder, By, Key, until} =  require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
  constructor(){
    global.driver = driver;
  }

  goToUrl(url){
    driver.get(url);
  }

  quit(){
    driver.quit();
  }
}

module.exports = BasePage;
