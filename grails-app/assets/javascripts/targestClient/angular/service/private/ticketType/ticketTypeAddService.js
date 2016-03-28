(function () {
    'use strict'

    angular.module('targestApp').factory('TicketTypeAddService', TicketTypeAddService);

    angular.$inject = ['TargestHttp'];
    function TicketTypeAddService(TargestHttp) {
        var service = {};
        service.save = save;
        return service;

        function save(ticketType) {
            return TargestHttp.postCommand('api/ticketTypeAdd/save', ticketType);
        }

    }
})();