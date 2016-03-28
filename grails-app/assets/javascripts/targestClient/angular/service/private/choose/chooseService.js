(function () {
    'use strict'

    angular.module('targestApp').factory('ChooseService', ChooseService);

    angular.$inject = ['TargestHttp'];
    function ChooseService(TargestHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return TargestHttp.get('api/choose/load');
        }

    }
})();