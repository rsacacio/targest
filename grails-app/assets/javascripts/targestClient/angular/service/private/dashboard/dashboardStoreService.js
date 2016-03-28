(function () {
    'use strict'

    angular.module('targestApp').factory('DashboardStoreService', DashboardStoreService);

    angular.$inject = ['TargestHttp'];
    function DashboardStoreService(TargestHttp) {
        var service = {};

        service.loadIndicators = loadIndicators;
        return service;

        function loadIndicators() {
            return TargestHttp.get('api/dashboardCompany/loadIndicators');
        }

    }
})();