(function () {
    'use strict';

    angular.module("dashboard")
        .directive('dashboardView', dashboardView)


    function dashboardView() {
        var dashboardView = {
            restrict: "EA",
            templateUrl: "app/dashboard/dashboard.template.html",
            controller: "dashboardController",
            controllerAs: "vm"
        };

        return dashboardView;
    }

})()