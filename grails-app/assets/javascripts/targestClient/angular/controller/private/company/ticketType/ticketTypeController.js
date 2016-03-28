(function () {
    'use strict';

    angular.module('targestApp').controller('TicketTypeController', TicketTypeController);

    TicketTypeController.$inject = ['$location'];

    function TicketTypeController($location) {
        var self = this;

        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[4];
            return path === current ? 'active' : '';
        }
    }

})();
