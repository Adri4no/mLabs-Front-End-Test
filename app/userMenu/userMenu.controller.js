(function () {
    angular.module('user-menu')
        .controller('userMenuController', userMenuController)

    function userMenuController($scope) {
        var vm = this

        vm.name = "Adriano"
        vm.controllerName = 'userMenuController'

    }
})()