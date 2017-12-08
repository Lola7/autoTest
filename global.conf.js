module.exports = {
    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 300,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 5000,

    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: true,

    // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 10000,

    'default': {
        myGlobal: function() {
            return 'I\'m a method';
        }
    },

    'test_env': {
        myGlobal: 'test_global',
        beforeEach: function() {

        }
    },

    // External before hook is ran at the beginning of the tests run, before creating the Selenium session
    before: function(done) {
        // run this only for the local-env
        if (this.isLocal) {
            // start the local server
            App.startServer(function() {
                // server listening
                done();
            });
        } else {
            done();
        }
    },

    // External after hook is ran at the very end of the tests run, after closing the Selenium session
    after: function(done) {
        // run this only for the local-env
        if (this.isLocal) {
            // start the local server
            App.stopServer(function() {
                // shutting down
                done();
            });
        } else {
            done();
        }
    },

    // This will be run before each test suite is started
    beforeEach: function(browser, done) {
        // getting the session info
        browser.status(function(result) {
            console.log(result.value);
            done();
        });
    },

    // This will be run after each test suite is finished
    afterEach: function(browser, done) {
        console.log(browser.currentTest);
        done();
    }
};