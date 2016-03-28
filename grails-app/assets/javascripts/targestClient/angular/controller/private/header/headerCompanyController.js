(function () {
    'use strict';

    angular.module('targestApp').controller('HeaderController', HeaderController);

    HeaderController.$inject = ['AuthenticationFactory', '$location', '$state', '$stateParams'];

    function HeaderController(AuthenticationFactory, $location, $state, $stateParams) {

        var self = this;
        self.logout = logout;
        self.isActive = isActive;

        function logout() {
            AuthenticationFactory.logout();
        };

        function isActive(path){
            var current = $location.path().split('/')[3];
            return path === current ? 'active' : '';
        }

    }

})();
