(function () {
    'use strict';

    angular.module('targestApp').controller('DashboardStoreController', DashboardStoreController);

    DashboardStoreController.$inject = ['DashboardStoreService'];

    function DashboardStoreController(DashboardStoreService) {
        var self = this;

        self.indicators = [];
        self.indicators.push({name: '1'});
        self.indicators.push({name: '2'});
        self.indicators.push({name: '3'});
        self.indicators.push({name: '4'});

        self.indicators.push({name: '5'});
        self.indicators.push({name: '6'});
        self.indicators.push({name: '7'});
        self.indicators.push({name: '8'});

        self.sortableOptions = {
            handle: ' .ibox-title'
        };

        function loadIndicators(){
            DashboardStoreService.loadIndicators().success(function (data) {
                self.success = data.success;
            });
        }

    }

})();
