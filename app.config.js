(function () {
    angular.module('app')
        //     .config(routeConfig)

        // function routeConfig($routeProvider) {
        //     $routeProvider.
        //     when('/dashboard', {
        //         templateUrl: 'app/dashboard/dashboard.template.html'
        //     }).
        //     when('/phones/:phoneId', {
        //         template: '<phone-detail></phone-detail>'
        //     }).
        //     when('/kek', {
        //         template: 'alkdjflakjdflkjalds'
        //     }).
        //     otherwise('/dashboard');
        // }

        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        var helloState = {
            name: 'dashboard',
            url: '/dashboard',
            templateUrl: "app/dashboard/dashboard.template.html",
            controller: "dashboardController",
            controllerAs: "vm"
        }

        var aboutState = {
            name: 'kek',
            url: '/kek',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);

        // $urlRouterProvider.when('', '/dashboard');
        // $urlRouterProvider.when('/', '/dashboard');

        $urlRouterProvider.otherwise('/dashboard');
    }

})()