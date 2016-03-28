(function () {
    'use strict';

    angular.module('targestApp').controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['$location'];

    function CategoriesController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[4];
            return path === current ? 'active' : '';
        }
    }

})();
