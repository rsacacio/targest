(function () {
    'use strict'

    angular.module('targestApp').factory('TicketTypeListService', TicketTypeListService);

    angular.$inject = ['TargestHttp'];
    function TicketTypeListService(TargestHttp) {
        var service = {};

        service.load = load;
        return service;

        function load() {
            return TargestHttp.get('api/ticketTypeList/load');
        }

    }
})();