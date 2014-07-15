'use strict';

app.config(["$routeProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", "MainControllers",
    function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, MainControllers) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.provide = $provide;

        angular.forEach(MainControllers, function (ctrl) {
            $routeProvider.when(ctrl.route, {
                templateUrl: ctrl.template,
                controller: ctrl.name,
                resolve: {
                    dependencies: app.lazyControllerLoader
                }
            });
        });
}]);


app.directive('onsTouchstart', function () {
    return function (scope, element, attrs) {
        element.bind('touchstart', function () {
            scope.$apply(attrs['onsTouchstart']);
        });
    };
});