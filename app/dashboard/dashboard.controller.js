(function () {
    'use strict';

    angular.module('dashboard')
        .controller('dashboardController', dashboardController)


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
        var numbersOfListedPages = 0;
        vm.loadingPageList = true;
        vm.canShowWarning = false

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
            // sessionService.destroy('sml')
            if (sessionService.get('sml') != null) {
                vm.socialMediaList = sessionService.get('sml');
            }
        }

        function init_JQuery() {
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            });
            $('#myModal').on('shown.bs.modal', function () {
                $('#myInput').trigger('focus')
            });
        }

        function open_modal_for_add_social_media(item) {
            vm.selectedSocialMedia = item;
            numbersOfListedPages = 0;
            vm.loadingPageList = true;
            vm.canShowWarning = false;

            restService.queryGetPages().then(function (response) {
                vm.socialMediaPagesList = response.data;
                vm.loadingPageList = false;
                angular.element(document.getElementById('table')).ready(function (params) {
                    numbersOfListedPages = $('table')[0].children[0].childElementCount;
                    // vm.loadingPageList = false;
                    vm.canShowWarning = true ? numbersOfListedPages == 0 && vm.loadingPageList == false : false;
                    $scope.$apply();
                });

            }, function (error) {
                vm.loadingPageList = false;
                vm.canShowWarning = true ? numbersOfListedPages == 0 && vm.loadingPageList == false : false;
                $scope.$apply();

            });
        }

        function select_page(page) {
            auxPage = page;
        }

        function save_page() {
            vm.selectedSocialMedia.linkedPage = auxPage;
            sessionService.persist('sml', vm.socialMediaList)
        }

    }
})()