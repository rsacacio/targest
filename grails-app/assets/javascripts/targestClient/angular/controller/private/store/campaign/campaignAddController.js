(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignAddController', CampaignAddController);

    CampaignAddController.$inject = ['CampaignAddService', '$state', '$scope'];

    function CampaignAddController(CampaignAddService, $state, $scope) {
        var self = this;
        self.save = save;

        function save(){
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                CampaignAddService.save(self.campaign).success(function (data) {
                    if (data.success) {
                        $state.go('company.categories.list');
                    }
                });
            }
        }
    }

})();
