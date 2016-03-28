(function () {
    'use strict';

    angular.module('targestApp').controller('StoresUserAddModalController', StoresUserAddModalController);

    StoresUserAddModalController.$inject = ['close', '$element', 'StoresAddService', '$scope'];

    function StoresUserAddModalController(close, $element, StoresAddService, $scope) {
        var self = this;
        self.save = save;
        self.cancel = cancel;

        self.user = {};

        function cancel(){
            $element.modal('hide');
            close(null, 200);
        }

        function loadTypes(){
            StoresAddService.loadTypes().success(function (data) {
                self.userStoreTypes = data.userStoreTypes;
            });
        }
        loadTypes();

        function save(){
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                $element.modal('hide');
                close(self.user, 200);
            }
        }
    }

})();
