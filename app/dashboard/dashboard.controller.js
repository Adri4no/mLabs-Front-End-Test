(function () {
    'use strict';

    angular.module('dashboard')
        .controller('dashboardController', dashboardController)

    dashboardController.$inject = ['$scope', 'restService']

    function dashboardController($scope, restService) {
        var vm = this;
        vm.controllerName = "dashboardController";
        vm.disabled = 'disabled';
        vm.selectedSocialMedia = {};
        vm.socialMediaList = [{
                id: 0,
                name: "Facebook",
                icon: "zmdi-facebook",
                link: "www.facebook.com.br"

            },
            {
                id: 1,
                name: "Twitter",
                icon: "zmdi-twitter",
                link: "www.twitter.com.br"

            },
            {
                id: 2,
                name: "Instagram",
                icon: "zmdi-instagram",
                link: "www.instagram.com.br"

            },
            {
                id: 3,
                name: "Google meu negocio",
                icon: "zmdi-google",
                link: "www.googlemeunegocio.com.br"

            },
            {
                id: 4,
                name: "Pinterest",
                icon: "zmdi-pinterest-box",
                link: "www.facebook.com.br"

            },
            {
                id: 5,
                name: "LinkedIn",
                icon: "zmdi-linkedin",
                link: "www.linkedin.com.br"

            },
            {
                id: 6,
                name: "Youtube",
                icon: "zmdi-youtube",
                link: "www.youtube.com.br"

            },
            {
                id: 7,
                name: "Whatsapp",
                icon: "zmdi-whatsapp",
                link: "www.whatsapp.com.br"

            },
            {
                id: 8,
                name: "Google Analytics",
                icon: "zmdi-google",
                link: "www.googleanalytics.com.br"

            }
        ];
        vm.socialMediaPagesList = [];

        vm.initJQuery = init_JQuery;
        vm.openModalForAddSocialMedia = open_modal_for_add_social_media;


        init();

        function init() {
            init_JQuery();
        }

        function init_JQuery() {
            console.log('init jq');
            // angular.element( $('[data-toggle="tooltip"]').tooltip())
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
            $('#myModal').on('shown.bs.modal', function () {
                $('#myInput').trigger('focus')
            })
        }

        function open_modal_for_add_social_media(item) {
            console.log('modal opened for:', item.name);
            vm.selectedSocialMedia = item;

            restService.queryGetPages().then(function (response) {
                console.log(response);
                vm.socialMediaPagesList = response.data;

            }, function (error) {
                console.log(error);

            });

        }

    }
})()