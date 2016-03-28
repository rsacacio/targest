(function () {
    'use strict';

    angular.module('targestApp').controller('CategoriesAddController', CategoriesAddController);

    CategoriesAddController.$inject = ['CategoriesAddService', '$state', '$scope'];

    function CategoriesAddController(CategoriesAddService, $state, $scope) {
        var self = this;
        self.save = save;

        function save(){
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                CategoriesAddService.save(self.category).success(function (data) {
                    if (data.success) {
                        $state.go('company.categories.list');
                    }
                });
            }
        }
    }

})();
