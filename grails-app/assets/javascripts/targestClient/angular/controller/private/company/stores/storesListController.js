(function () {
    'use strict';

    angular.module('targestApp').controller('StoresListController', StoresListController);

    StoresListController.$inject = ['StoresListService'];

    function StoresListController(StoresListService) {
        var self = this;

        self.search = '';

        function load(){
            StoresListService.load().success(function (data) {
                self.stores = data.stores;
            });
        }
        load();
    }

})();
