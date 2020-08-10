import { Given} from 'cucumber';
import productListing from '../pageobjects/productListing';
import productDetails from '../pageobjects/productDetails';
import step1 from '../pageobjects/step1';


// *** belongs to Yahoo serch feature
Given(/^I am on the Leap landing Page$/, function () {
  productListing.open();
  //browser.maximizeWindow();
  productListing.waitForproductListingPageToLoad();
});


