

var calcPage = require('../page_objects/calculatorPage');
var baseurl = 'https://www.google.co.il/search?q=google+calculator';
var assert = require('assert');

const mathAddTest = '10+5'; //pass the math as a string, works with add
const expectBtnNm = 10;
const expectBtn = 43;

function add (a,b) { return a+b }

describe('Google calc Test', function(){
    this.timeout(50000);
    calcPage.goToUrl(baseurl);

    beforeEach(function(){
    });

    afterEach(function(){
    });
    it('count Buttons', async () =>{

  let allButtons = await calcPage.countButtons();
   let onlyNumbers = allButtons[1];
       console.log('Total buttons :' + allButtons[0]);
       console.log('Buttons with numbers :' + onlyNumbers);
       assert.equal(allButtons[0],expectBtn);
       assert.equal(onlyNumbers, expectBtnNm);
    });

    it('calculate add test', async () => {

       let toTest = await calcPage.enterCalc(mathAddTest);
       let getMath = mathAddTest.split('+').map(x=>+x);
        assert.equal(+toTest,add (getMath[0],getMath[1]));
        await driver.quit();
    })
})
