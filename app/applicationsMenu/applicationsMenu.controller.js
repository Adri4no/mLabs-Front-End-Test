(function () {
    angular.module('applications-menu')
            .controller('applicationsMenuController', applicationsMenuController)

    function applicationsMenuController($scope) {
        var vm = this
        vm.controllerName = "applicationsMenuController"
    }
})()