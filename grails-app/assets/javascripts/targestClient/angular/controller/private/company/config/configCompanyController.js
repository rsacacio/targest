(function () {
    'use strict';

    angular.module('targestApp').controller('ConfigCompanyController', ConfigCompanyController);

    ConfigCompanyController.$inject = ['$location'];

    function ConfigCompanyController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[4];
            return path === current ? 'active' : '';
        }
    }

})();
