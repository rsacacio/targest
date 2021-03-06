(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignsListController', CampaignsListController);

    CampaignsListController.$inject = ['CampaignListService', '$filter', 'SweetAlert'];

    function CampaignsListController(CampaignListService, $filter, SweetAlert) {
        var self = this;
        self.remove = remove;
        self.statusClass = statusClass;

        self.search = '';

        function load(){
            CampaignListService.load().success(function (data) {
                self.campaigns = data.campaigns;
            });
        }
        load();

        function statusClass(status){
            if(status.name == 'ACTIVE'){
                return "label-primary";
            }
            if(status.name == 'INACTIVE'){
                return "label-danger";
            }
        }

        function remove(campaign){
            SweetAlert.swal({
                title: $filter('translate')('MESSAGE.ARE_YOU_SURE_ITEM', {itemName: campaign.name}),
                text: $filter('translate')('MESSAGE.DELETION_IS_NOT_RECOVER'),
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: $filter('translate')('MESSAGE.YES_I_SURE'),
                cancelButtonText: $filter('translate')('MESSAGE.NO_THANKS'),
                closeOnConfirm: false,
                closeOnCancel: true},
            function(){
                SweetAlert.swal($filter('translate')('MESSAGE.DELETED'), $filter('translate')('MESSAGE.DELETED_WITH_SUCCESS'), "success");
            });
        }

    }

})();
