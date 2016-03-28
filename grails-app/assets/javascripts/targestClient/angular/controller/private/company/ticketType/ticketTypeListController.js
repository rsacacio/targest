(function () {
    'use strict';

    angular.module('targestApp').controller('TicketTypeListController', TicketTypeListController);

    TicketTypeListController.$inject = ['TicketTypeListService'];

    function TicketTypeListController(TicketTypeListService) {
        var self = this;

        self.search = '';

        function load(){
            TicketTypeListService.load().success(function (data) {
                self.ticketTypes = data.ticketTypes;
            });
        }
        load();
    }

})();
