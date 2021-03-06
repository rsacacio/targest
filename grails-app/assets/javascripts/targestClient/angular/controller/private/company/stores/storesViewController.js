(function () {
    'use strict';

    angular.module('targestApp').controller('StoresViewController', StoresViewController);

    StoresViewController.$inject = ['StoresViewService', '$stateParams'];

    function StoresViewController(StoresViewService, $stateParams) {
        var self = this;
        self.statusClass = statusClass;
        self.unlock = unlock;
        self.lock = lock;

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

        function unlock() {
            StoresViewService.unlock($stateParams.storeId).success(function (data) {
               load();
            });
        }

        function lock() {
            StoresViewService.lock($stateParams.storeId).success(function (data) {
                load();
            });
        }
    }

})();
