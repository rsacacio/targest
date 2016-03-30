(function () {
    'use strict';

    angular.module('targestApp').controller('StoresViewController', StoresViewController);

    StoresViewController.$inject = ['StoresViewService', '$stateParams'];

    function StoresViewController(StoresViewService, $stateParams) {
        var self = this;
        self.statusClass = statusClass;

        function load(){
            StoresViewService.load($stateParams.storeId).success(function (data) {
                self.store = data.store;
            });
        }
        load();

        function statusClass(){
            if(self.store){
                if(self.store.status.name == 'ACTIVE'){
                    return "label-primary";
                }
                if(self.store.status.name == 'INACTIVE'){
                    return "label-danger";
                }
            }
        }
    }

})();
