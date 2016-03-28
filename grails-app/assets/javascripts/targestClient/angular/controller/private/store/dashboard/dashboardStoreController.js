(function () {
    'use strict';

    angular.module('targestApp').controller('DashboardStoreController', DashboardStoreController);

    DashboardStoreController.$inject = ['$scope', 'GlobalHolder', '$state', '$stateParams', 'DashboardStoreService'];

    function DashboardStoreController($scope, GlobalHolder, $state, $stateParams, DashboardStoreService) {
        var self = this;

        function loadIndicators(){
            DashboardStoreService.loadIndicators().success(function (data) {
                self.success = data.success;
            });
        }

    }

})();
