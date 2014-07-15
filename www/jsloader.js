//Load any and all dependancies to the main module
$script(['config/main-module.js'], "mainModule");

$script.ready("mainModule", function () {
    $script(['app.js'], function () {
        angular.bootstrap(document, ['checkPlease']);
    });
});