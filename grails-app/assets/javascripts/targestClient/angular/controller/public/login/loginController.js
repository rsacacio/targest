(function () {
    'use strict';

    angular.module('targestApp').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'AuthenticationFactory', '$location', '$filter', '$window', 'GlobalHolder', '$state', '$stateParams'];

    function LoginController($scope, AuthenticationFactory, $location, $filter, $window, GlobalHolder, $state, $stateParams) {

        clearAlerts();
        if (isSessionExpired()) {
            showAlertSessionExpired();
        }

        $scope.credentials = {};
        if (AuthenticationFactory.isAuthenticated()) {
            $state.go('order');
        } else {
            $scope.login = function (username, password) {
                AuthenticationFactory.login(username, password, function (data) {
                    clearAlerts();
                    AuthenticationFactory.redirectToAttemptedUrl();
                }, function (error) {
                    showAlertInvalidCredentials();
                });
            };
        }

        function clearAlerts() {
            $scope.withErrors = false;
            $scope.withAlerts = false;
        }

        function showAlertSessionExpired() {
            $scope.withErrors = false;
            $scope.withAlerts = true;
            //$scope.panelMessage = $filter('translate')('LOGIN.SESSION_EXPIRED');
        }

        function showAlertInvalidCredentials() {
            $scope.withErrors = true;
            $scope.withAlerts = false;
            //$scope.panelMessage = $filter('translate')('LOGIN.INVALID_CREDENTIALS');
        }

        function isSessionExpired() {
            return $stateParams.st == '1';
        }

        $scope.goRecoverPassword = function(){
            $window.location.href = $location.protocol() + "://" + $location.$$host + ":" + $location.port() + $window.location.pathname + 'public#/recoverPassword';
        }
    }

})();
