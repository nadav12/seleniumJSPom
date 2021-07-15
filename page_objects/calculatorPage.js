const {Builder, By, Key, until} =  require('selenium-webdriver');
var BasePage = require('../page_objects/basePage');
var webdriver =  require('selenium-webdriver');

class CalculatorPage extends BasePage {

async countButtons(){
  try {

      let calc = await driver.findElement(By.css('[id=rso] :first-child'));
      let calcButtons = await calc.findElements(By.css('div[role=button]'));

      let buttons = [];

    for(let b of calcButtons) {
        buttons.push(await b.getText())
        }

      const regex = /^[0-9]s*$/;
      const numButtons = buttons.filter(button => button.match(regex));
         return [buttons.length, numButtons.length];

}
catch(err){
  console.log(err);
}
}

async enterCalc(mathtest){
try {
   for (let char of mathtest)
  {
   await  driver.findElement(By.xpath("//*[text() = '"+char+"']")).click();
  }

    let equal = await driver.findElement(By.xpath("//*[text() = '=']")).click();
    let score = await driver.findElement(By.id('cwos')).getText();

    return score;
  }
  catch (err){
    console.log(err);
    }


  }


}
module.exports = new CalculatorPage();
