(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignsAddController', CampaignsAddController);

    CampaignsAddController.$inject = ['CampaignsAddService', '$state', '$scope'];

    function CampaignsAddController(CampaignsAddService, $state, $scope) {
        var self = this;
        self.save = save;

        self.campaign = {};
        self.today = new Date();
        self.campaign.period = {startDate: null, endDate: null};

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

        function loadTicketTypes(){
            CampaignsAddService.loadTicketTypes().success(function (data) {
               self.ticketTypes = data.ticketTypes;
            });
        }
        loadTicketTypes();

        function loadCategories(){
            CampaignsAddService.loadCategories().success(function (data) {
                self.categories = data.categories;
            });
        }
        loadCategories();
    }

})();
