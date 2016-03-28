(function () {
    'use strict';

    angular.module('targestApp').factory('AuthenticationFactory', AuthenticationFactory);
    angular.$inject = ['TargestHttp', '$http', '$location', 'redirectToUrlAfterLogin', '$window', 'GlobalHolder', 'AuthenticationResourceFactory'];

    function AuthenticationFactory(TargestHttp, $http, $location, redirectToUrlAfterLogin, $window, GlobalHolder, AuthenticationResourceFactory) {
        var service = {};

        service.init = function (username, tokenType, token) {
            AuthenticationResourceFactory.init(username, tokenType, token);
        };

        service.login = function (username, password, successCallback, errorCallback) {
            var credentials = {username: username, password: password};

            TargestHttp.post("api/login", credentials).success(function (response) {
                AuthenticationResourceFactory.init(username, response.token_type, response.access_token);
                $http.defaults.headers.common.Authorization = AuthenticationResourceFactory.token();
                successCallback(response);

            }).error(function (error) {
                AuthenticationResourceFactory.destroy();
                errorCallback(error);
            });
        };

        service.impersonate = function (username, password, ambianceId) {
            var credentials = {username: username, password: password};
            TargestHttp.post("api/impersonation/impersonate", credentials).success(function (response) {
                GlobalHolder.setInitialized(false);
                AuthenticationResourceFactory.impersonate(username, response.accessToken);
                $http.defaults.headers.common.Authorization = AuthenticationResourceFactory.token();
                $window.location.href = GlobalHolder.currentURL() + "#/document/" + ambianceId;

            }).error(function () {

            });
        }

        service.logout = function () {
            AuthenticationResourceFactory.destroy();
            $window.location.href = GlobalHolder.currentURL();
        };

        service.saveAttemptUrl = function () {
            if ($location.path().toLowerCase() != '/login' && $location.path().toLowerCase() != '/') {
                redirectToUrlAfterLogin.url = $location.absUrl();
            }
        };

        service.redirectToAttemptedUrl = function () {
            if (redirectToUrlAfterLogin.url === '/') {
                $window.location.href = GlobalHolder.currentURL();
            } else {
                $window.location.href = redirectToUrlAfterLogin.url;
            }
        };


        service.xToken = function () {
            return AuthenticationResourceFactory.xToken();
        };

        service.token = function () {
            return AuthenticationResourceFactory.token();
        };

        service.queryStringToken = function () {
            return AuthenticationResourceFactory.queryStringToken();
        };

        service.username = function () {
            return AuthenticationResourceFactory.username();
        };

        service.isAuthenticated = function () {
            return AuthenticationResourceFactory.isAuthenticated();
        };

        return service;
    }
})();

