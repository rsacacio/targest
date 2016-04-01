(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignsAddController', CampaignsAddController);

    CampaignsAddController.$inject = ['CampaignsAddService', '$state', '$scope', '$filter'];

    function CampaignsAddController(CampaignsAddService, $state, $scope, $filter) {
        var self = this;
        self.save = save;

        self.campaign = {};
        self.today = new Date();
        self.period = {startDate: null, endDate: null};

        function save(){
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                debugger;
                self.campaign.startDate =  $filter('date')(new Date(self.period.startDate), 'dd/MM/yyyy');
                self.campaign.endDate = $filter('date')(new Date(self.period.endDate), 'dd/MM/yyyy');
                self.campaign.ticketTypeIdCripto = self.ticketTypeSelected.idCripto;

                self.campaign.categoryIdsCripto = [];
                angular.forEach(self.categoriesSelected, function (item) {
                   self.campaign.categoryIdsCripto.push(item.idCripto);
                });

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
