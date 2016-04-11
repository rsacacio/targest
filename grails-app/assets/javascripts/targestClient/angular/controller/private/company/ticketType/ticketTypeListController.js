(function () {
    'use strict';

    angular.module('targestApp').controller('TicketTypeListController', TicketTypeListController);

    TicketTypeListController.$inject = ['TicketTypeListService'];

    function TicketTypeListController(TicketTypeListService) {
        var self = this;
        self.statusClass = statusClass;

        self.search = '';

        function load(){
            TicketTypeListService.load().success(function (data) {
                self.ticketTypes = data.ticketTypes;
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
    }

})();
