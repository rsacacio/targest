(function () {
    'use strict';

    angular.module('targestApp').factory('SessionInterceptor', SessionInterceptor);
    angular.$inject = ['$location', '$q', 'AuthenticationResourceFactory'];

    function SessionInterceptor($location, $q, AuthenticationResourceFactory) {
        var sessionInjector = {
            request: function (config) {
                if (AuthenticationResourceFactory.isAuthenticated()) {
                    //if (config.url.indexOf('public') >= 0) {
                    //    config.headers['Authorization'] = AuthenticationResourceFactory.xToken();
                    //} else {
                        config.headers['Authorization'] = AuthenticationResourceFactory.token();
                    //}
                }
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    if (AuthenticationResourceFactory.isAuthenticated()) {
                        AuthenticationResourceFactory.destroy();
                        $location.path('login').search({st: 1});
                    }
                }
                return $q.reject(rejection);
            }
        };
        return sessionInjector;
    }
})();
