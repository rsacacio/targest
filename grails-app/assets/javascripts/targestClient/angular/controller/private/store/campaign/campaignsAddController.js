(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignsAddController', CampaignsAddController);

    CampaignsAddController.$inject = ['CampaignsAddService', '$state', '$scope'];

    function CampaignsAddController(CampaignsAddService, $state, $scope) {
        var self = this;
        self.save = save;

        self.datepickerOptions = {
            format: 'dd/MM/yyyy',
            language: 'pt',
            startDate: new Date(),
            endDate: new Date(),
            autoclose: true,
            weekStart: 0
        }

        function save(){
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                CampaignsAddService.save(self.campaign).success(function (data) {
                    if (data.success) {
                        $state.go('company.campaigns.list');
                    }
                });
            }
        }
    }

})();
