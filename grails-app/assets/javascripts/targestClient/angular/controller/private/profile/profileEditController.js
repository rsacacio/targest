(function () {
    'use strict';

    angular.module('targestApp').controller('ProfileEditController', ProfileEditController);

    ProfileEditController.$inject = ['ProfileEditService', '$scope'];

    function ProfileEditController(ProfileEditService, $scope) {
        var self = this;
        self.save = save;

        function load(){
            ProfileEditService.load().success(function (data) {
               self.user = data.user;
            });
        }
        load();

        function save() {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                ProfileEditService.save(self.user).success(function (data) {
                    if (data.success) {
                    }
                });
            }
        }
    }

})();
