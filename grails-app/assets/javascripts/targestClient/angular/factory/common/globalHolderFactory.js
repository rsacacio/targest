angular.module('targestApp').factory('GlobalHolder', function ($log, $location, $window) {
    var service = {};

    var initialized = false;
    var currentURL = $location.protocol() + "://" + $location.$$host + ":" + $location.port() + $window.location.pathname;
    var urlLogout = currentURL + "logout";

    service.init = function (params) {
        host = params.host;
        initialized = true;
    };

    service.host = function () {
        return host;
    };

    service.setInitialized = function (initializedTmp) {
        initialized =  initializedTmp;
    };

    service.initialized = function () {
        return initialized
    };

    service.currentURL = function () {
        return currentURL;
    };

    service.urlLogout = function () {
        return urlLogout;
    };

    return service;
});