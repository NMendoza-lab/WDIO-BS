
import Page from './page';

class step1 extends Page  {
  
  get step1pageload()   { return $('//*[contains(text(),"Get Started")]'); } 

  waitForstep1PageToLoad () {
    if(!this.step1pageload.isDisplayed()){
      this.step1pageload.waitForDisplayed(10000);
    }
  }
}

export default new step1();
