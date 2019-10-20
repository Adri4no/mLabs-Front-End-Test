(function () {
    angular.module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        var dashboardState = {
            name: 'dashboard',
            url: '/dashboard',
            templateUrl: "app/dashboard/dashboard.template.html",
            controller: "dashboardController",
            controllerAs: "vm"
        }

        var postState = {
            name: "agendar-post",
            url: "/agendar-post",
            template: '<h3>Em breve...</h3>'
        }

        var inboxState = {
            name: 'in-box',
            url: '/in-box',
            template: '<h3>Em breve...</h3>'
        }

        var feedState = {
            name: 'feed',
            url: '/feed',
            template: '<h3>Em breve...</h3>'
        }

        var workflowState = {
            name: 'workflow',
            url: '/workflow',
            template: '<h3>Em breve...</h3>'
        }

        var acompanhamentosState = {
            name: 'acompanhamentos',
            url: '/acompanhamentos',
            template: '<h3>Em breve...</h3>'
        }

        var relatoriosState = {
            name: 'relatorios',
            url: '/relatorios',
            template: '<h3>Em breve...</h3>'
        }

        $stateProvider.state(dashboardState);
        $stateProvider.state(postState);
        $stateProvider.state(inboxState);
        $stateProvider.state(feedState);
        $stateProvider.state(workflowState);
        $stateProvider.state(acompanhamentosState);
        $stateProvider.state(relatoriosState);

        // $urlRouterProvider.when('', '/dashboard');
        // $urlRouterProvider.when('/', '/dashboard');

        $urlRouterProvider.otherwise('/dashboard');
    }

})()