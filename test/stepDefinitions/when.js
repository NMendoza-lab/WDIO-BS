import {Given, When, Then} from 'cucumber';
import productListing from '../pageobjects/productListing';
import productDetails from '../pageobjects/productDetails';
import step1 from '../pageobjects/step1';



When(/^I click on "([^"]*)"$/, function (product) {
    var productname = $(`.product-card__name=${product}`);
    productname.click();

});

When(/^I click on apply now on the product details page$/, function () {
    productDetails.waitForproductDetailsPageToLoad();
    productDetails.applyNow.click();
    
});


