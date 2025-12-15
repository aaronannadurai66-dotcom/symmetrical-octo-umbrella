// App Initialization using IIFE
(function () {
    console.log("App is initializing...");

    // App configuration
    const appName = "My Web App";
    const version = "1.0.0";

    // Startup tasks
    function init() {
        console.log(`Welcome to ${appName}`);
        console.log(`Version: ${version}`);
    }

    // Run initialization
    init();
})();
