import { Then } from 'cucumber';
import productListing from '../pageobjects/productListing';
import productDetails from '../pageobjects/productDetails';
import step1 from '../pageobjects/step1';


Then(/^I allow location access$/, function () {
  browser.pause(3000);
  browser.getActiveElement();
  productDetails.continue.click();
  browser.pause(3000);
  // console.log(browser.getContexts());
  driver.switchContext("NATIVE_APP");
  $('//android.widget.Button[@text="Allow"]').click();
  driver.switchContext("CHROMIUM");
});

Then(/^I wait for step 1 page to load$/, function () {
  step1.waitForstep1PageToLoad();
  browser.pause(10000);
  console.log("*******************Voila!!!!**********************");

});
