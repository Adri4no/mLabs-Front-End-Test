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

        vm.initJQuery = init_JQuery;
        vm.openModalForAddSocialMedia = open_modal_for_add_social_media;

        init();

        vm.socialMediaPagesList = [{
                "id": 1,
                "name": "Pet Shop do Arnaldo",
                "url": "https://www.facebook.com/pet-shop-do-arnaldo",
                "picture": "https://picsum.photos/id/237/200/300",
                "channel_key": "facebook"
            },
            {
                "id": 2,
                "name": "Buffet Alegria Geral",
                "url": "https://www.facebook.com/buffet-alegria-geral",
                "picture": "https://picsum.photos/id/1042/3456/5184",
                "channel_key": "facebook"
            },
            {
                "id": 3,
                "name": "Mecânica do Vitão",
                "url": "https://www.facebook.com/mecanic-do-vitao",
                "picture": "https://picsum.photos/id/1071/200/200",
                "channel_key": "facebook"
            },
            {
                "id": 4,
                "name": "Fica assim então",
                "url": "https://twitter.com/ficaassimentao",
                "picture": "https://picsum.photos/id/1080/6858/4574",
                "channel_key": "twitter"
            },
            {
                "id": 5,
                "name": "Diogo Diogo",
                "url": "https://twitter.com/diogodiogodiogodiogo",
                "picture": "",
                "channel_key": "twitter"
            },
            {
                "id": 6,
                "name": "Loja Sapatos mais que legais",
                "url": "http://instagram.com/sapatosmaisquelegais",
                "picture": "https://picsum.photos/id/18/2500/667",
                "channel_key": "instagram"
            },
            {
                "id": 7,
                "name": "Bicicletaria do Alemão",
                "url": "https://www.instagram.com/bicicletariadoalemao/",
                "picture": "https://picsum.photos/id/1077/100/100",
                "channel_key": "instagram"
            },
            {
                "id": 8,
                "name": "Guia Melhores Lugares SJC",
                "url": "https://guiamelhoreslugaressjc.com.br",
                "picture": "",
                "channel_key": "google_analytics"
            },
            {
                "id": 9,
                "name": "Canal do Slime",
                "url": "https://www.youtube.com/user/CanalDoSlimeLegal",
                "picture": "https://picsum.photos/id/157/500/500",
                "channel_key": "youtube"
            },
            {
                "id": 10,
                "name": "Tudo sobre skate",
                "url": "http://pinterest.com/tudosobreskate",
                "picture": "https://picsum.photos/id/157/300/500",
                "channel_key": "pinterest"
            },
            {
                "id": 11,
                "name": "Tech+",
                "url": "http://pinterest.com/techmais",
                "picture": "https://picsum.photos/id/160/1000/1000",
                "channel_key": "pinterest"
            }
        ]
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

            }, function (error) {
                console.log(error);

            });

        }

    }
})()