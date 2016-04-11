(function() {
	'use strict';

	angular.module('targestApp').config(config);

	config.$inject = [ '$httpProvider' ];
	function config($httpProvider) {
		$httpProvider.interceptors.push('mainLoadingSpinnerInterceptor');
		$httpProvider.interceptors.push('SessionInterceptor');
		$httpProvider.interceptors.push('notifyInterceptor');
	}
})();