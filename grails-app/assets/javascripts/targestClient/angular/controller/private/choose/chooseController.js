(function () {
    'use strict';

    angular.module('targestApp').controller('ChooseController', ChooseController);

    ChooseController.$inject = ['ChooseService', '$state'];

    function ChooseController(ChooseService, $state) {
        var self = this;
        self.buildClassCompanies = buildClassCompanies;
        self.buildClassStores = buildClassStores;

        self.loaded = false;
        function load(){
            ChooseService.load().success(function (data) {
                self.loaded = true;
                self.companies = data.companies;
                self.stores = data.stores;

                if(self.companies.length == 1 && self.stores.length == 0){
                    $state.go('company.dashboard', {id: self.companies[0].idCripto});
                }else if(self.companies.length == 0 && self.stores.length == 1){
                    $state.go('store.dashboard', {id: self.stores[0].idCripto});
                }
            });
        }
        load();

        function buildClassCompanies(index){
            var size = 6 - self.companies.length;
            var offset = 4 - self.companies.length;
            return 'col-lg-' + size + (index == 0 ? ' col-lg-offset-' + offset : '');
        }

        function buildClassStores(index){
            var size = 6 - self.stores.length;
            var offset = 4 - self.stores.length;
            return 'col-lg-' + size + (index == 0 ? ' col-lg-offset-' + offset : '');
        }
    }

})();
