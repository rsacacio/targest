(function () {
    'use strict'

    angular.module('targestApp').factory('ProfileEditService', ProfileEditService);

    angular.$inject = ['TargestHttp'];
    function ProfileEditService(TargestHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return TargestHttp.get('api/profileEdit/load');
        }

    }
})();