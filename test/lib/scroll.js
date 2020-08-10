var scrollMap = require('./global').scrollMap;

module.exports ={
    scroll : function scroll(iteration){
        var scroll = browser.getWindowSize();
        scrollMap.heightMin = parseInt(0.10 * scroll.height);
        scrollMap.heightMax = parseInt(0.80 * scroll.height);
        scrollMap.width = parseInt(0.50 * scroll.width);

        for (var i=0;i<=iteration;i++){
            browser.touchAction([
                { action: 'longPress', x: scrollMap.width, y: scrollMap.heightMax},
                { action: 'moveTo', x: scrollMap.width, y: scrollMap.heightMin},
                { action: 'release' }
                ]);   
            driver.pause(5000);
        }   
    },

    scrollup : function scrollup(iteration){
        var scroll = browser.getWindowSize();
        scrollMap.heightMin = parseInt(0.20 * scroll.height);
        scrollMap.heightMax = parseInt(0.80 * scroll.height);
        scrollMap.width = parseInt(0.50 * scroll.width);

        for (var i=0;i<=iteration;i++){
            browser.touchAction([
                { action: 'longPress', x: scrollMap.width, y: scrollMap.heightMin},
                { action: 'moveTo', x: scrollMap.width, y: scrollMap.heightMax},
                { action: 'release' }
                ]);    
            driver.pause(5000);
        }   
    }
}