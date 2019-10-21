// @Teste de acessar controllers
describe('Dashboard:', function () {
    var $controller, $rootScope;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    it('Controler deve estar definido:', function () {
        var scope = $rootScope.$new();
        var controller = $controller('dashboardController', {
            $scope: scope
        });
        // console.log(controller);
        

        expect(controller).toBeDefined();
    });

    it('Número de redes sociais:', function () {
        var scope = $rootScope.$new();
        var controller = $controller('dashboardController', {
            $scope: scope
        });
        // console.log(controller.socialMediaList.length);
        

        expect(controller.socialMediaList.length).toBe(9);
    });

});

describe('Menu:', function () {
    var $controller, $rootScope;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    it('Controler deve estar definido:', function () {
        var scope = $rootScope.$new();
        var controller = $controller('applicationsMenuController', {
            $scope: scope
        });

        expect(controller).toBeDefined();
    });
});