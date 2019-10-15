(function () {
    angular.module('user-menu')
        .directive('userMenu', userMenu)

    function userMenu() {
        var userMenu = {
            restrict: "EA",
            templateUrl: "app/userMenu/userMenu.template.html",
            controller: "userMenuController",
            controllerAs: "vm"
        };

        return userMenu;
    }
})()