(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignsAddController', CampaignsAddController);

    CampaignsAddController.$inject = ['CampaignsAddService', '$state', '$scope'];

    function CampaignsAddController(CampaignsAddService, $state, $scope) {
        var self = this;
        self.save = save;

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
