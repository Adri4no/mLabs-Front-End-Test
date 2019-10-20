(function () {
    angular.module('applications-menu')
        .controller('applicationsMenuController', applicationsMenuController)

    function applicationsMenuController($scope, $window) {
        var vm = this;
        vm.controllerName = "applicationsMenuController";
        vm.disabled = 'disabled';

        vm.get_informations = function (where, el, parent) {
            console.log(parent);
            remove_selected_css(parent);
            set_selected_css(el);

            switch (where) {
                case 'dashboard':
                    set_url('dashboard');
                    break;
                case 'agendar-post':
                    set_url('agendar-post');
                    break;
                case 'in-box':
                    set_url('in-box');
                    break;
                case 'feed':
                    set_url('feed');
                    break;
                case 'workflow':
                    set_url('workflow');
                    break;
                case 'acompanhamentos':
                    set_url('acompanhamentos');
                    break;
                case 'relatorios':
                    set_url('relatorios');
                    break;

                default:
                    break;
            }
        }

        function set_selected_css(el) {
            angular.element(el).addClass("menu-item-selected");
        }

        function remove_selected_css(parent) {
            for (let i = 0; i < parent.length; i++) {
                if (parent[i].classList.length > 1) {
                    if (parent[i].classList[1] == "menu-item-selected") {
                        angular.element(parent[i]).removeClass("menu-item-selected")
                    }
                }
            }
        }

        function set_url(params) {
            var landingUrl = window.location.origin + `#!/${params}`
            $window.location.href = landingUrl;
        }

    }
})()