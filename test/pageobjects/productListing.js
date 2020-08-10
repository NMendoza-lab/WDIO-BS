
import Page from './page';

class productListing extends Page  {
  
  get productName()   { return $('.product-card__name'); }

  open () {
    super.open('https://leap.axisbank.com/'); 
  }

  waitForproductListingPageToLoad () {
    if(!this.productName.isDisplayed()){
      this.productName.waitForDisplayed(10000);
    }
  }
}

export default new productListing();
