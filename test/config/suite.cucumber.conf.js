const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {

    specs: [
        './test/features/*.feature',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,

    user: 'nathanielsamsonm1',
    key: 'BX8aaUvgf6LqLWpzhJcY',
    
    
    services: ['browserstack'],
    

    capabilities:[
      {
        name: 'laep_mobile',
        build: 'webdriverIO-browserstack',
        browserstackLocal: false,
        preferScenarioName: true,
        os_version: '9.0',
        device: 'Samsung Galaxy S10',
        real_mobile: true,
        debug: true,
        baseUrl: 'https://leap.axisbank.com'
        
        
      }
    ],
    
    sync: true,
    logLevel: "debug",    
    coloredLogs: true,     
    screenshotPath: './test/reports/errorShots/',  
    
    baseUrl: 'https://leap.axisbank.com',
    waitforTimeout: 90000,            
    connectionRetryTimeout: 90000,    
    connectionRetryCount: 3,          

    reporters: [
      'spec',
      ['junit', {
          outputDir: './test/reports/junit-results/',
          outputFileFormat: function(opts) { // optional
              return `results-${opts.cid}.${opts.capabilities}.xml`
          }
        }
      ],

      ['allure', {
          outputDir: './test/reports/allure-results/',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
        }
      ],
    ],

    //services: ['selenium-standalone'],
    
    framework: 'cucumber',

    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./test/stepDefinitions/given.js', './test/stepDefinitions/when.js', './test/stepDefinitions/then.js'],  
        backtrace: true,    
        //compiler: ['js:babel-core/register'], 
        compiler: [], 
        failAmbiguousDefinitions: true,   
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        ignoreUndefinedDefinitions: false,    // <boolean> Enable this config to treat undefined definitions as warnings
        name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: false,    // <boolean> hide step definition snippets for pending steps
        source: false,      // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: true,       // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
        timeout: defaultTimeoutInterval,    // <number> timeout for step definitions
        tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
        snippetSyntax: undefined,           // <string> specify a custom snippet syntax
    },

    //
    // =====
    // Hooks
    // =====
    // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    before: function() {
      /**
       * Setup the Chai assertion framework
       */
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
    //
    // after: function (capabilities, specs) {
    //   //do your stuff
    // },
    //
    // beforeStep: function (stepResult) {
    //     //do your stuff
    // },
    //
    // afterStep: function (stepResult) {
    //     //do your stuff
    // },
    //
    //
    // beforeFeature: function (feature) {
    //     //do your stuff
    // },
    //
    // afterFeature: function (feature) {
    //     //do your stuff
    // },
    //
    // beforeScenario: function (scenario) {
    //     //do your stuff
    // },
    // afterScenario: function (scenarioResult) {
    //     //do your stuff
    // },
};
