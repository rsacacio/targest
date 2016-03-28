(function () {
    'use strict';

    angular.module('targestApp').controller('StoresController', StoresController);

    StoresController.$inject = ['$location'];

    function StoresController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[4];
            return path === current ? 'active' : '';
        }

    }
})();
