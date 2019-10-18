(function () {
    'use strict';

    angular.module('dashboard')
        .controller('dashboardController', dashboardController)

    // dashboardController.$inject = ['$scope', 'restService', 'sessionService']

    function dashboardController($scope, restService, sessionService) {
        var vm = this;
        vm.controllerName = "dashboardController";
        vm.disabled = 'disabled';
        vm.selectedSocialMedia = {};
        vm.socialMediaList = [{
                id: 0,
                name: "Facebook",
                icon: "zmdi-facebook",
                link: "www.facebook.com.br",
                linkedPage: {}

            },
            {
                id: 1,
                name: "Twitter",
                icon: "zmdi-twitter",
                link: "www.twitter.com.br",
                linkedPage: {}

            },
            {
                id: 2,
                name: "Instagram",
                icon: "zmdi-instagram",
                link: "www.instagram.com.br",
                linkedPage: {}

            },
            {
                id: 3,
                name: "Google meu negocio",
                icon: "zmdi-google",
                link: "www.googlemeunegocio.com.br",
                linkedPage: {}

            },
            {
                id: 4,
                name: "Pinterest",
                icon: "zmdi-pinterest-box",
                link: "www.facebook.com.br",
                linkedPage: {}

            },
            {
                id: 5,
                name: "LinkedIn",
                icon: "zmdi-linkedin",
                link: "www.linkedin.com.br",
                linkedPage: {}

            },
            {
                id: 6,
                name: "Youtube",
                icon: "zmdi-youtube",
                link: "www.youtube.com.br",
                linkedPage: {}

            },
            {
                id: 7,
                name: "Whatsapp",
                icon: "zmdi-whatsapp",
                link: "www.whatsapp.com.br",
                linkedPage: {}

            },
            {
                id: 8,
                name: "Google Analytics",
                icon: "zmdi-google",
                link: "www.googleanalytics.com.br",
                linkedPage: {}

            }
        ];
        vm.socialMediaPagesList = [];
        var auxPage = {};

        vm.initJQuery = init_JQuery;
        vm.openModalForAddSocialMedia = open_modal_for_add_social_media;
        vm.selectPage = select_page;
        vm.savePage = save_page;


        init();

        function init() {
            init_JQuery();
            for (let i = 0; i < vm.socialMediaList.length; i++) {
                vm.socialMediaList[i].channel_key = vm.socialMediaList[i].name.toLocaleLowerCase();
                
            }

            if (sessionService.get('sml') != null) {
                console.log('ha itens guardados, carregando');
                
                vm.socialMediaList = sessionService.get('sml');
                console.log(sessionService.get('sml'));
            } else {
                console.log('não a itens guardados');
                
            }
            // sessionService.destroy('sml')            
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

        function select_page(page) {
            console.log(page);
            auxPage = page;
        }

        function save_page() {
            vm.selectedSocialMedia.linkedPage = auxPage;
            console.log(vm.socialMediaList);
            sessionService.persist('sml',vm.socialMediaList)
        }

    }
})()