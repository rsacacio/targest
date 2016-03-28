(function () {
    'use strict';

    angular.module('targestApp').controller('TicketsDetailController', TicketsDetailController);

    TicketsDetailController.$inject = ['$location'];

    function TicketsDetailController($location) {
        var self = this;
        self.search = '';
        
        self.tickets = [];
        self.tickets.push({user: { name: 'Rangel Acácio de Souza'}, creation: new Date(), campaign: { name: 'Promoção de dia das crianças', end: new Date(), status: 'Ativo'}, amount: '450,00'});
        self.tickets.push({user: { name: 'Rangel Acácio de Souza'}, creation: new Date(), campaign: { name: 'Promoção de dia das crianças', end: new Date(), status: 'Ativo'}, amount: '1050,00'});
        console.log(self.tickets);

    }

})();
