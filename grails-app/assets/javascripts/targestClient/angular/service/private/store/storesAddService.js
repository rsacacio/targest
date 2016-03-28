(function () {
    'use strict'

    angular.module('targestApp').factory('StoresAddService', StoresAddService);

    angular.$inject = ['TargestHttp'];
    function StoresAddService(TargestHttp) {
        var service = {};
        service.save = save;
        service.loadTypes = loadTypes;
        return service;

        function save(store) {
            return TargestHttp.postCommand('api/storeAdd/save', store);
        }

        function loadTypes(){
            return TargestHttp.get('api/storeAdd/loadTypes');
        }

    }
})();