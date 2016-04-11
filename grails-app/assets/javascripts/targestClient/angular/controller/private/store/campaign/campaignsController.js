(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignsController', CampaignsController);

    CampaignsController.$inject = ['$location'];

    function CampaignsController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[4];
            return path === current ? 'active' : '';
        }
    }

})();
