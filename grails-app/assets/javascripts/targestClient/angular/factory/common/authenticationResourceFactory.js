(function () {
    'use strict';

    angular.module('targestApp').factory('AuthenticationResourceFactory', AuthenticationResourceFactory);
    angular.$inject = ['$cookies'];

    function AuthenticationResourceFactory($cookies) {
        var service = {};

        service.init = function (username, tokenType, token) {
            var authToken = tokenType + ' ' + token;
            $cookies.put('token', authToken);
            $cookies.put('x_token', authToken);
            $cookies.put('queryStringToken', token);
            $cookies.put('username', username);
            $cookies.put('tokenType', tokenType);
        };

        service.destroy = function () {
            $cookies.remove('token');
            $cookies.remove('x_token');
            $cookies.remove('queryStringToken');
            $cookies.remove('username');
            $cookies.remove('tokenType');
        };

        service.impersonate = function (username, token) {
            var authToken = service.tokenType() + ' ' + token;
            $cookies.put('token', authToken);
            $cookies.put('queryStringToken', token);
            $cookies.put('username', username);
        };

        service.xToken = function () {
            return $cookies.get('x_token');
        };

        service.token = function () {
            return $cookies.get('token');
        };

        service.queryStringToken = function () {
            return $cookies.get('queryStringToken');
        };

        service.tokenType = function () {
            return $cookies.get('tokenType');
        };

        service.username = function () {
            return $cookies.get('username');
        };

        service.isAuthenticated = function () {
            return !!$cookies.get('token');
        };

        return service;
    }
})();
