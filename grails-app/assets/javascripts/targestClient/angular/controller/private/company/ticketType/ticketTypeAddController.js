(function () {
    'use strict';

    angular.module('targestApp').controller('TicketTypeAddController', TicketTypeAddController);

    TicketTypeAddController.$inject = ['TicketTypeAddService', '$state', '$scope'];

    function TicketTypeAddController(TicketTypeAddService, $state, $scope) {
        var self = this;
        self.save = save;

        function save(){
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                TicketTypeAddService.save(self.ticketType).success(function (data) {
                    if (data.success) {
                        $state.go('company.ticketType.list');
                    }
                });
            }
        }
    }

})();
