(function () {
    'use strict'

    angular.module('targestApp').factory('StoresViewService', StoresViewService);

    angular.$inject = ['TargestHttp'];
    function StoresViewService(TargestHttp) {
        var service = {};

        service.load = load;
        return service;

        function load(storeId) {
            return TargestHttp.get('api/storeView/load', { params : {storeId: storeId}});
        }

    }
})();