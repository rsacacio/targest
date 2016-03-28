(function () {
    'use strict'

    angular.module('targestApp').factory('CategoriesAddService', CategoriesAddService);

    angular.$inject = ['TargestHttp'];
    function CategoriesAddService(TargestHttp) {
        var service = {};
        service.save = save;
        return service;

        function save(category) {
            return TargestHttp.postCommand('api/categoryAdd/save', category);
        }

    }
})();