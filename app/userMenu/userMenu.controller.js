(function () {
    angular.module('user-menu')
        .controller('userMenuController', userMenuController)

    function userMenuController($scope) {
        var vm = this

        vm.name = "Admin"
        vm.controllerName = 'userMenuController'

    }
})()