(function () {
    angular.module('applications-menu')
        .controller('applicationsMenuController', applicationsMenuController)

    function applicationsMenuController($scope, $window) {
        var vm = this
        vm.controllerName = "applicationsMenuController"
        vm.disabled = 'disabled';

        vm.goTo = function (where) {
            switch (where) {
                case 'dashboard':
                    var landingUrl = window.location.origin + '#!/dashboard'
                    $window.location.href = landingUrl;
                    break;
                case 'kek':
                    var landingUrl = window.location.origin + '#!/kek'
                    $window.location.href = landingUrl;
                    break;

                default:
                    break;
            }
        }

    }
})()