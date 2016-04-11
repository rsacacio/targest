(function () {
    'use strict'

    angular.module('targestApp').factory('CampaignListService', CampaignListService);

    angular.$inject = ['TargestHttp'];
    function CampaignListService(TargestHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return TargestHttp.get('api/campaignList/load');
        }

    }
})();