(function () {
    'use strict';

    angular.module('targestApp').controller('StoresAddController', StoresAddController);

    StoresAddController.$inject = ['ModalService', 'StoresAddService', '$state', '$scope'];

    function StoresAddController(ModalService, StoresAddService, $state, $scope) {
        var self = this;
        self.openUserAdd = openUserAdd;
        self.save = save;

        self.store = {};
        self.store.users = [];

        function openUserAdd(){
            ModalService.showModal({
                templateUrl: "assets/targestClient/partials/private/company/stores/user/storesUserAddModal.html",
                controller: "StoresUserAddModalController as StoresUserAddModalCtrl"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    if(result){
                        self.store.users.push(result);
                    }
                });
            });
        }

        function save(){
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                StoresAddService.save(self.store).success(function (data) {
                    if (data.success) {
                        $state.go('company.stores.list');
                    }
                });
            }
        }

    }

})();
