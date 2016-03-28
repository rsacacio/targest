(function () {
    'use strict'

    angular.module('targestApp').factory('DashboardCompanyService', DashboardCompanyService);

    angular.$inject = ['TargestHttp'];
    function DashboardCompanyService(TargestHttp) {
        var service = {};

        service.loadIndicators = loadIndicators;
        return service;

        function loadIndicators() {
            return TargestHttp.get('api/dashboardCompany/loadIndicators');
        }

    }
})();