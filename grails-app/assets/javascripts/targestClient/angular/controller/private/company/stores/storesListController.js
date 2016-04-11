(function () {
    'use strict';

    angular.module('targestApp').controller('StoresListController', StoresListController);

    StoresListController.$inject = ['StoresListService'];

    function StoresListController(StoresListService) {
        var self = this;
        self.statusClass = statusClass;

        self.search = '';

        function load(){
            StoresListService.load().success(function (data) {
                self.stores = data.stores;
            });
        }
        load();

        function statusClass(status){
            if(status.name == 'ACTIVE'){
                return "label-primary";
            }
            if(status.name == 'INACTIVE'){
                return "label-danger";
            }
        }
    }

})();
