
import Page from './page';

class productDetails extends Page  {
  
  get applyNow()   { return $('span=Apply Now'); }
  get continue()  { return $('//*[contains(text(),"Continue")]'); }

  waitForproductDetailsPageToLoad () {
    if(!this.applyNow.isDisplayed()){
      this.applyNow.waitForDisplayed(10000);
    }
  }

  waitformodaltoshowUp(){
    if(!this.continue.isDisplayed()){
      this.continue.waitForDisplayed(10000);
    }
  }
}

export default new productDetails();
