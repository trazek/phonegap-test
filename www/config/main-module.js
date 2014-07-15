/************************************************************** 
Define the main module for the app 
***************************************************************/
var app = angular.module("checkPlease", ['ngRoute', 'onsen.directives']);


/****************************************************************************************
Use $script.js to load in any files related to the give route before actually routing
******************************************************************************************/
app.lazyControllerLoader = function ($q, $rootScope, $route, MainControllers) {
    var controllerFiles;
    for (var key in MainControllers) {
        if (MainControllers[key].name == $route.current.controller) {
            controllerFiles = MainControllers[key].files;
            break;
        }
    }
    try {
        var deferred = $q.defer();
        $script(controllerFiles, function () {
            $rootScope.$apply(function () {
                deferred.resolve("Loading all files: ", controllerFiles);
            });
        });
        return deferred.promise;
    } catch (e) {
        console.log("Controller file not available: ", e);
    }
};


/********************************************************************
Setup the information for main controllers
*********************************************************************/
app.constant("MainControllers", {

});