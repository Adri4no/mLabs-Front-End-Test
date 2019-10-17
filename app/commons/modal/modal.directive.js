(function () {
    'use strict';

    angular.module("app")
        .directive('addModal', addModal)


    function addModal() {
        var addModal = {
            restrict: "EA",
            templateUrl: "app/commons/modal/addModal.template.html",
        };

        return addModal;
    }

})()