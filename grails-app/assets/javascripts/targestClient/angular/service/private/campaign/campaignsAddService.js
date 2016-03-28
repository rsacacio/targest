(function () {
    'use strict'

    angular.module('targestApp').factory('CampaignsAddService', CampaignsAddService);

    angular.$inject = ['TargestHttp'];
    function CampaignsAddService(TargestHttp) {
        var service = {};
        service.save = save;
        return service;

        function save(category) {
            return TargestHttp.postCommand('api/campaignAdd/save', category);
        }

    }
})();