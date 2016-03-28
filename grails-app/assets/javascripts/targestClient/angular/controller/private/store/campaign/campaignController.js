(function () {
    'use strict';

    angular.module('targestApp').controller('CampaignController', CampaignController);

    CampaignController.$inject = ['$location'];

    function CampaignController($location) {
        var self = this;
        self.isActive = isActive;

        function isActive(path){
            var current = $location.path().split('/')[4];
            return path === current ? 'active' : '';
        }
    }

})();
