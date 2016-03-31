(function () {
    'use strict'

    angular.module('targestApp').factory('StoresViewService', StoresViewService);

    angular.$inject = ['TargestHttp'];
    function StoresViewService(TargestHttp) {
        var service = {};
        service.load = load;
        service.unlock = unlock;
        service.lock = lock;
        return service;

        function load(storeId) {
            return TargestHttp.get('api/storeView/load', { params : {storeId: storeId}});
        }

        function unlock(storeId) {
            return TargestHttp.get('api/storeView/unlock', { params : {storeId: storeId}});
        }

        function lock(storeId) {
            return TargestHttp.get('api/storeView/lock', { params : {storeId: storeId}});
        }

    }
})();