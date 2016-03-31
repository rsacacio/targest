(function () {
    'use strict';

    angular.module('targestApp').controller('ConfigController', ConfigController);

    ConfigController.$inject = ['$location'];

    function ConfigController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[4];
            return path === current ? 'active' : '';
        }
    }

})();
