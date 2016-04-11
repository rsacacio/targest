(function () {
    'use strict'

    angular.module('targestApp').factory('CampaignsAddService', CampaignsAddService);

    angular.$inject = ['TargestHttp'];
    function CampaignsAddService(TargestHttp) {
        var service = {};
        service.save = save;
        service.loadCategories = loadCategories;
        service.loadTicketTypes = loadTicketTypes;
        return service;

        function save(category) {
            return TargestHttp.postCommand('api/campaignAdd/save', category);
        }

        function loadCategories() {
            return TargestHttp.get('api/campaignAdd/loadCategories');
        }

        function loadTicketTypes() {
            return TargestHttp.get('api/campaignAdd/loadTicketTypes');
        }

    }
})();