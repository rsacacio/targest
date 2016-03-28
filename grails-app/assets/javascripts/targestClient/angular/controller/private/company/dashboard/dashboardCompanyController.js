(function () {
    'use strict';

    angular.module('targestApp').controller('DashboardCompanyController', DashboardCompanyController);

    DashboardCompanyController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'DashboardCompanyService'];

    function DashboardCompanyController($scope, GlobalHolder, $state, $stateParams, DashboardCompanyService) {
        var self = this;

        function loadIndicators(){
            DashboardCompanyService.loadIndicators().success(function (data) {
                self.success = data.success;
            });
        }

    }

})();
