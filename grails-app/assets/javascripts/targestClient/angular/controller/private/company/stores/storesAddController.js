(function () {
    'use strict';

    angular.module('targestApp').controller('StoresAddController', StoresAddController);

    StoresAddController.$inject = ['ModalService', 'StoresAddService', '$state', '$scope'];

    function StoresAddController(ModalService, StoresAddService, $state, $scope) {
        var self = this;
        self.openUserAdd = openUserAdd;
        self.save = save;
        self.removeUser = removeUser;

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
                        var user = angular.copy(result);
                        user.typeId = result.type.id;
                        self.store.users.push(user);
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

        function removeUser(user){
            self.store.users.splice(self.store.users.indexOf(user), 1);
        }

    }

})();
