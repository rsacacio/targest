(function () {
    'use strict'

    angular.module('targestApp').factory('StoresListService', StoresListService);

    angular.$inject = ['TargestHttp'];
    function StoresListService(TargestHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return TargestHttp.get('api/storeList/load');
        }

    }
})();