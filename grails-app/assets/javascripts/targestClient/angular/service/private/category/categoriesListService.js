(function () {
    'use strict'

    angular.module('targestApp').factory('CategoriesListService', CategoriesListService);

    angular.$inject = ['TargestHttp'];
    function CategoriesListService(TargestHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return TargestHttp.get('api/categoryList/load');
        }

    }
})();