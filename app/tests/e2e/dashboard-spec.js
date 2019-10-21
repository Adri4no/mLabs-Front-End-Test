describe('Dashboard:', function () {
    it('Vincular uma pagina ao facebook', function () {
        browser.get('http://localhost:5000');
        element(by.id('0')).click();
        var elem = element.all(by.repeater('page in vm.socialMediaPagesList'));
        expect(elem.count()).toEqual(3);
        elem.get(2).element(by.css('[ng-click="vm.selectPage(page)"]')).click();
        element(by.css('[ng-click="vm.savePage()"]')).click();
        var card = element(by.css('.card-linked-facebook'));
        expect(card.element(by.tagName('h6')).getText()).toEqual('Mecânica do Vitão');
    });

    it('Vincular uma pagina ao instagram', function () {
        browser.get('http://localhost:5000');
        element(by.id('2')).click();
        var elem = element.all(by.repeater('page in vm.socialMediaPagesList'));
        expect(elem.count()).toEqual(2);
        elem.get(0).element(by.css('[ng-click="vm.selectPage(page)"]')).click();
        element(by.css('[ng-click="vm.savePage()"]')).click();
        var card = element(by.css('.card-linked-instagram'));
        expect(card.element(by.tagName('h6')).getText()).toEqual('Loja Sapatos mais que legais');
    });

});