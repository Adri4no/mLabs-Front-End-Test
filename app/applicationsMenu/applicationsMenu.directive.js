(function () {
    angular.module('applications-menu')
        .directive('applicationsMenu', applicationsMenu)

    function applicationsMenu() {
        var applicationsMenu = {
            restrict: "EA",
            templateUrl: "app/applicationsMenu/applicationsMenu.template.html",
            controller: "applicationsMenuController",
            controllerAs: "vm"
        };

        return applicationsMenu;
    }
})()